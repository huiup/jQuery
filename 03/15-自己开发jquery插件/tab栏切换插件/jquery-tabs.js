(function ($) {
    // 给$原型添加tabs方法
    $.fn.tabs = function (options) {

        var $bigDiv = this;
        $bigDiv.find(options.tabHeads).on('click', function () {
            // 这里的this为DOM对象，转换为jquery对象
            $(this).addClass(options.tabHeadsClass).siblings().removeClass(options.tabHeadsClass);

            // 获取当前点击li的索引
            var li_index = $(this).index();

            //获取与li的索引一致的页面,给他添加option.tabBodysClass（显示），其他的兄弟页面移除这个类
            $bigDiv.find(options.tabBody).eq(li_index).addClass(options.tabBodyClass).siblings().removeClass(options.tabBodyClass);

        })

        // 把jquery对象返回
        return $bigDiv; 
    }
}(jQuery));