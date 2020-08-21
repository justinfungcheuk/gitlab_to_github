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
    if (year === '' || year === null) { // '' 表示 一個empty string
    // year === '' 當中的 '' empty string 代表無任何東西
    // If the users clicks the Cancel button, this function returns null
    // 所以要寫上 year === null, 表示如果該 year 是 null 就停止運作

        break; 
        //  break 代表將該 while loop 停止
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
            //不能被 100 整除, 就表示是 leap year
        }
    
    } else {
        console.log('Not a leap year');
    } // 有多少個 if 就要有多少個 else, 除非 if當中有 break 來停止運作

}
*/
while (true) {
    let year = prompt("Which year ar? (e.g. 800, 1988, bc20)");
    //該部分不使用 const year 而使用 let year 是因為會對 year 作出再處理
    if (year === '' || year === null) { //表示 '' 一個empty string 
        break;
    }

    // Regular Expression 正規表達法 - 將一些不需要的字刪除
    year = year.replace(/[^0-9bc]/g, '')
        // /[^0-9bc]/g 表示除了0-9bc的資料以外的所有資料都排除在外
        /* 使用 replace() 的正規表達法來取代所需要的資料
         * \s 代表 不要空格
         * g  代表 多於一個
         * '' 代表 由空的 string 取代
         * [^0-9] 將方框包起, 及使用該符號 ^ 就表示除了 0-9 以外的所有東西都會被排除
         * bc 代表 要bc該字, 但排除其他
         */

    if (year.startsWith('bc')) { // startsWith()表示由bc開始
        year = -year.substr(2); // 如果只要後面的字就用 substr()表示
        // 多數使用 substr(1, 2) 第一個參數 1 代表由那一隻字開始數起, 第二個參數 2 代表提取多少個字
        // 或者 substr(2) 代表由第二個字開始數起, 將第二個字及後面所有的字提取
        // year = - year.substr(2).replace(/[^0-9]/g, '') 表示由第二個字開始取代
    }

    // parseInt()這個函數就是在括號裡面輸入一個字符串,然後返回一個整數結果,最簡單的方法是輸入一個字符串,再把字符串裡面的數字給提取出來,得到一個數字類型的數字
    // 但是, 如果是輸入一個 0x開頭的字符串,就會按照十六進制的形式來轉換,如果不設定好規則,很容易發生混款
    // 因此, parseInt可以傳入第二個參數, 第二個參數是一個基數,就是告訴函數需要多少進制
    // 有特殊情況, 第二個參數, 如果參數為0, 那麼就以十進制來轉換, 參數小於2或大於36, 就返回NaN
    year = parseInt(year); // parseInt(string, radix)   將壹個字符串 string 轉換為 radix 進制的整數， radix 為介於2-36之間的數。
    if (isNaN(year)) {
        //如果不是一個數目字, 就透過 continue 繼續輸入資料, 運作下一個 loop
        console.log('Not a valid year :(');
        continue; // 不想該運作由此停止, 想該項目繼續運作下一個loop, 可加continue作繼續運算繼續loop
    }

    /* if (year < 1000) {
        console.log('Why would you bother some year before 1000?');
        continue;
    }
    */

    let isLeapYear = false;
    // 設定該 let isLeapYear = false; 代表不用將其他是 false的值寫出來, 直接設定該值的Boolean為false就可
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            // if year can % 100 === 0, not leap year
            if (year % 400 === 0) {
                //exception case, if year % 400 === 0, is leap year
                isLeapYear = true;
                // Therefore, if year can % 4 or 100 or 400 === 0, is leap year
            }
        } else {
            isLeapYear = true;
            // 該 else 代表 year % 400 不是等於 0
        }
    }

    if (isLeapYear) {
        console.log(year + ' is a leap year')
    } else {
        console.log(year + " isn\'t a \"leap year\"")
    }
}

//以上兩種寫法都是一樣的