const merge = require('webpack-merge').default

const common = require('./common')


module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map'
})
