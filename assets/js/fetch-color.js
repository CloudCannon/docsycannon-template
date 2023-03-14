const fs = require('fs');
// read theme color from _data/site.json
fs.readFile('./data/colors.json', 'utf8', function(err, dataFile){
    
    if(err){
        console.log(err);
        return;
    }
    
    // parse file to JSON so that the variables can be accessed
    dataFile = JSON.parse(dataFile);
    // TODO: Check if dataFile.primary_theme_color is set
    // Open variables.scss and search/replace "$theme: ..." with color from data file
    fs.readFile('./assets/scss/_variables.scss', 'utf-8', function (err, scssFile) {

        if(err){
            console.log(err);
            return;
        }

        var replaced = scssFile;

        // Change the variables to whatever was set in the data file
        if (dataFile.primary) {
            const replacementString = dataFile.primary;
            replaced = replaced.replace(/\$primary: .*/g, ('$primary: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.secondary) {
            const replacementString = dataFile.secondary;
            replaced = replaced.replace(/\$secondary: .*/g, ('$secondary: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.success) {
            const replacementString = dataFile.success;
            replaced = replaced.replace(/\$success: .*/g, ('$success: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.info) {
            const replacementString = dataFile.info;
            replaced = replaced.replace(/\$info: .*/g, ('$info: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.warning) {
            const replacementString = dataFile.warning;
            replaced = replaced.replace(/\$warning: .*/g, ('$warning: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.danger) {
            const replacementString = dataFile.danger;
            replaced = replaced.replace(/\$danger: .*/g, ('$danger: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.white) {
            const replacementString = dataFile.white;
            replaced = replaced.replace(/\$white: .*/g, ('$white: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.light) {
            const replacementString = dataFile.light;
            replaced = replaced.replace(/\$light: .*/g, ('$light: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.dark) {
            const replacementString = dataFile.dark;
            replaced = replaced.replace(/\$dark: .*/g, ('$dark: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.blue) {
            const replacementString = dataFile.blue;
            replaced = replaced.replace(/\$blue: .*/g, ('$blue: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.orange) {
            const replacementString = dataFile.orange;
            replaced = replaced.replace(/\$orange: .*/g, ('$orange: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.gray) {
            const replacementString = dataFile.gray;
            replaced = replaced.replace(/\$gray: .*/g, ('$gray: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.black) {
            const replacementString = dataFile.black;
            replaced = replaced.replace(/\$black: .*/g, ('$black: ' + replacementString + ' !default' + ';'));
        } 
        if (dataFile.links) {
            const replacementString = dataFile.links;
            replaced = replaced.replace(/\$links: .*/g, ('$links: ' + replacementString + ' !default' + ';'));
        }
        // Write result back to variables.scss
        fs.writeFile('./assets/scss/_variables.scss', replaced, 'utf-8', function (err) {
            if(err){
                console.log(err);
            }
        });
    });
});