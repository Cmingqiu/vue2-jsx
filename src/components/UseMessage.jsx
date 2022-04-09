import { Message } from './Message'

export default {
  render: h => {
    let count = 0
    const openMessage = () => {
      Message.info({
        duration: 1000,
        content: 'count: ' + ++count
      })
    }
    return (
      <div>
        <button onclick={openMessage}>打开message</button>
      </div>
    )
  }
}
