# pullLoad

基于IScroll下拉上拉加载

本项目只提供基本的下拉和上拉，额外要求请参考IScroll的例子修改。

## 使用

### 依赖：

- jQuery
- IScroll （lite版本，精简版本） 如果使用了 **Amaze UI** 就不用额外加载IScroll了
- 当然还有我们的文件： dist/pullload.js

### 需要的HTML结构：
```html
<div id="wrapper">
    <div>
        <div data-top-placeholder><h1>刷新中。。。</h1></div>
        <div data-top-loading><h1>加载中。。。</h1></div>
        <!-- your content HERE -->
        <div data-bot-placeholder><h1>上拉加载</h1></div>
        <div data-bot-loading><h1>数据获取中</h1></div>
    </div>
</div>
```
提示信息使用固定的data来指示，以便自行修改样式。

### 调用：
```js
pullLoad({
  node: 'xx',   // 需要滚动的节点
  topFoo: xx, // 下拉后的回调函数
  botFoo: xx, // 上拉后的回调函数
  delay: 500, // 设置下拉函数调用的延迟，防止高频率的请求，默认为500
  AMUIIs: true, // 如果加载了 Amaze UI, 请设置为true。
})
```
注意：

- 回调函数需要返回 true 或者 false ， 用来隐藏loading的提示信息， 不然会处于一直加载的状态。
- 如果需要使用AJAX等加载数据，需要自行写数据获取和解析部分，即整个回调函数部分。

### 演示

请下载查看**example**文件
