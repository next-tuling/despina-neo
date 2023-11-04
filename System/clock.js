//获取系统时间并显示

//使用方法：在 HTML 的 <body onload="load();"> 标签内使用 <script> 引用，或是将以下所有代码全部复制到 HTML 内需要显示时间的 <script< >元素标签内。

//获取时间
Date.prototype.format = function (fmt) {
    var o = {
        "y+": this.getFullYear, //年
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds() //秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//引用并显示时间

//在 HTML 需要显示时间的标签上添加 id=""，如引用yyyy-mm-dd标签，就添加 id="yyyy-mm-dd"

//日期（yyyy-mm-dd）
setInterval("document.getElementById('yyyy-mm-dd').innerHTML = (new Date()).format('yyyy 年 MM 月 dd 日');", 60000);
//日期（mm-dd-yyyy）
setInterval("document.getElementById('mm-dd-yyyy').innerHTML = (new Date()).format('MM 月 dd 日，yyyy年');", 60000);
//时间（hh-mm）
setInterval("document.getElementById('hh-mm').innerHTML = (new Date()).format('hh:mm');", 100);
//时间（hh-mm-ss）
setInterval("document.getElementById('hh-mm-ss').innerHTML = (new Date()).format('hh:mm:ss');", 10