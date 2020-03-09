// MyComponent 组件
class MyComponent {
  render() {
    // render 函数产出 VNode
    return {
      tag: 'div',
    }
  }
}

// 组件 VNode
// 组件 VNode 的 tag 属性指向组件自身
// render 渲染的时候，需要根据 tag 来判断当前 VNode 是 html 标签还是组件
const componentVNode = {
  tag: MyComponent,
}

// 将 componentVNode 挂载到 id 为 app 的元素下面
render(componentVNode, document.getElementById('app'))

/**
 * 渲染器，永远渲染真实 DOM
 * @param {*} vnode 将要渲染的 vnode
 * @param {*} container 元素挂载点
 */
function render(vnode, container) {
  if (typeof vnode.tag === 'string') {
    // html 标签
    mountElement(vnode, container);
  } else {
    // 组件
    mountComponent(vnode, container);
  }
}

function mountComponent(vnode, container) {
  // 创建组件实例
  const instance = new vnode.tag();
  // 渲染
  instance.$vnode = instance.render();
  // 挂载
  mountElement(instance.$vnode, container);
}

function mountElement(vnode, container) {
  // 创建元素
  const el = document.createElement(vnode.tag);
  // 将元素添加到容器
  container.appendChild(el);
}