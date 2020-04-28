// on every year that is evenly divisible by 4
//  except every year that is evenly divisible by 100
//    unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

// 4 % 4 === 0
// 4 % 5 === 4
// 5 % 4 === 1
// 6 % 4 === 2

/*
while (true) {
    const year = prompt("Which year ar?");
    if (year === '' || year === null) { //表示 '' 一個empty string 
        break;
    }
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log('Leap year')
            } else {
                console.log('Not a leap year');
            }
        } else {
            console.log('Leap year');
        }
    
    } else {
        console.log('Not a leap year');
    }

}
*/
while (true) {
    let year = prompt("Which year ar? (e.g. 800, 1988, bc20)");
    if (year === '' || year === null) { //表示 '' 一個empty string 
        break;
    }

// Regular Expression
year = year.replace(/[^0-9bc]/g, '') // /[^0-9bc]/g 表示除了0-9bc的資料以外的所有資料都排除在外

if (year.startsWith('bc')){ // startsWith()表示由bc開始
    year = - year.substr(2); // 如果只要後面的字就用 substr()表示
}

year = parseInt(year);
if (isNaN(year)) {
    console.log('Not a valid year :(');
    continue; // 不想該運作由此停止, 想該項目繼續運作下一個loop, 可加continue作繼續運算繼續loop
}

/* if (year < 1000) {
    console.log('Why would you bother some year before 1000?');
    continue;
}
*/

let isLeapYear = false;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 ===0) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
        }
    }

    if (isLeapYear) {
        console.log(year + ' is a leap year')
    } else {
        console.log(year + ' is not leap year')
    }
}

//以上兩種寫法都是一樣的
