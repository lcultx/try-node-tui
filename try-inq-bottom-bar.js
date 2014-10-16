/**
 * Created by yang on 14-10-16.
 */
var inquirer = require("inquirer");
var ui = new inquirer.ui.BottomBar();

// pipe a Stream to the log zone
//outputStream.pipe( ui.log );

// Or simply write output
//ui.log.write("something just happened.");
//ui.log.write("Almost over, standby!");

// During processing, update the bottom bar content to display a loader
// or output a progress bar, etc
ui.updateBottomBar("new bottom bar content");