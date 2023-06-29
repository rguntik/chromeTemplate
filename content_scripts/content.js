const rgKeymap = new RgKeymap();
const popupKeymap = new PopupKeymap(rgKeymap);

popupKeymap.add(['ControlLeft', 'AltLeft', 'Numpad7'], () => {
    alert('Press Control + Alt + Numpad 7');
}, 'Press Control + Alt + Numpad 7');

popupKeymap.add(['ControlLeft', 'AltLeft', 'Numpad8'], () => {
    alert('Press Control + Alt + Numpad 8');
}, 'Press Control + Alt + Numpad 8');
