## 執行
```
user@DESKTOP-9VVBDPS MINGW64 /d/Xing/se109a/homework/01-Queue_Using_LinkedList (master)
$ node queue

The size of Queue: 3      
Data in Queue:
--------------------------
1
2
3
--------------------------

The value being deleted: 1

The size of Queue: 2
Data in Queue:
--------------------------
2
3
--------------------------
```

## 說明

### Enqueue
* 新增節點 Node
* 如果 Queue 為空，將 front 和 rear 指向 Node
* 如果 Queue 不為空，將 rear.next 指向節點，並將 rear 指向 Node

### Dequeue
* 如果 Queue 為空，回傳 null
* 將 temp 指向 front，如果 Queue 只有一個節點( front 和 rear 指向同一個節點)，就將 front 和 rear 設為 null
* 否則，將 front 指向 front.next
* 回傳被刪除的節點的值
