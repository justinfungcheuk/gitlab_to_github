//嘗試創建一個可以執行簡單動畫的函數
/*
 * 參數:
 *     obj: 要執行動畫的對象
 *    attr: 要執行動畫的樣式, 比如: left top width height 這些都是可以傳遞的樣式, 傳甚麼就改甚麼
 *  target: 執行動畫的目標位置
 *   speed: 移動的速度 (正數向右移動, 負數向左移動)
 *callback: 回調函數, 這個函數將會在動畫執行完畢以後執行
 */

//嘗試創建一個可以執行簡單動畫的函數
function move(obj, attr, target, speed, callback) { //因為這個動畫是給 box1 添加的, 所以需要把 box1 作為參數傳遞進去函數裡面, 所以需要寫上 (obj)
    //關閉上一個定時器
    clearInterval(obj.timer); //用途是取消連續按鈕增加移動速度

    //獲取元素目前的位置
    var current = parseInt(getStyle(obj, attr));

    //判斷速度的正負值
    //如果從 0 向 800 移動, 則 speed 為正
    //如果從 800 向 0 移動, 則 speed 為負
    if (current > target) {
        //由於 current > target, 所以此時速度應為負值
        speed = -speed;
    }

    //開啟一個定時器, 用來執行動畫效果
    //向執行動畫的對象中添加一個 timer 屬性, 用來保存它自己的定時器的標識
    obj.timer = setInterval(function () { //把var去掉 用途是取消連續按鈕增加移動速度

        //獲取 box1 的原來的 left 值
        var oldValue = parseInt(getStyle(obj, attr)); // 運用 parseInt()把一個字符串的和法數字取出來

        //在舊值的基礎上增加
        var newValue = oldValue + speed;

        //判斷 newValue 是否大於 800
        //從 800 向 0 移動
        //向左移動時, 需要判斷 newValue 是否小於 target
        //向右移動時, 需要判斷 newValue 是否大於 target
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) { //左右的條件只要滿足一條, 就可以讓它等於 target
            //    向左移動就代表小於該目標 target      向右移動就代表大於該目標 target
            newValue = target;
        }

        //將新值設置給 box1
        obj.style[attr] = newValue + "px"; //因為 [attr] 是一個變量, 所以需要添加 [] 中括號, 因為當你傳遞的是 height/width/left/top 都可以傳遞這些變量

        //當元素移動到 0px 時, 使其停止執行動畫
        if (newValue == target) {
            //達到目標, 關閉定時器
            clearInterval(obj.timer);
            //動畫執行完畢, 調用回調函數
            callback && callback(); // 如果傳回到函數才執行, 沒有傳遞就不執行
            //有 調用    沒有 不調用, 所以該寫法是無論傳不傳都可以
        }

    }, 30);
}
/*
 * 定義一個函數, 用來獲取指定元素的當前的樣式
 * 參數:
 *         obj  要獲取樣式的元素
 *         name 要獲取樣式的樣式名
 */
function getStyle(obj, name) {

    if (window.getComputedStyle) { //因為 getComputedStyle 是屬於全局裡面的, 所以它是 window 對象的屬性, 因此 window.getComputedStyle 和 getComputedStyle 是一樣的
        //所以加了 window. 就變成了一個對象的屬性, 而沒有加 window. 的時候則是一個變量需要去做出尋找

        //正常瀏覽器的方式, 具有 getComputedStyle() 方法
        return getComputedStyle(obj, null)[name];
    } else {
        // IE8 的方式, 沒有 getComputedStyle() 方法
        return obj.currentStyle[name];
    };
};

//定義一個函數, 用來向一個元素中添加指定的 class 屬性值
/*
 * 參數:
 *  obj 要添加 class屬性的元素
 *  cn  要添加的 class 值
 */
function addClass(obj, cn) { // class 代表類的操作

    //檢查 obj 中是否含有 cn
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn; //如果沒有 ! class, 就添加 obj.className += " " + cn;
    }
}

/*
 * 判斷一個元素中是否含有指定的 class 屬性值
 *  如果有該 class, 則返回 true, 沒有則返回 false
 * 
 */
function hasClass(obj, cn) { //判斷這個 obj 有沒有 cn

    //判斷 obj 中有沒有 cn class
    //創建一個正則表達式
    //var reg = /\bb2\b/;
    var reg = new RegExp("\\b" + cn + "\\b");

    //alert(reg);

    return reg.test(obj.className);

};

/*
 * 刪除一個元素中的指定的 class 屬性
 */
function removeClass(obj, cn) {
    //創建一個正則表達式
    var reg = new RegExp("\\b" + cn + "\\b");

    //刪除 class
    obj.className = obj.className.replace(reg, ""); // "" 利用空串去替換對應的 reg 內容, 所以換成了 "" 空串就代表沒有了
}

/* 最好用的是 toggleClass 比較智能, 可以切換
 * toggleClass 可以用來切換一個類
 *    如果元素中具有該類, 則刪除
 *    如果元素中沒有該類, 則添加
 */
function toggleClass(obj, cn) {

    //判斷 obj 中是否有 cn
    if (hasClass(obj, cn)) {
        //有, 則刪除
        removeClass(obj, cn);
    } else {
        //沒有, 則添加
        addClass(obj, cn);
    }
}