class ListNode {
  constructor(key, value) {
      this.key = key
      this.value = value
      this.next = null
      this.pre = null
  }
}

class LRUCache {
   constructor(capacity) {
      this.capacity = capacity    
      this.hash = {}
      this.count = 0
      this.head = new ListNode()
      this.tail = new ListNode()
      this.head.next = this.tail
      this.tail.pre = this.head
   }

   get(key) {
       const node = this.hash[key]
       if (node == null) {
           return -1
       }
       this.moveToHead(node)
       return node.value
   }

   put(key, value) {
       const node = this.hash[key]
       if (node == null) {
           if (this.count >= this.capacity) {
               this.removeLRUItem()
           }
           const newNode = new ListNode(key, value)
           this.hash[key] = newNode
           this.addToHead(newNode)
           this.count++
       } else {
           node.value = value
           this.moveToHead(node)
       }
   }

   moveToHead(node) {
       this.removeFromList(node)
       this.addToHead(node)
   }

   removeFromList(node) {
    console.log('....node', node)
       let tmp1 = node.pre
       let tmp2 = node.next
       tmp1.next = tmp2
       tmp2.pre = tmp1
   }

   addToHead(node) {
       node.pre = this.head
       node.next = this.head.next
       this.head.next.pre = node
       this.head.next = node
   }

   removeLRUItem() {
       const tail = this.popTail()
       delete this.hash[tail.key]
       this.count--
   }

   popTail() {
       let tail = this.tail.pre
       this.removeFromList(tail)
       return tail
   }
}

const cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 1);
cache.put(3, 1);
cache.put(4, 1);
cache.get(1);