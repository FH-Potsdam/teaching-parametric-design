
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginTOC = require('eleventy-plugin-toc');
const fs = require('fs');
const { findNavigationEntries } = require('@11ty/eleventy-navigation/eleventy-navigation');

const moment = require('moment');

const slugifyValue = (value = '') => value
  .toString()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const makeVideoAnchor = (videoSource, pageUrl = '') => {
  const pagePart = slugifyValue(pageUrl);
  const sourcePart = slugifyValue(videoSource);
  const parts = [pagePart, sourcePart].filter(Boolean);
  return parts.length ? `video-${parts.join('-')}` : '';
};

module.exports = function(config) {

  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // custom collection of 3d previews to generate index/json files
  config.addCollection("preview3d", function(collection) {
    return collection.getFilteredByGlob("./src/site/code/3d/*.md");
  });

  config.addCollection("videoLibrary", function(collectionApi) {
    const navEntries = findNavigationEntries(collectionApi.getAll());
    const entriesByUrl = new Map();

    collectionApi.getAll().forEach(item => {
      if (item.url) {
        entriesByUrl.set(item.url, item);
      }
    });

    const locales = new Set(["de", "en", "dg"]);
    const videos = [];

    const extractVideos = (content, locale, pageMeta) => {
      let currentHeading = "";
      const tokenRegex = /{{\s*(h2|video)\((.*?)\)\s*}}/gs;

      for (const match of content.matchAll(tokenRegex)) {
        const [, macroName, args] = match;
        const stringArgs = Array.from(args.matchAll(/"([^"]*)"/g), arg => arg[1]);

        if (!stringArgs.length) continue;

        if (macroName === "h2") {
          const [heading = ""] = stringArgs;
          currentHeading = heading || currentHeading;
          continue;
        }

        const [url = "", poster = "", captionFile = "", captionLabel = "", localeArg = "", dgUrl = ""] = stringArgs;
        const source = locale === "dg" && dgUrl ? dgUrl : url;
        const anchorId = makeVideoAnchor(source, pageMeta.url);

        videos.push({
          locale,
          pageUrl: pageMeta.url,
          pageTitle: pageMeta.title,
          videoTitle: currentHeading || pageMeta.title,
          videoId: source,
          videoSrc: source,
          anchorId,
          poster,
          captionFile,
          captionLabel,
          localeArg,
        });
      }
    };

    const walkNav = entry => {
      const page = entriesByUrl.get(entry.url);
      if (page && locales.has(page.data.locale)) {
        try {
          const content = fs.readFileSync(page.inputPath, 'utf-8');
          extractVideos(content, page.data.locale, {
            url: entry.url,
            title: entry.title || page.data.title || page.fileSlug,
          });
        } catch (error) {
          console.warn(`Unable to read content for video extraction: ${entry.url}`, error);
        }
      }

      if (entry.children?.length) {
        entry.children.forEach(walkNav);
      }
    };

    navEntries.forEach(root => walkNav(root));

    return videos;
  });

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');
  config.addLayoutAlias('home', 'layouts/home.njk');

  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);

  // add navigation data object
  config.addPlugin(eleventyNavigationPlugin);

  config.addFilter('videosByLocale', (videos, locale) => (videos || []).filter(video => video.locale === locale));
  config.addFilter('videoAnchor', (videoSource, pageUrl = '') => makeVideoAnchor(videoSource, pageUrl));

  config.addPlugin(pluginTOC, {
    tags: ['h2'],
    wrapper: '',
    ul: true
  });

  config.addFilter("pageNav", function(navigation, page, locale) {
    const pageNav = {
      back: null,
      next: null
    };

    let foundPage = false;

    const check = (entry) => {
      if (entry.url !== page.url && !foundPage) {
        pageNav.back = entry;
      }
      if (foundPage && pageNav.next === null) {
        pageNav.next = entry;
      }
      if (entry.url === page.url) {
        foundPage = true;
      }
    };

    navigation.forEach(nav => {
      if (nav.key === locale){
        nav.children.forEach(child => {
          check(child);
          child.children.forEach(entry => {
            check(entry);
          });
        });
      }
    });

    return pageNav;
  });

  // compress and combine js files
  config.addFilter("jsmin", function(code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
      if( minified.error ) {
          console.log("UglifyJS error: ", minified.error);
          return code;
      }
      return minified.code;
  });

  config.addNunjucksFilter("date", function (date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");
  config.addPassthroughCopy("./src/site/fonts");
  config.addPassthroughCopy("./src/site/js");
  config.addPassthroughCopy({"./src/site/_includes/roots" : "."});

  // make the seed target act like prod
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: "src/site",
      output: "dist"
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };

};