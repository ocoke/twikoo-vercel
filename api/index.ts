import type { VercelRequest, VercelResponse } from '@vercel/node';
export default async function (req: VercelRequest, res: VercelResponse) {
    res.setHeader('JSEW-SERVER', 'Vercel');
    res.setHeader('access-control-allow-origin', '*');
    res.send({
      error: true,
      messgae: "Twikoo 评论已关闭，请清除缓存后强制刷新页面，切换至 Detalk.js 后重试",
      code: 1403,
    });
}
