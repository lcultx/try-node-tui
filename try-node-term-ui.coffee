TermUI = require 'node-term-ui'

TermUI.enableMouse()

button = new TermUI.Button
  bounds:
    x: 0
    y: 0
    w: 30
    h: 3
    label: 'I am a banana!'
    labelAnchor: 5

button.on 'mousedown', ->
  button.bg = TermUI.C.y
  button.draw()

button.on 'mouseup', ->
  button.bg = TermUI.C.b
  button.draw()

button.draw()