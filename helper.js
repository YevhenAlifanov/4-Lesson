
const fs = require('fs-extra');


function readFromFile(path){
    return fs.readJSONSync(path);
};

let user = readFromFile('./myjson.json');



function writeToFile( path, obj){
    return fs.writeJSONSync(path, obj)
};


function updateObject(mainObj){
    let objCopi = JSON.parse(JSON.stringify(mainObj));

    objCopi.hobbies = 'hike';
    objCopi.children.sons[0].age = 11;
    objCopi.children.daugthers[0].name = 'Lena';
    return objCopi;
};

updateObject(user[0]);


module.exports = {readFromFile,writeToFile,updateObject}; 
