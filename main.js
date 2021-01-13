import './style.css'
import { a } from './a.js'
import { b } from './b.js'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <p>a: ${a()}</p>
  <p>b: ${b()}</p>
`
