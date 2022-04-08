export default {
  props: ['title'],
  mounted() {
    // console.log(this.$slots)
  },
  render() {
    return (
      <section>
        <div class='header'>
          <h2>{this.title}</h2>
          {this.$slots.default}
        </div>
        <div class='body'>{this.$slots.body}</div>
      </section>
    )
  }
}
