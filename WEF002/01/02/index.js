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

// parseInt()這個函數就是在括號裡面輸入一個字符串,然後返回一個整數結果,最簡單的方法是輸入一個字符串,再把字符串裡面的數字給提取出來,得到一個數字類型的數字
// 但是, 如果是輸入一個 0x開頭的字符串,就會按照十六進制的形式來轉換,如果不設定好規則,很容易發生混款
// 因此, parseInt可以傳入第二個參數, 第二個參數是一個基數,就是告訴函數需要多少進制
// 有特殊情況, 第二個參數, 如果參數為0, 那麼就以十進制來轉換, 參數小於2或大於36, 就返回NaN
year = parseInt(year); // parseInt(string, radix)   將壹個字符串 string 轉換為 radix 進制的整數， radix 為介於2-36之間的數。
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
