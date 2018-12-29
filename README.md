# EventDispatcher
Regular old EventDispatcher pattern with set of types fixed in the constructor.

[![Build Status](https://travis-ci.org/jbeuckm/EventDispatcher.svg?branch=master)](https://travis-ci.org/jbeuckm/EventDispatcher)

### Installation

`yarn add @jbeuckm/EventDispatcher`

### Usage


```
import EventDispatcher from '@jbeuckm/EventDispatcher'

class MyDispatcher extends EventDispatcher {
	constructor() {
		super([MY_EVENT_TYPE, MY_OTHER_EVENT_TYPE])
	}
	
	handleSomeAction = action => {
		this.dispatchEvent(MY_EVENT_TYPE, action.data)
	}
}
```

Consume events...

```
import MyDispatcher from './MyDispatcher'

const thing = new MyDispatcher()

const handler = ({type, data}) => {
	console.log('Received an event...', data)
}

thing.addEventListener(MY_EVENT_TYPE, handler)

```

Clean up...

```
thing.removeEventListener(MY_EVENT_TYPE, handler)
```

