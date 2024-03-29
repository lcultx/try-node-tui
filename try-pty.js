/**
 * Created by yang on 14-10-16.
 */
var pty = require('pty.js');

var term = pty.spawn('bash', [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
});

term.on('data', function(data) {
    console.log(data);
});

term.write('ls\r');
term.resize(100, 40);
term.write('ls /\r');

console.log(term.process);