# 组件的种类

- 普通的函数（函数式组件）
  - 纯函数
  - 没有自身的状态，数据均由外部传入
  - 产出 VNode 的方式：单纯的函数调用

```javascript
function MyComponent(props) {}
```

- 类（有状态组件）
  - 可实例化
  - 可以有自身的状态
  - 产出 VNode 的方式：需要实例化，然后调用其 `render` 函数

```javascript
class MyComponent {}
```
