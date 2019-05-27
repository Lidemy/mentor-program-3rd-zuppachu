## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. `<cite>`: 引用一段文字、書或是作品等。被圈選處會以斜體呈現。
```
First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html"><i>Nineteen Eighty-Four</i></a></cite> by George Orwell 
```
2. `<figure>`: 表示一段獨立的內容（圖片、詩詞），常與`<figurecaption>`（說明）一起使用。
```
<figure>
  <img
  src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"
  alt="A robotic monster over the letters MDN.">	
  <figcaption>MDN Logo</figcaption>
</figure>
```
3. `<del>`: 刪除線
```
<del ><p >This paragraph has been deleted.</p ></del >
```
## 請問什麼是盒模型（box model）
box model 是用來形容 HTML 裡面的每一個元素就像是個小盒子一樣。

打開此盒子你會發現裡面包含：
1. 內容物 content : 寬和高
2. 內距 padding
3. 邊線 border
4. 外距 marging，背景顏色為透明。

這四要素的安排會影響我們對於排版的編輯，為什麼會這麼說呢？

要了解的話，首先，我們得先來了解怎麼算裡面的長度，如下。

寬 ＝ 左右兩邊外距＋左右兩邊內距＋左右兩邊邊線＋內容物的寬。
高 ＝ 上下兩邊外距＋上下兩邊內距＋上下兩邊邊線＋內容物的高。

因此，盒子大小會隨著內、外距和邊線的改變變大或變小。這樣看下來，你可能以為要自己算出適合版面的大小數字，但其實不需要，只要利用`box-sizing`特性，選擇是要跟著內容物（content-box：依據內容物長寬為主，其他的 padding/border/margin 再加上去）或是邊線(border-box)調整即可！

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
顯示元素展現的特性。

1. block: 在頁面裡會佔據一整行，比如：`<div>``<h1>``<p>`，可以自由調整上下左右。

2. inline: 跟著內容物大小顯示長度，所以無法調整上下左右，代表：`<span>``<a>`，可使元素併排。

3. inline-block: 上面兩個的合體，可以自由調整上下左右，又不會佔滿一整行，對外像 inline 可併排; 對內像是 block 可自由調整。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？


1. static: 預設值。
不會被特別定位在頁面的某位置上，反而是照著瀏覽器的預設，自動排列在頁面上。代表無法調整偏移 ＝ 不受上下左右的影響。

2. fixed: 固定位置
固定在頁面上的某一角落，不會隨著頁面滾動還消失看不見。舉例來說，很像目前在各大網頁上在右下角處有個常見的 messenger 聯繫圖片。

3. relative: 相對位置。
可以利用上下左右調整偏移「原本應該出現的位置」，但不論如何更動，都不會影響其他元素的所在位置，只會更動到自己而已～

4. absolute: 絕對位置。
會往上尋找不是屬於 `position: stastic` 的元素當作基準點，如果沒有非`position: stastic`會直接以`<body>`元素當作基準點。

通常我們會將要當基準點的元素設為`position: relative`

btw 除了 stastic 之外，其他都為可定位元素。然後可利用 top 、bottom 、right、 left 調整位移。
