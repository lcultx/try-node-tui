// Generated by CoffeeScript 1.8.0
(function() {
  var TermUI, button;

  TermUI = require('node-term-ui');

  TermUI.enableMouse();

  button = new TermUI.Button({
    bounds: {
      x: 0,
      y: 0,
      w: 30,
      h: 3,
      label: 'I am a banana!',
      labelAnchor: 5
    }
  });

  button.on('mousedown', function() {
    button.bg = TermUI.C.y;
    return button.draw();
  });

  button.on('mouseup', function() {
    button.bg = TermUI.C.b;
    return button.draw();
  });

  button.draw();

}).call(this);

//# sourceMappingURL=try-node-term-ui.js.map