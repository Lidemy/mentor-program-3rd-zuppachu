## 什麼是 DOM？
英文全名是 Document Object Model = 文件物件模組，由瀏覽器提供。

我們需要 DOM 的原因是因為 HTML 內有許多節點，每一個 element 就是一個節點，如：`<body>`、 `<ul>`、`<li>`...etc。

DOM 可以說是瀏覽器自行提供的一座橋樑，讓其他程式語言可以透過操控它（和裡面的節點），進而更改、刪除、新增 HTML 的結構、樣式、內容！

目前來說較受歡迎操控 DOM 的程式語言是以 JavaScript 為主。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
事件傳遞機制，也等於瀏覽器傳遞的機制。

- 事件傳遞機制的順序如下：
1. 捕獲 Capturing_Phase
2. 元素本身 At_Stage
3. 冒泡 Bubbling_Phase

有個好記的口訣：「先捕獲，在冒泡。」，但其實有個該注意的小重點：
如果是在 step 2 元素本身階段的話，捕獲或是冒泡沒有優先順序，只是單純看哪個程式碼先寫出來而已。

- what's capturing pahse?
一種由上往下的概念～

假設我們今天想要對 div 裡面的 a 動手腳，當我們用 `document.querySelector('a')`選出來後。捕獲階段就是一層一層深入，一路往下探的概念，比如： Window > Document > HTML > head > body > div > a。

而當到達 a 時，即等於 At_Stage 階段。

- what's bubbling pahse?
（突然好想喝珍奶 XD）

有由上往下的概念，當然也有由下往上的概念囉，冒泡機制就是屬於後者！而路徑就是由 a 一路向上回傳到 Window 去。

- 如果想要更改事件傳遞的機制，該怎辦？
可加上監測事件，並且添上第三個值：true or false 表示。
```js
document.querySelector('a').addEventListener('click', function(e) {
	// ... 程式碼
}, true)
```
其中 true 代表放在捕獲階段; false 代表放在冒泡階段。


## 什麼是 event delegation，為什麼我們需要它？
event delegation 是一個代理機制。

我們需要他的原因很簡單，就是為了減少時間成本，和增加網頁效能，不需要一個一個手動增加。

那如何運用代理機制呢？

可以利用事件傳遞機制的「冒泡原理」進行！當我在元素最外層處設立監測事件後，代理機制會因為「冒泡原理」，進而由下往上回傳最外層，剛好幫忙設立了欲增設的節點，而不需要透過 DOM 多次抓取節點，拖累網頁效能。


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
- event.preventDefault():
是指停止瀏覽器的預設狀態。比如以 `<a>` 來說，就是阻止跳出連結～ 但是並不代表他的事件不會繼續傳遞，相反的，其事件依然會繼續傳下去。

- event.stopPropagation():
放在哪邊（捕獲或冒泡），他就會在那邊斷掉，阻止之後的事件繼續傳遞下去。

有個小地方需注意：如果是想要停止之後同一層級的 listener 不要被執行到，應該採用 event.stopImmediatePropagation。

