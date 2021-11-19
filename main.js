const {readFromFile,writeToFile,updateObject} =require('./helper.js');
// remove [0], output file should have the same json structure
let user1 = readFromFile('./myjson.json')[0];
let user2 = updateObject(user1);
//remove unused object
let user3 = {
  "firstName": "Bob",
  "lastName": "Smith",
  "gender": "male",
  "age": 35,
  "children": {
    "daugthers": [
      {
        "name": "Cristal",
        "gender": "female",
        "age": 18
      },
      {
        "name": "Hanna",
        "gender": "female",
        "age": 5
      }
    ],
    "sons": [
      {
        "name": "Mike",
        "gender": "male",
        "age": 15
      }
    ]
  },
  "hobbies": [
    "cycling",
    "swimming",
    "shooting"
  ],
  "luckyNumbers": [
    3,
    5,
    15,
    99,
    77
  ]
};

function deepEqual(elem1, elem2) {
    if(elem1 === elem2) {
        return true;
    }
    // simplify
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
      } //return true;
    } return false;
  }

//move outside the function
function newWriteTo(){
  // simplify
  if(deepEqual(user1, user2) == true){
    console.log('True')
  } else {
    writeToFile( './writeFile.json', user2)
  };
}

newWriteTo()




