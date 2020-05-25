/* 929. Unique Email Addresses

 * @param {string[]} emails
 * @return {number}
 * 
 * Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

 

Example 1:

Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

 */


/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    // .split('@')
    // .solit('+')
    // .replace(/\./g, '') 這個是移除.的寫法
    // emailPart[0] + '@' + emailPart[1] 組成一個新的 array就完成
    for (let i=0; i < emails.length; i++) { // 使用for loop把email逐一找出來
        // al.ex+hongkong@gmail.com
     // 此部分為parts [0]   此部分為parts[1]
        const parts = emails[i].split("@");
        
        // al.ex    +hongkong <<< parts[0]
        // names[0]  names[1]
        const names = parts[0].split('+'); // parts[0] 表示只取 al.ex該部分, 亦即是指一個 array(註明: 因為parts是一個array - array就如一個櫃,從櫃入面的格子裡取出東西的意思) 入面的第0格的意思
        
        // al.ex <<< names[0]
        const finalName = names[0].replace(/\./g,""); // g是代表入面所有的 . 符號, 如果沒有g就只取代一個 . 符號就完結
        
        emails[i] = finalName + '@' + parts[1]
    }
    
    // use object 是如何透過 object 去幫助衡量這些東西是否unique的一個經常用法
    const uniqueEmail = {
        //"alex@gmail.com": true,
        //"gordon@gmail.com": true
    };
    let count = 0;
    
    for (let email of emails) {
        // uniqueEmail.key 兩種key是一樣的
        // uniqueEmail["key"] 該key的彈性較大, 因為"key"是一個string
        if (uniqueEmail[email] !== true) {
            //表示如果不等於true就加上 1
            count++;
            uniqueEmail[email] = true;
        }
    }
    
    return count;
};