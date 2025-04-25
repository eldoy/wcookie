const cookies = require('../index.js')
function init(cookie) {
  return { headers: { cookie } }
}

describe('server', () => {
  it('should set up request object', async () => {
    const req = init('')
    cookies(req)
    expect(typeof req.cookie).toBe('function')
  })

  it('should set and get cookies', async () => {
    const req = init('')
    cookies(req)
    req.cookie('name', 'hello')
    expect(req.cookie('name')).toBe('hello')
  })

  it('should update cookies', async () => {
    const req = init('')
    cookies(req)
    req.cookie('name', 'hello')
    expect(req.cookie('name')).toBe('hello')
    req.cookie('name', 'bye')
    expect(req.cookie('name')).toBe('bye')
  })

  it('should set multiple cookies', async () => {
    const req = init('')
    cookies(req)
    req.cookie('name', 'hello')
    req.cookie('title', 'bye')
    expect(req.cookie('name')).toBe('hello')
    expect(req.cookie('title')).toBe('bye')
  })

  it('should delete cookies', async () => {
    const req = init('')
    cookies(req)
    req.cookie('name', 'hello')
    expect(req.cookie('name')).toBe('hello')
    req.cookie('name', null)
    expect(req.cookie('name')).toBe(null)
  })

  it('should work with initial cookie string', async () => {
    const req = init('name=hello; title=project')
    cookies(req)
    expect(req.cookie('name')).toBe('hello')
    expect(req.cookie('title')).toBe('project')
  })

  it('should convert cookies to string', async () => {
    const req = init('')
    cookies(req)
    req.cookie('name', 'hello')
    req.cookie('title', 'project')
    const headers = req.cookieJar.headers
    expect(headers[0]).toMatch('name=hello;')
    expect(headers[1]).toMatch('title=project;')
  })

  it('should not convert initial cookies to string', async () => {
    const req = init('status=strong; run=long')
    cookies(req)
    req.cookie('name', 'hello')
    req.cookie('title', 'project')
    expect(req.cookie('status')).toBe('strong')
    const headers = req.cookieJar.headers
    expect(headers.constructor).toBe(Array)
    expect(headers.length).toBe(2)
    expect(headers[0]).toMatch('name=hello;')
    expect(headers[1]).toMatch('title=project;')
  })

  it('should contain the cookie jar length', async () => {
    const req = init('status=strong; run=long')
    cookies(req)
    expect(req.cookieJar.length).toBe(2)
    req.cookie('name', 'hello')
    req.cookie('title', 'project')
    expect(req.cookieJar.length).toBe(4)
  })

  it('should return null if not found', async () => {
    const req = init('')
    cookies(req)
    expect(req.cookie('hello')).toBeNull()
  })

  it('should support HttpOnly option', async () => {
    const req = init('')
    cookies(req)
    req.cookie('name', 'hello', { httpOnly: true })

    var jar = req.cookieJar
    expect(req.cookieJar.values.name.httpOnly).toBe(true)

    const headers = req.cookieJar.headers
    expect(headers[0]).toMatch('HttpOnly')
  })

  it('should support SameSite option', async () => {
    const req = init('')
    cookies(req)
    req.cookie('name', 'hello', { sameSite: 'Lax' })

    var jar = req.cookieJar
    expect(req.cookieJar.values.name.sameSite).toBe('Lax')

    const headers = req.cookieJar.headers
    expect(headers[0]).toMatch('SameSite=Lax')
  })

  it('should support Secure option', async () => {
    const req = init('')
    cookies(req)
    req.cookie('name', 'hello', { secure: true })

    var jar = req.cookieJar
    expect(req.cookieJar.values.name.secure).toBe(true)

    const headers = req.cookieJar.headers
    expect(headers[0]).toMatch('Secure')
  })
})
