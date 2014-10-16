/**
 * Created by yang on 14-10-16.
 */
var ncurses = require('ncurses')
    , widgets = require('ncurses/lib/widgets')
    , win = new ncurses.Window();

widgets.InputBox('Enter your name:', {
    pos: 'center',
    style: {
        colors: {
            bg: 'blue',
            input: {
                fg: 'red',
                bg: 'black'
            }
        }
    }
}, function(input) {
    if (!input) {
        input = 'nothing';
    }
    win.centertext(0, 'You entered: ' + input);
    win.refresh();
    setTimeout(function() { win.close(); }, 1000);
});