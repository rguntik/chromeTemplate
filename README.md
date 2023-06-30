# RgKeymap Chrome Extension Template

This is a Chrome extension template that demonstrates the usage of the RgKeymap library for creating hotkeys or key sequences in web applications. The extension adds customizable key combinations and their descriptions to a popup window.

## Configuring Key Combinations

To configure key combinations, you need to modify the `content.js` file. In this file, you can use the `popupKeymap.add(keys, callback, description)` method to add new key combinations. The method accepts the following parameters:

- `keys` - an array of keys that define the combination (e.g., `['ControlLeft', 'AltLeft', 'Numpad7']`).
- `callback` - a function that will be invoked when the key combination is pressed.
- `description` - a description of the key combination.

You can find detailed instructions on configuring key combinations in the [RgKeymap library usage guide](https://github.com/rguntik/rgKeymap).

Here's an example of adding a keymap using `PopupKeymap`:

```javascript
// Add a keymap using PopupKeymap
popupKeymap.add(['ControlLeft', 'AltLeft', 'Numpad7'], () => {
    alert('Press Control + Alt + Numpad 7');
}, 'Press Control + Alt + Numpad 7');
```
If you have any further changes or additions, please let me know.

