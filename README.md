# @kensie/create-context-store

> Simple utility to create context-bound React hooks.

## Install

```bash
npm install --save @kensie/create-context-store
```

## Usage

```jsx
import * as React from 'react'
import { createContextStore } from '@kensie/create-context-store'

const [FooProvider, useFooStore, FooContext] = createContextStore((providerProps) => {
  const [foo, setFoo] = React.useState('foo' + providerProps.suffix)
  return { foo, setFoo }
})

const App = () => {
  return (
    <FooProvider suffix="ooo">
      <InnerApp />
    </FooProvider>
  )
}

const InnerApp = () => {
  const { foo, setFoo } = useFooStore()

  return (
    <div>
      <h1>{foo}</h1>
      <button onClick={() => setFoo(foo.toUpperCase())}>
        uppercase foo
      </button>
    </div>
  )
}
```

## License

MIT © [kensiebliss](https://github.com/kensiebliss)

---

This package was created using [create-react-hook](https://github.com/hermanya/create-react-hook).
