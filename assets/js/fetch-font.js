const fs = require('fs');
// read theme color from _data/site.json
fs.readFile('./data/font.json', 'utf8', function(err, dataFile){
    console.log(`Reading /data/font.json...`)
    if(err){
        console.log(err);
        return;
    }
    
    dataFile = JSON.parse(dataFile);
    fs.readFile('./assets/scss/_variables.scss', 'utf-8', function (err, scssFile) {

        if(err){
            console.log(err);
            return;
        }

        var replaced = scssFile;

        // Change the variables to whatever was set in the data file
        if (dataFile.content_link_underline === true) {
            const replacementString = 'underline';
            replaced = replaced.replace(/\$content-link-decoration: .*/g, ('$content-link-decoration: ' + replacementString + ' !default' + ';'));
        }
        if (dataFile.content_link_underline === false) {
            const replacementString = 'none';
            replaced = replaced.replace(/\$content-link-decoration: .*/g, ('$content-link-decoration: ' + replacementString + ' !default' + ';'));
        }
        if (dataFile.link_color) {
            const replacementString = dataFile.link_color;
            replaced = replaced.replace(/\$link-color: .*/g, ('$link-color: ' + replacementString + ' !default' + ';'));
        }
        if (dataFile.content_link_color) {
            const replacementString = dataFile.content_link_color;
            replaced = replaced.replace(/\$content-link-color: .*/g, ('$content-link-color: ' + replacementString + ' !default' + ';'));
        }
        // Write result back to variables.scss
        fs.writeFile('./assets/scss/_variables.scss', replaced, 'utf-8', function (err) {
            console.log(`Replacing /assets/scss/_variables.scss...`);
            if(err){
                console.log(err);
            }
        });
    });
});