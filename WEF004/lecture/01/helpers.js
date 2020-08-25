const students = [ // students array
    { name: 'Alex', weight: 80 },
    { name: 'Gordon', weight: 60 },
    { name: 'Michael', weight: 70 }
];

// const studentNames = [];

// for (let i = 0; i < students.length; i++) {
// console.log(students[i].name) 拿去上面的三個人名 Alex, Gordon, Michael
//    studentNames.push(sutdens[i].name); 用 push 將上面的三個人名擺到 studenNames, 將上面的 array of Object 變成 array of string
// }

//           下面的 function 是屬於 lambda /block 都是一堆指引來的      -> student.map - 一對一地,經過你的處理, 形成一個新名單出來
// 例如: 你的名單原本是一個 array of object, 而你的新名單想形成 array of string, 就會使用 map 去做
const studentNames = students.map(function(original) { // original 代表原本的模樣而該function 會運作3次, 因為students有3個
    /* 透過 map, 如果你有個 array, 如該題的 array 是 students, 
     * 你想有另一個 array 是和 students array 一模一樣的長度, 
     * 但該新 array 多出來的資料, 是需要經過某些特定的處理, 
     * 需要放一個 function 在 students.map() 入面, 為該 array 加上該 function 指引
     * 而該指引是甚麼呢? 你用該內部的 function, 每次 call 該 function 時, 加上它的原本的模樣 (original)
     * 就會 return 去它原本的模樣的名字出來, orignal.name
     * 即是: { name: 'Alex'}, { name: 'Gordon'}, { name: 'Michael'}
     * 所以該 method, students.map 會給予你一個完成品
     * 所以你需要給予它一個 variable 去指向該完成品
     * 即是: 
     * const studentNames = students.map(function(original) { 
     * return original.name;
     * });
     * 
     * 以上方法可以得出和上面 for loop 一樣的結果 
     * 
     * .map 可以一對一地經過你的處理製作一份新名單出來, 
     * 如你原本的名單是一份 array of object, 你的新名單想要 array of string
     * 就需要透過 .map 去操作!!!!!!!!
     */
    return original.name;
});

// 
const studentLessThan71kg = students.filter(function(original) {
    // 製造一個少於71kgD的名單, 而該filter的function都會運作3次,因有3名students

    //透過 filter 製作一份新名單出來, true就保留, false就刪除
    if (original.weight < 71) {
        return true;
    } else {
        return false;
    }
});

console.log(studentLessThan71kg);
/*
const studentNamesThatLessThan71kg = students.filter(function(original){ 
    // 製造一個少於71kg的名單, 而該filter的function都會運作3次,因有3名students
    return original.weight < 71; // 另一種較簡短的寫法(和下面的 if 是一樣的效果)

    /*    if (original.weight < 71) {  其中一種寫法
        return true;
    } else {
        return false;
    }
}).map(function(original) { //而該function 會運作3次, 因為students有3個
    //透過該 .map 就可以拿取需要保留的名字, 即是 "Gordon" 和 "Michael"
    return original.name;
});
*/


// const StudentNamesThatLessThan71kg = students.filter(function(original) {
//     return original.weight < 71;
// }).map(function(original){
//     return original.name;
// })

//arrow function - 如只有一個 parameter 可以不加闊號, 直接 (original =>, 但有兩個parameter就需要加闊號
const lovelyList = students.filter(x => x.weight < 71).map(x => x.name);
//上面寫法和再上面的 return 寫法是一樣的


// orginal可任意更改名字, 例如: 該項目以student為主, 可將original 更改為 s 簡寫
const lovelyList = students.filter(original => original.weight < 71).map(original => original.name); // 另一種較簡短的寫法

const anotherStudentNamesThatLessThan71kg = [];
for (let i = 0; i < students.length; i++) {
    if (original.weight < 71) {
        anotherStudentNamesThatLessThan71kg.push(students[i].name);
    }
}

//將上面三個的 weight 體重加起來
const totalWeight = 0;
for (let i = 0; i < students.length; i++) {
    totalWeight += students[i].weight;
}

/* 該 reduce 是運作兩個 parameter 的值包括: 
 * 第一個參數 (function(previous, current) { 
 *    return previous + current
 * },
 * 第二個參數 0);
 */
// 而 reduce 會運作3次就會擺放到current裡, previous即是上一個值return出來的一個值 ->例如
students.map(x => x.weight).reduce(function(previous, current) {
    // stufents.map(x => x.weight) // 該寫法代表將所有3個學生的體重拿出來
    // previous, current的運作模式: 
    // 當中的 x.weight 包含三人的體重: 80, 60, 70
    // 操作第一次. previous = 0, current = 80; total = 80; 所以 return 80
    // 操作第二次. previous = 80, current = 60; total = 140; 所以 return 140
    // 操作第三次. previous = 140, current = 70; total = 210; 所以 return 210
    // 以上為 reduce 的用法
    return previous + current
}, 0);

// reduce 較簡短的寫法
students.map(x => x.weight).reduce((previous, current) => previous + current, 0);
console.log(studentNamesThatLessThan71kg);

// console.log(studentNames);
// map 和 filter 都是在 array 之上 Call, 再叫出一個 array 出來
// 而 reduce method 則不是 call 一個　array 出來, 而是去檢查一個值