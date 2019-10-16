module.exports = function (req) {
  const cookies = []
  return {
    cookie: function (k, v, t) {
      if (typeof v === 'undefined') {
        var v = req.headers.cookie.match('(^|;) ?' + k + '=([^;]*)(;|$)')
        return v ? decodeURIComponent(v[2]) : null
      } else {
        var d = new Date
        d.setTime(d.getTime() + 864e5 * (t || 30))
        cookies.push(k + '=' + encodeURIComponent(v) + ';path=/;expires=' + d.toUTCString())
      }
    },
    get cookies () {
      return cookies
    }
  }
}
