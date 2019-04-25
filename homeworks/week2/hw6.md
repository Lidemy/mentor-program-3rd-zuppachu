``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程

1. isValid([3, 5, 8, 13, 22, 35]) 帶入 funciton isValid(arr)

2. 跑 for loop 

3. 
i=0, 0<6, true 跑第三行 arr[0]=3 不小等於 0, 繼續跑循環 i++
i=1, 1<6, true 跑第三行 arr[1]=5 不小等於 0, 繼續跑循環 i++
i=2, i<6, true 跑第三行 arr[2]=8 不小等於 0, 續續跑循環 i++
i=3, i<6, true 跑第三行 arr[3]=13 不小等於 0, 繼續跑循環 i++
i=4, i<6, true 跑第三行 arr[4]=22 不小等於 0, 繼續跑循環 i++
i=5, i<6, true 跑第三行 arr[5]=35 不小等於 0, 繼續跑循懷 i++
i=6, i 不小於 6 跳出第五行

4. 跑第二個 for loop
i=2, i<6, true 跑第六行 arr[2] !== arr[1]+arr[0](8!==5+3,false), 繼續跑循環 i++
i=3, i<6, true 跑第六行 arr[3] !== arr[2]+arr[1](13!==8+5,false), 繼續跑循環 i++
i=4, i<6, true 跑第六行 arr[4] !== arr[3]+arr[2](22!==13+8,true) => return invalid

5. 得到 return 答案直接跳出結束這回合。（蓋牌）
