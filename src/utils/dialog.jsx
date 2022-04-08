import Vue from 'vue'

// 自定义弹框组件
const DialogComponent = {
  props: ['options'],
  methods: {
    show() {
      console.log('show')
    }
  },
  render(h) {
    return <div>dialog {/* <el-dialog title='提示'></el-dialog> */}</div>
  }
}

let vm = null
// 创建vue子类
let vnode = Vue.extend({
  render: h => h(DialogComponent)
})
let componentInstance = new vnode().$mount() //子组件实例化

// console.log('componentInstance', componentInstance)
// console.log(vnode)
// 调用组件方法
componentInstance.$children[0].show()

// $dialog({
//   title:'',
// })

export function $dialog(options) {
  if (!vm) {
  }
}
