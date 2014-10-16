/**
 * Created by yang on 14-10-16.
 */

var inquirer = require("inquirer");
inquirer.prompt(['this a question..'], function( answers ) {
    console.log(answers);
});