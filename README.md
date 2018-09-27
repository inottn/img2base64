# 介绍

图片在线上传并转换为Base64编码。

1. 支持 PNG、GIF、JPG、BMP、ICO 格式。

2. 将图片转换为Base64编码，可用于减少图片的请求数量，以及本地开发时资源跨域问题。

3. CSS中使用：`background-image: url("data:image/png;base64,xxxxx=...")`。

4. HTML中使用：`<img src="data:image/png;base64,xxxxx=..." />`。

5. 被转换的图片不宜过大。