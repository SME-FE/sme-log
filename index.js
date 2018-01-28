
/**
 * more pretty log for console.log
 * and only log on dev mode
 * always log if force is true
 */
function logSome (env, style) {
  env = env || 'dev'
  var logCount = 0
  return function (info, force) {
    var type = {}.toString.call(info).slice(8, -1)
    var logStyle = style || 'color: #8b80f9;font-weight:bold;'

    if (force || env === 'development' || env === 'dev') {
      logCount++
      if (type !== 'Object') {
        console.log('%c' + info, logStyle)
      } else {
        console.log('%c====== log ' + logCount + ' ======', logStyle)
        console.log(info)
      }
      return new Date() + ' => log:' + logCount
    }
  }
}

logSome.toString = logSome.valueOf = function () {
  console.log('ƒ logSome() { [native code] }')
}

exports.default = logSome
module.exports = exports['default']
