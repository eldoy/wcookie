function asdf () {
  console.log(this.baner)
}

asdf.prototype.baner = 'baner'

const hello = new asdf()
console.log({ h: hello.baner })
