import replace from '@rollup/plugin-replace'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    replace({
      '__REPLACE__': 'replaced',
      include: './a.js'
    })
  ]
}
