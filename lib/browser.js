module.exports = function cookie (k, v, t) {
  if (typeof v === 'undefined') {
    var v = document.cookie.match('(^|;) ?' + k + '=([^;]*)(;|$)')
    return v ? decodeURIComponent(v[2]) : null
  } else {
    var d = new Date
    d.setTime(d.getTime() + 864e5 * t)
    document.cookie = k + '=' + encodeURIComponent(v) + ';path=/;expires=' + d.toUTCString()
  }
}
