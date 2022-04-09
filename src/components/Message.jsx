import Vue from 'vue'

// message组件选项
const MessageComponent = {
  data() {
    return { messages: [] }
  },
  mounted() {
    // 给所有弹层增加唯一标示 方便弹层的卸载
    this.id = 0
  },
  methods: {
    add(option) {
      let id = this.id++ // id号
      let layer = { ...option, id }
      this.messages.push(layer) // 将层存储起来
      layer.timer = setTimeout(() => {
        this.remove(layer)
      }, option.duration)
    },
    remove(layer) {
      clearTimeout(layer.timer) // 清除定时器
      // 移除层
      this.messages = this.messages.filter(message => layer.id !== message.id)
      document.body.removeChild(
        document.querySelector(`.message-${layer.id}`).parentNode
      )
    }
  },
  render(h) {
    return (
      <div>
        {/* 显示在数组中的层 */}
        {this.messages.map(message => (
          <div class={['messages', `message-${message.id}`]} key={message.id}>
            {message.content}
          </div>
        ))}
      </div>
    )
  }
}

// 创建message组件实例
const createInstance = () => {
  const vm = new Vue({
    render: h => h(MessageComponent)
  }).$mount()
  const messageComponent = vm.$children[0]
  // 获取真实dom元素，将其挂在页面上
  document.body.appendChild(vm.$el)
  return messageComponent
  // return {
  //   add(options) {
  //     // 调用组件的add方法
  //     messageComponent.add(options)
  //   }
  // }
}

// 保证单例
let instance
let inst = () => {
  instance = instance || createInstance()
  return instance
}

const Message = {
  info(options) {
    // 调用增加弹层方法
    createInstance().add(options)
  },
  warn() {},
  danger() {},
  success() {}
}
// 暴露 不同类型的弹层方法
export { Message }

export default MessageComponent
