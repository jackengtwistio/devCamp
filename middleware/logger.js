const logger = (req,res,next) => { 
    console.log(`
    req.method: ${req.method} | req.protocol: ${req.protocol} |  req.get('host'): ${req.get('host')} | req.originalUrl: ${req.originalUrl}
    `)
    next()
}
module.exports = logger