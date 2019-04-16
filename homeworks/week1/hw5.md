## 請解釋後端與前端的差異。

前端：就是 client 端，在電腦上我們所看到視覺化的一切。如網頁，但要注意一點，因為大家都可以更動，所以任何來自前端的東西都是不安全的。

後端：server + database。就像是一個大型倉庫一樣，裡面有許多數據資料集合而成。

## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

當你按下去的時候，資訊從瀏覽器（前端）送 request 到網頁伺服器（server）去，當 server 收到 request 後跑去問資料庫，並在裡面搜尋 JavaScript 關鍵字，然後他會把查詢到的資訊回傳給 server，而 server 送回到前端那邊，這即是「回應」（response）。最後瀏覽器會解析回傳的資訊並顯示出來。

## 請列舉出 5 個 command line 指令並且說明功用

3rd 的作業的題目是這樣：
請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用。


1. find . -empty : 尋找空檔案
2. history : 檢視 terminal 的紀錄
3. head <file> : 輸出 <file> 的前十排程式。

來源：https://www.git-tower.com/blog/command-line-cheat-sheet/