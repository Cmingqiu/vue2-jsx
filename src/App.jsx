import HelloWorld from '@/components/HelloWorld'
import JsxSlot from '@/components/JsxSlot'

export default {
  components: { HelloWorld, JsxSlot },
  data() {
    return {
      parentTitle: 'parent-title'
    }
  },
  mounted() {
    console.log(process.env.NODE_ENV)
  },
  render: h => {
    // console.log(this) //undefined

    const title = 'parentTitle'
    return (
      <div id='app'>
        <HelloWorld />
        <JsxSlot title={title}>
          <div>slot default</div>
          <template slot='body'>
            <div>slot body</div>
          </template>
        </JsxSlot>
      </div>
    )
  }
}
