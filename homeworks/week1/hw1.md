## 交作業流程

<在本機端>
0. 在 master 下，開一新 branch： git branch week1-new
1. 切換到 branch week1-new : git checkout week1-new
2. 在 branch week1-new 下寫東西 

<以下都在 branch week1-new 下>
3. 如果要新增檔案： touch code.js
4. 暫存檔案：git add code.js 
5. 新建檔案：git commit -m "commit 名稱" 例如：git commit -m "weekone homeworks"
6. 把作業 push 到遠端 github：git push origin week1-new

<跳去 github>
7. 在 github 上， 發 PR and tag 老師
8. 在 github 上， 等老師 approve and merge

<在本地端，自己的電腦裡>
9. 切換回 master：git checkout master
10. 在 master 下， pull 回來本機端： git pull origin master （＝ 與遠端同步）
11. 將已同步好的舊 branch 刪除： git branch -d week1-new  
