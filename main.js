const {readFromFile,writeToFile,updateObject} =require('./helper.js');

let user1 = readFromFile('./myjson.json')[0];
let user2 = updateObject(user1);




function deepEqual(elem1, elem2) {
    if(elem1 === elem2) {
        return true;
    }
    if(typeof elem1 == 'object' && typeof elem2 == 'object' && elem1 != null && elem2 != null) {
      if(Object.keys(elem1).length == Object.keys(elem2).length) {

        if(Array.isArray(elem1) && Array.isArray(elem2)){
          for(let key in elem1){
            if(!deepEqual(elem1[key], elem2[key])){
              return false

            }
          } return true;
        } else {
          for(key in elem1){
            if(key in elem2){
              if(!deepEqual(elem1[key], elem2[key])){
                return false
  
              }
            };
          }
        }return true;
      }
    } return false;
  }


if(!deepEqual(user1, user2)){
  console.log('True')
};




