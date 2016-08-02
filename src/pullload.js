;
let pullLoad = function({
  node = '', // 节点
  topFoo = false, // 回调函数
  botFoo = false,
  delay = 500, // debounce
  AMUIIs = false // 是否使用了Amaze UI
}) {
  let $node = $(node);
  let scroll = undefined;

  // Amaze UI
  if( AMUIIs ) {
    let IScroll = $.AMUI.iScroll;
    scroll = new IScroll(node,{
      click:true,
      mouseWheel: true,
    });
  } else {
    scroll = new IScroll(node,{
      click:true,
      mouseWheel: true,
    });
  }

  // let topOffset = $node.outerHeight();
  // console.log(topOffset)

  let topHolder = $('#wrapper [data-top-placeholder]')
  let botHolder = $('#wrapper [data-bot-placeholder]')
  let topLoading = $('#wrapper [data-top-loading]')
  let botLoading = $('#wrapper [data-bot-loading]')

  function hideMe(name) {
    name.css('display','none')
  }
  function showMe(name) {
    name.css('display','block')
  }

  // $.extend({
  //   hideNode: function(name) {
  //     console.log(name.length)
  //     if( $.isArray(name) )
  //       for(var i; i<name.length; i++) {
  //         console.log(i);
  //         name[i].css('display','none');
  //       }
  //   },
  // })
  // $.hideNode([topHolder,topLoading,botHolder,botLoading]);

  // hide initial node
  function hideAll() {
    hideMe(topHolder);
    hideMe(topLoading);
    hideMe(botHolder);
    hideMe(botLoading);
  }
  hideAll();

  let timer = undefined; // debounce
  let status = undefined; // store callback function status

  scroll.on('scrollStart', function() {
    console.log('开始pull');

    // 使用lite版，需手动对y值得变化做监听，难获取位置
    // console.log(this.y);

    // 只对方向做判断，不处理下拉距离
    if( this.directionY === -1 ) {
      showMe(topHolder)

      if( timer ) clearTimeout(timer)

      timer = setTimeout(function(){
        hideMe(topHolder)
        showMe(topLoading)
        if( topFoo ) {
          status = topFoo();
        } else {
          console.log('请设置下拉后的回调函数')
        }
      },delay);

    } else if (this.directionY === 1) {
      // console.log(this.y)
      showMe(botHolder)

      if( timer ) clearTimeout(timer)

      timer = setTimeout(function(){
        hideMe(botHolder)
        showMe(botLoading)
        if( botFoo ) {
          status = botFoo();
        } else {
          console.log('请设置上拉后的回调函数')
        }
      },delay)
    }

  });

  scroll.on('scrollEnd', function() {
    console.log('IScroll end');

    if( status ) {
      hideAll()
    }

    setTimeout(function () {
      scroll.refresh();
    }, 100);
  });
}
