const students = [
    {name: 'Alex', weight: 80 },
    {name: 'Gordon', weight: 60},
    {name: 'Michael', weight: 70}
];

// const studentNames = [];

// for (let i = 0; i < students.length; i++) {
    // console.log(students[i].name)
//    studentNames.push(sutdens[i].name);
// }

//           vvvvvvvvv  lamda/block      -> student.map - 一對一地,經過你的處理, 形成一個新名單出來
// 例如: 你的名單原本是一個 array object, 而你的新名單想形成 array of string, 就會使用 map 去做
const studentNames = students.map(function(original) { //而該function 會運作3次, 因為students有3個
    return original.name;
});

// 
const studentLessThan71kg = students.filter(function(original){ // 製造一個少於71kgD的名單, 而該filter的function都會運作3次,因有3名students
    if (original.weight < 71) { 
        return true;
    } else {
        return false;
    }
});

/*
const studentNamesThatLessThan71kg = students.filter(function(original){ // 製造一個少於71kgD的名單, 而該filter的function都會運作3次,因有3名students
    return original.weight < 71; // 另一種較簡短的寫法

    /*    if (original.weight < 71) {  其中一種寫法
        return true;
    } else {
        return false;
    }
}).map(function(original) { //而該function 會運作3次, 因為students有3個
    return original.name;
});
*/

// orginal可任意更改名字, 例如: 該項目以student為主, 可將original 更改為 s 簡寫
const lovelyList = students.filter(original => original.weight < 71).map(original => original.name); // 另一種較簡短的寫法

const anotherStudentNamesThatLessThan71kg = [];
for (let i = 0; i < students.length; i++) {
    if (original.weight < 71) {
        anotherStudentNamesThatLessThan71kg.push(students[i].name);
    }
}

const totalWeight = 0;
for (let i = 0; i < students.length; i++) {
    totalWeight += students[i].weight;
}

// reduce是運作兩個值包括: previous 和 current, 而reduce會運作3次就會擺放到current裡, previous即是上一個值return出來的一個值 ->例如
students.map(x => x.weight).reduce(function (previous, current) { // stufents.map(x => x.weight) // 該寫法代表將所有3個學生的體重拿出來
    // previous, current的運作模式: 
    // 1. previous = 0, current = 80; total = 80;
    // 2. previous = 80, current = 60; total = 140;
    // 3. previous = 140, current = 70; total = 210; 
     return  previous + current   
}, 0);

// reduce 較簡短的寫法
// students.map(x => x.weight).reduce((previous, current) => previous + current, 0);
 
// 以上為 reduce 的用法


console.log(studentNamesThatLessThan71kg);

// console.log(studentNames);
// map 和 filter 都是在 array 之上 Call, 再叫出一個 array 出來
// 而 reduce method 則不是 call 一個　array 出來, 而是去檢查一個值