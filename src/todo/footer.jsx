import '../assets/styles/footer.styl'

export default{
  data () {
    return {
      author: 'Meils',
      blog: 'https://segmentfault.com/u/guchengshaonian_5a56fe95f2c32'
    }
  },
  render() {
    return (
      <div id="footer">
          <span>Power by {this.author}，欢迎访问作者主页：{this.blog}</span>
      </div>
    )
  }
}