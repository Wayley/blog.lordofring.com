# JavaScript

## js 常见小代码

### 离开页签显示不同的 title

```js
// 页面的 visibilityState属性可能返回三种状态 prerender, visible 和 hidden
// 页面的 hidden属性可能为false, true
document.addEventListener('visibilitychange', function () {
  console.log(document.visibilityState, document.hidden);
  // 页面变为不可见时触发
  if (document.visibilityState == 'hidden') {
    document.title = '离开';
  }
  // 页面变为可见时触发
  if (document.visibilityState == 'visible') {
    document.title = '回来';
  }
});
```

## js 兼容性代码处理

### 浏览器事件监听

### 浏览器属性前缀
