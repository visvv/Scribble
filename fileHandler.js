var fs = require('fs');

var printFileContent = function (fileName) {
    readFile(fileName, function (fileContent) {
        console.log(fileContent);
    })
};

var user = { name : "vishnu"};


writeFile("test.txt", "this is the test file content.", function () {
    isFileExists("test.txt", printFileContent);
});

//deleteFile("test.txt", function(){console.log("file deleted successfully!!")});


// isFileExists("app.js", printFileContent)

function deleteFile(fileName, successCallback){
    fs.unlink(fileName, function (err) {
        if(err) console.error(err);
        else{
            successCallback();
        }
    })
}

function readFile(fileName, successCallback) {
    fs.readFile(fileName, 'utf8', function (err, fileContent) {
        if (err) console.error(err);
        else {
            successCallback(fileContent);
        }
    });
}
// chunk file reading.

function writeFile(fileName, fileContent, successCallback) {
    fs.writeFile(fileName, fileContent, function (err) {
        if (err) console.error(err);
        else {
            successCallback();
        }
    });
}


function isFileExists(fileName, callback) {
    fs.stat(fileName, function (err, fileStat) {
        if (err) {
            console.error(err);
        } else {
            if (fileStat.isFile()) {
                callback(fileName);
            } else if (fileStat.isDirectory()) {
                console.log("folder exists");
            }
        }
    });
}



