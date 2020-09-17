# 課程:軟體工程與演算法 -- 習題專案

欄位 | 內容
-----|--------
學期 | 109 學年度上學期
學生 |  黃朝新
學號末兩碼 | 05
教師 | [陳鍾誠](https://www.nqu.edu.tw/educsie/index.php?act=blog&code=list&ids=4)
學校科系 | [金門大學資訊工程系](https://www.nqu.edu.tw/educsie/index.php)
課程內容 | https://gitlab.com/ccc109/se

```uml
@startuml
left to right direction

使用者 --> (登入驗證)

登入驗證--> (註冊)

登入驗證--> (登入)

登入驗證--> (登出)


使用者 --> (聊天功能)

聊天功能--> (檢視好友列表)

聊天功能--> (進入聊天室)

聊天功能--> (傳送訊息)

聊天功能--> (接收訊息)

聊天功能--> (顯示訊息列表)
note right of (顯示訊息列表)
 訊息按照新增時間由上到下列出
end note


使用者 --> (貼文功能)

貼文功能 --> (新增貼文)

貼文功能 --> (修改貼文)

貼文功能 --> (刪除貼文)

貼文功能 --> (檢視貼文)


使用者 --> (書籤功能)


使用者 --> (社團功能)


使用者 --> (個人資料管理)
@enduml
```
