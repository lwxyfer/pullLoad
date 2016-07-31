// var myScroll;
//
// function loaded () {
//     myScroll = new IScroll('#wrapper', {
//         mouseWheel: true,
//         click: true
//      });
// }

document.addEventListener('touchmove', function (e) {
    e.preventDefault();
    pull({
        node:'#wrapper'
    })
}, false);

function pull({
    node = '', // 滚动的节点
    triggerDistance = '', // 下拉触发距离
    upTitle = false, // 下拉显示提示，不设置默认为无
    loading = '我是圈圈', // 后期考虑改为知乎类似的彩虹圈
    downTitle = false, // 同上
    upFoo = '', // 回调函数
    downFoo = '',
    auto = 'false', // 到底后是否自动刷新
}) {
    let $node = $(node);
    let scroll = new IScroll(node,{
        click:true,
        mouseWheel: true,
    });
    scroll.on('scrollStart', function() {
        console.log('开始下拉操作');
        console.log(this.directionY)
    });
    scroll.on('scrollEnd', () => {
        console.log('滚动借宿')
    });
}
