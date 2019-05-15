## 請以自己的話解釋 API 是什麼
API 的全名是 Application Programming Interface，中文是應用程式介面，也可以說它是一個「接口」，讓開發者可以提供資料給別人，也可以從那邊接收資料，彼此相戶交換資料、溝通用。

我自己是覺得 API 很像一個各種仲介平台一樣(接口)。用人力仲介公司來比喻的話，就是我們需要工作會透過人力仲介查找目前有哪些職缺（哪些資料可串），而公司也會透過仲介發放招募訊息(提供資料給別人串)，雙方彼此無須挨家挨戶敲門找工作、找員工，浪費太多力氣，可以專注在別的事情上面，省了很多自造輪子的時間～

（好啦，真實人生還是要費很多力氣再找工面試上ＱＱ，但至少比較方便一點了啦）


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
老師你應該看到很膩～但我還是想自問自答一下ＸＤ

### what's HTTP code?
HTTP 狀態碼是網路交流對話時，為了加速交流效率，制定出數碼「回應」 HTTP request 「是否完成」，總共有五大組，如下：

1xx：需等待（hold on）
2xx：完成（ＯＫ）
3xx：轉址（here you go）
4xx：客戶端出問題 
5xx：伺服器端出問題

### 三個沒教的：
1. 505 - HTTP version not supported
伺服器端沒有支援 HTTP 協定發送來要求的版本

2. 423 - Locked
客戶端嘗試交流的資源被鎖住了

3. 451 - Unvailable for legal reasons
用戶端請求違法的資源


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL : https://lidemy-restaurant.com 

1. 獲取餐廳數量
mathod : GET
path : /restaurants
參數 : _limit=限制回傳資料數字
範例 : https://lidemy-restaurant.com/restaurants?_limit=20
說明 : 回傳 20 筆餐廳資料，若無 `?_limit=20` 將回傳全部的數目。

2. 獲取單一餐廳資料
mathod : GET
path : /restaurants/:id
參數 : none
範例 : https://lidemy-restaurant.com/restaurants?id=2
說明： 選出 id 為 2 的資料
```
{
    "data": [
        {
            "id": 2 
            "name": "currymamago",
            "adress": "Taipei City"
        },
        ...
    ],
}
```

3. 新增餐廳
mathod : POST
path : /restaurants
參數 : name：餐廳名稱
說明 : id 數會根據系統自增，物件內需要包含名稱和地址 
```
{
    "data": [
        {
            "id": 15 
            "name": "Burger King",
            "adress": "Leno"
        },
        ...
    ],
}
```

4. 更新餐廳資料 
mathod : PUT/PATCH
path : /restaurants/:id
參數 : name:餐廳名稱
範例 : 
```
{
    "data": [
        {
            "id": 15 
            "name": "Burger King",
            "adress": "HongKong"
        },
        ...
    ],
}
```

5. 刪除餐廳
mathod : DELETE
path : /restaurants/:id
參數 : 無
範例 : https://lidemy-restaurant.com/restaurants?id=10
