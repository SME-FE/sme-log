
/**
 * more pretty log for console.log
 * and only log on dev mode
 * always log if force is true
 */
function logSome (env, level = 'none') {
  env = env || 'dev'
  let levelNum = 0
  const theme = {
    normal: '#92e6e6',
    error: '#ff5335',
    info: '#2994b2',
    warn: '#ffb400'
  }
  switch (level) {
    case 'error':
      levelNum = 3
      break
    case 'warn':
      levelNum = 2
      break
    case 'info':
      levelNum = 1
      break
    default:
      levelNum = 0
      break
  }
  const getStyle = color => `color:${color || '#8b80f9'};font-weight:bold;`
  const type = t => Object.prototype.toString.call(t).slice(8, -1)
  const logger = (info, force, opts = {}) => {
    const t = type(info)
    if (force || env === 'development' || env === 'dev') {
      if (t !== 'Object' && t !== 'Function') {
        console.log('%c' + info, getStyle(opts.color))
      } else {
        console.log('%c%s%o', getStyle(opts.color), `${opts.level || 'log'} `, info)
      }
    }
  }
  logger.info = (info, force) => {
    logger(info, force || levelNum > 0, { color: theme.info, level: 'info' })
  }
  logger.warn = (info, force) => {
    logger(info, force || levelNum > 1, { color: theme.warn, level: 'warn' })
  }
  logger.error = (info, force) => {
    logger(info, force || levelNum > 2, { color: theme.error, level: 'error' })
  }
  return logger
}

logSome.toString = logSome.valueOf = function () {
  console.log('ƒ logSome() { [native code] }')
}

exports.default = logSome
module.exports = exports['default']
