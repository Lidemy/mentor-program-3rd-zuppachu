## 什麼是 Ajax？
ajax 全名為 Asynchronous JavaScript and XML。其中最重要的重點是 Asynchronous。這個單詞代表非同步（異步）。

為什麼說非同步這詞很重要呢？

因為非同步的好處就是讓送出去的 http request 不需要等到收到 response 才能執行其他程式，而是在等待的空檔時，也能夠執行其他程式，無需等到天荒地老。

那是為啥可以這麼方便？

ajax 利用 callback function 原理讓資料傳遞的過程梗省時。 我們可以想像 Callback function 像是個叫號機，等好了時會晃動通知你去領取餐點。

喔對了， ajax 是一個瀏覽器提供的 API，透過此法網頁不會換頁，即等於不需要等到網頁重新全部下載～

## 用 Ajax 與我們用表單送出資料的差別在哪？
最主要的原因是因為他不會換頁吧。

## JSONP 是什麼？
全名是 JSON with padding。

JSONP 利用 `<script>` 跨領域的特性，拿取不同源的資料。但它只能用 GET 的方式拿取，不能用 POST，因為要帶的參數必須附加在網址後面。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四週時，是直接在 node.js 上進行，這週是需透過瀏覽器，當環境不同時，限制有所不同。

其實瀏覽器照樣會傳送 http request 和回傳 response，但因為瀏覽器對於安全性考量較多，所以有個同源政策（必須要來自相同的來源，不同的就掰惹），因此政策擋下了回傳的 response 不給看，故有了跨網域問題待解決。

## 要如何存取跨網域的 API？
可解決跨網域問題的方法有二，如下：

法一：JSONP。

法二：CORS。
Cross-oringin HTTP request (跨來源資源共享)。
當請求來自不相同來源時，可以建立一個跨來源 HTTP 請求。做法很簡單，只要在 response 的 header 內加上一串字 ` Access-Control-Allow-Origin`。

當瀏覽器收到 response 時，會先檢查是回傳內是否有包含此串文字，有的話就可讓程式順利接收 response。
