/* 933. Number of Recent Calls
Write a class RecentCounter to count recent requests.

It has only one method: ping(int t), where t represents some time in milliseconds.

Return the number of pings that have been made from 3000 milliseconds ago until now.

Any ping with time in [t - 3000, t] will count, including the current ping.

It is guaranteed that every call to ping uses a strictly larger value of t than before.

 

Example 1:

Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
Output: [null,1,2,3,3]
*/

class RecentCounter {
    constructor() {
        this.pastPings = [] // 先建立一個自己的記憶 array [] 
    }
    
    ping(t) {
        // 當每一次被Call的時候, 就會將該新的時間放入去我的記憶裡, 用自己的紀錄去執行
        this.pastPings.push(t); // 將pastPings的記憶, 加入了自己ping入去的數字
        
        let count = 0;
        for (let i = 0; i < this.pastPings.length; i++) { // 所有就用該 for loop 去執行
            if (this.pastPings[i] >= t -3000) {
                count ++;
            }
        }
        
        return count;
    }
}

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const obj = new RecentCounter()
obj.ping(1) // 1 [1]
obj.ping(2) // 2 [1, 2]
obj.ping(100) // 3 [1, 2, 100] 
obj.ping(3001)// 4 [1, 2, 100, 3001]
obj.ping(3002)// 4 [1, 2, 100, 3001, 3002] 到達3002時, 1不用再理會, 因為是在3002之前call了多少次