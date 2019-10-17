const cookie = require('../lib/browser.js')

describe('browser', () => {
  beforeEach(() => {
    cookie('name', '', -1)
  })

  it('should set and get cookies', async () => {
    cookie('name', 'hello')
    expect(cookie('name')).toBe('hello')
  })

  it('should delete cookies', async () => {
    cookie('name', 'hello')
    expect(cookie('name')).toBe('hello')
    cookie('name', '', -1)
    expect(cookie('name')).toBeNull()
  })
})