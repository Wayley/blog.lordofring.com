# CSS

> CSS 是一门艺术

## 兼容性

> 为了适应多种浏览器以及不同版本，需要我们做一些兼任新处理

## CSS3 特效

> 可以使用 CSS 做一些炫酷的特效

## 骨架屏

> 骨架屏提高用户体验的一种方式

```html
<div class="app">
  <div class="activity-skeleton">
    <div class="skeleton-row" style="width:30%"></div>
    <div class="skeleton-row" style="width:50%"></div>
    <div class="skeleton-row" style="width:70%"></div>
    <div class="skeleton-row" style="width:80%"></div>
  </div>
</div>
```

```css
.app {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
.activity-skeleton {
  padding: 20px;
  background-color: #fff;
  border-radius: 0 0 0.2rem 0.2rem;
  overflow: hidden;
}
.skeleton-row {
  height: 14px;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #fff, #edeff1, #fff);
  background-size: 480px 480px;
  animation: skeleton-stripes 0.6s linear infinite;
}
/* @keyframes @-webkit-keyframes @-moz-keyframes @-o-keyframes */
@keyframes skeleton-stripes {
  0% {
    background-position: 0 0;
  }
  to {
    background-position: 480px 0;
  }
}
```
