## 跟你朋友介紹 Git

what's git？
一種方便進行版本控制的工具，讓你可以管理檔案/資料夾等，在裡面新增、修改、刪除、儲存檔案，甚至是讓檔案回到不同版本的狀態。

why we need git?
因為團隊合作時，大家可以在不會更動到原版的情況下，平行時空新增或修改檔案，之後各個版本的檔案可以透過 git 方便處理檔案和版本控制的特性，決定哪留用哪個版本的檔案。

git 的指令有哪些？
- git init： 初始化，告訴電腦我們要在這個資料夾下座版本控制。
- git status： 看版本控制的狀態
- git add 檔名：將某資料加入版本控制 （暫存區概念）
- git add . : 懶惰的話，可以用 git add . 將全部資料放入版本控制
- git commit : 建立新的版本 （放入儲存庫了）
- git log : 觀看歷史紀錄
- git checkout BranchName : 跳到某版本或是某分支去
- git push origin BranchName： 將分支「推送」到遠端，如 github 上
- git pull origin master ：待遠端的資料合併後（merge），將遠端最新狀態「拉回」到自己的電腦裡（本機端上）

