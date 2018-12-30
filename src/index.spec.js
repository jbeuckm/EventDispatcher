import EventDispatcher from './index'

const TEST_EVENT_TYPE = 'TEST_EVENT_TYPE'

describe('EventDispatcher', () => {
  it('will not add listener for unknown event type', done => {
    const ED = new EventDispatcher([TEST_EVENT_TYPE])

    try {
      ED.addEventListener('💣', () => {})
    } catch (e) {
      done()
    }
  })

  it('can dispatch known event types', () => {
    const ED = new EventDispatcher([TEST_EVENT_TYPE])

    const myListener = jest.fn()

    ED.addEventListener(TEST_EVENT_TYPE, myListener)

    ED.dispatchEvent(TEST_EVENT_TYPE, 123)

    expect(myListener).toHaveBeenCalled()
  })

  it('event listener receives type and data for an event', done => {
    const ED = new EventDispatcher([TEST_EVENT_TYPE])

    ED.addEventListener(TEST_EVENT_TYPE, ({ type, data }) => {
      expect(type).toEqual(TEST_EVENT_TYPE)
      expect(data).toEqual(123)
      done()
    })

    ED.dispatchEvent(TEST_EVENT_TYPE, { data: 123 })
  })

  it('can not remove an unknown listener', done => {
    const ED = new EventDispatcher([TEST_EVENT_TYPE])

    try {
      ED.removeEventListener(TEST_EVENT_TYPE, console.log)
    } catch (e) {
      done()
    }
  })

  it('can remove a previously added listener', () => {
    const ED = new EventDispatcher([TEST_EVENT_TYPE])

    const myListener = jest.fn()

    ED.addEventListener(TEST_EVENT_TYPE, myListener)
    ED.removeEventListener(TEST_EVENT_TYPE, myListener)

    ED.dispatchEvent(TEST_EVENT_TYPE)

    expect(myListener).not.toHaveBeenCalled()
  })
})
