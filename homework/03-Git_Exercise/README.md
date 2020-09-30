# git 心得報告書
* 參考 -- [【狀況題】怎麼跟上當初 fork 專案的進度？](https://gitbook.tw/chapters/github/syncing-a-fork.html?fbclid=IwAR36ImNBCVSTobPfA-xq_8jrJPUOIfUKXz7ibo9t3hjC6dscXY1jH1NwTp0)

* 練習
    * 組織專案 -- https://github.com/hcxing-se109a/mylodash
    * 個人專案 -- https://github.com/asd153866714/mylodash

# 建立組織
* 新增 hcxing-se109a 
* 組織管理員預設是建立的人 ( asd153866714 )

### 在組織內新增 repository
* 新增 **hcxing-se109a / mylodash**

### 其他人 Fork
* 個人帳號 fork，產生 **asd153866714 / mylodash**
* clone 到本地端

### 組織的管理員修改專案
* 新增 tail.ts 並要求完成函數 tail()
```typescript=
export function tail(list: any[]): any[]{
    // to do
}
```
* push 回遠端


# 個人帳號跟上 fork 專案的進度

## 1. 設定原專案遠端節點
``` 
git remote add upstream 上游專案網址
```
## 2. 抓取原專案的內容
```
git fetch upstream
```

## 3. 和本地專案的 master 分支合併
```
git merge upstream/master
```
    
## 修改內容
* 完成 tail.ts 裡面的函數 tail() 
```typescript=
export function tail(list: any[]): any[]{
    let length = list.length
    if (!length) return []

    let index = 0
    let result = new Array()

    while (index+1 < length) {
        result[index] = list[index + 1]
        index++
    }
    return result
}
```
* push 回自己的專案


# Pull Request
* 下游新增，上游接受

## 新增 Pull Request

* **asd153866714 / mylodash**

    * New pull request
    * Compare changes
    * Create pull request

## 接受 pull request

* **hcxing-se109a / mylodash**

    * Review pull request
    * Merge pull request
    * 原專案的內容修改完成