## 前端本地存储

服务器如何知道两个请求来自同一个浏览器？
带一个参数说明， 每次请求回传。 安全性， 隐藏。
cookie 解决此问题

cookie 是纯文本， 没有可执行代码。 
用户访问网站， 可以通过cookie来访问电脑上存储数据。
为了辨别用户身份， 进行session跟踪而储存用户本地终端上的数据。 

如何工作？
网页发http请求时， 浏览器会检查是否有相应的cookie, 有则加在request header中的cookie字段
浏览器自动做的
是否要发给服务器。  每次请求都要携带的信息，特别适合放在cookie中，其他类型的数据不适合。

位置不同，不能通用。
域名 独立
当前域及所有子域
最多20个
每个cookie 最多4K
可以设置可期时间， 自动销毁

选项 expires domain  path secure  

服务器设置
response header  set-cookie 专门用来设置cookie



