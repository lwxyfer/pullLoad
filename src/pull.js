window.onload = function() {
  pull({
    node: '#wrapper',
    topFoo: add,
    botFoo: addBot,
  })
}

function pull({
  node = '', // 滚动的节点
  topFoo = '', // 回调函数
  botFoo = '',
}) {
  let $node = $(node);
  let scroll = new IScroll(node,{
    click:true,
    mouseWheel: true,
  });
  let topOffset = $node.outerHeight();
  console.log(topOffset)

  let topHolder = $('#wrapper [data-top-placeholder]')
  let botHolder = $('#wrapper [data-bot-placeholder]')
  let topLoading = $('#wrapper [data-top-loading]')
  let botLoading = $('#wrapper [data-bot-loading]')
  topHolder.css('display','none')
  topLoading.css('display','none')
  botHolder.css('display','none')
  botLoading.css('display','none')

  let timer = undefined; // debounce
  let status = undefined; // store callback function status

  scroll.on('scrollStart', function() {
    console.log('开始下拉操作');

    // 使用lite版，需手动对y值得变化做监听，难获取位置
    console.log(this.y);

    if( this.directionY === -1 ) {
      topHolder.css('display','block')

      if( timer ) clearTimeout(timer)

      timer = setTimeout(function(){
        topHolder.css('display','none')
        topLoading.css('display','block')
        // status = topFoo();
      },500);

    } else if (this.directionY === 1) {
      console.log(this.y)
      botHolder.css('display','block')

      if( timer ) clearTimeout(timer)

      timer = setTimeout(function(){
        botHolder.css('display','none')
        botLoading.css('display','block')
        // status = botFoo()
      },500)
    }

  });

  scroll.on('scrollEnd', function() {
    console.log('滚动结束');

    if( status ) {
      topHolder.css('display','none')
      topLoading.css('display','none')
      botHolder.css('display','none')
      botLoading.css('display','none')
    }

    setTimeout(function () {
      scroll.refresh();
    }, 100);
  });
}


var add = function() {
  let $scr = $('#list');
  $scr.first().prepend('<li>我是加载的</li>');
  return true
}

var addBot = function() {
  let $scr = $('#list');
  $scr.first().append('<li>我是加载的</li>');
  return true
}
