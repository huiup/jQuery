; (function ($) { // $作为参数
    // 需要给jQuery的原型添加方法，则其所有的对象都有此方法
    $.fn.bgColor = function (yanse) {
        // console.log(this); // this是调用这个bgColor方法的jQuery对象
        this.css('backgroundColor', yanse);

        // 返回调用这个方法的jquery对象本身
        return this;
    }
}(jQuery)); // 立即执行函数（jQuery作为参数）