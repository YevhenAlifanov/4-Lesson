/*
Remove commented code
 */
const fs = require('fs-extra');
// fs.readFile('./myjson.js', 'utf-8', ('err, jsonString') => {
//     console.log(jsonString)
// })

function readFromFile(path){
    return fs.readJSONSync(path);
};

//remove unused variable
let user = readFromFile('./myjson.json')[0];

function writeToFile( path, obj){
    return fs.writeJSONSync(path, obj)
};



// function updateObject(mainObj){
//     let objCopi = {};
    
//     let key;
//     for (key in mainObj){
//         objCopi[key] = mainObj[key];
//     }
//     objCopi.hobbies[3] = 'hike';
//     objCopi.children.sons[0].age = 11;
//     return objCopi; // ещё один вариант копирования объекта
// }

function updateObject(mainObj){
    let objCopi = JSON.parse(JSON.stringify(mainObj));

    objCopi.hobbies[3] = 'hike';
    objCopi.children.sons[0].age = 11;
    objCopi.children.daugthers[0].name = 'Lena';
    return objCopi;
};


// remove unused variable
const copy = updateObject(user);
// console.log(copy);




// writeToFile('./writeFile.json', copy);

module.exports = {readFromFile,writeToFile,updateObject}; 
