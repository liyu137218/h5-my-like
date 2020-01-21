document.addEventListener('plusready', function(a) { //等待plus ready后再调用5+ API：
    //// 在这里调用5+ API
    var first = null;
    plus.key.addEventListener('backbutton', function() { //监听返回键
        //首次按键，提示‘再按一次退出应用’
        if (!first) {
            first = new Date().getTime(); //获取第一次点击的时间戳
            // console.log('再按一次退出应用');//用自定义toast提示最好
            // toast('双击返回键退出应用'); //调用自己写的吐丝提示 函数
            plus.nativeUI.toast("双击退出", {duration:'short'}); //通过H5+ API 调用Android 上的toast 提示框
            setTimeout(function() {
                first = null;
            }, 1000);
        } else {
            if (new Date().getTime() - first < 1000) { //获取第二次点击的时间戳, 两次之差 小于 1000ms 说明1s点击了两次,
                plus.runtime.quit(); //退出应用
            }
        }
    }, false);
});