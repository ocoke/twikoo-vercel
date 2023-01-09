// module.exports = require('twikoo-vercel')
module.exports.default = async (req, res) => {
    res.send(req.method)
}
