
/**
 * more pretty log for console.log
 * and only log on dev mode
 * always log if force is true
 */
function logSome (env = 'dev', level = 'none') {
  let levelNum = 3
  const theme = {
    normal: '#92e6e6',
    error: '#ff5335',
    info: '#2994b2',
    warn: '#ffb400'
  }
  const setLevel = level => {
    switch (level) {
      case 'error':
        levelNum = 1
        break
      case 'warn':
        levelNum = 2
        break
      default: // info & other
        levelNum = 3
        break
    }
  }
  const getStyle = color => `color:${color || '#8b80f9'};font-weight:bold;`
  const isLogEnable = (opts, force, env) => {
    if (opts.level) {
      return force
    } else {
      return force || env === 'development' || env === 'dev'
    }
  }
  const logger = (info, force, opts = {}) => {
    if (isLogEnable(opts, force, env)) {
      if (opts.level && info instanceof Array && info.length === 2) {
        console.log('%c%s%o', getStyle(opts.color), `${info[0]}: `, info[1])
      } else if (typeof info !== 'object' && typeof info !== 'function') {
        console.log('%c' + info, getStyle(opts.color))
      } else {
        console.log('%c%s%o', getStyle(opts.color), `${opts.level || 'log'}: `, info)
      }
    }
  }
  logger.info = (info, extra) => {
    if (extra) info = [info, extra]
    logger(info, levelNum >= 3, { color: theme.info, level: 'info' })
  }
  logger.warn = (info, extra) => {
    if (extra) info = [info, extra]
    logger(info, levelNum >= 2, { color: theme.warn, level: 'warn' })
  }
  logger.error = (info, extra) => {
    if (extra) info = [info, extra]
    logger(info, levelNum >= 1, { color: theme.error, level: 'error' })
  }
  logger.setLevel = setLevel

  setLevel(level)
  return logger
}

logSome.toString = logSome.valueOf = function () {
  console.log('ƒ logSome() { [native code] }')
}

exports.default = logSome
module.exports = exports['default']
