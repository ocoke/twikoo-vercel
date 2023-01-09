// module.exports = require('twikoo-vercel')
module.exports.default = async (req, res) => {
    res.setHeader('access-control-allow-origin', '*');
    res.send({
        message: 'Twikoo 评论已关闭，请清除缓存后强制刷新页面，切换至 Detalk.js',
        error: true,
    })
}
