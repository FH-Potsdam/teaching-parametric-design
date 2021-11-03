inputs / variables / random

#### saving our drawing

For now we have been drawing pixels, so we can only export images. Later we will learn how to draw and export vector graphics. To generate an image of your work, simple call the **save** command.

```js
save();
```

If you would add the **save** command to the **draw** function, the browser would try to save a file every time the draw runs. Instead we only want the save command to be executed when we want to. An easy solution is to call the **save** command when a key a certain key is pressed or the mouse is clicked. The next section will show you how to do this.

### Interactions

Interactions like a mouse click or a key press generate so called events. There are specific functions that are triggered if such an event occurs.

#### Mouse Click
Every time the mouse is clicked the following function is called and everything inside is executed:

```js
function mouseClicked() {
  // here goes the code
}
```

#### Key Press
A similar function is available when a keyboard button is pressed.

```js
function keyPressed() {
  // here goes the code
}
```

#### Saving on key/mouse event

Combining the mouse-click function with the save command:

```js
function mouseClicked() {
  save();
}
```