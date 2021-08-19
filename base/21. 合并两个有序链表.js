/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
  if(l1==null)return l2;
  if(l2==null)return l1;
  if(l1.val<l2.val){
      l1.next=mergeTwoLists(l1.next,l2);
      return l1;
  }else{
      l2.next=mergeTwoLists(l1,l2.next);
      return l2;
  }
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// 链表
class LinkedList {

  constructor() {
    this.head = null
    this.length = 0
  }

  // 追加元素
  append(val) {
    const node = new Node(val)
    let current = null
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  // 任意位置插入元素
  insert(position, val) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(val)
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        this.head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length++
      return true
    }
    return false
  }

  // 移除指定位置元素
  removeAt(position) {

    // 检查越界值
    if (position > -1 && position < length) {
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
      return current.val
    }
    return null
  }

  // 寻找元素下标
  findIndex(val) {
    let current = this.head
    let index = -1
    while (current) {
      if (val === current.val) {
        return index + 1
      }
      index++
      current = current.next
    }
    return -1
  }

  // 删除指定文档
  remove(val) {
    const index = this.indexOf(val)
    return this.removeAt(index)
  }

  isEmpty() {
    return !this.length
  }

  size() {
    return this.length
  }

  // 转为字符串
  toString() {
    let current = this.head
    let string = ''
    while (current) {
      string += ` ${current.val}`
      current = current.next
    }
    return string
  }
}

const listNode1 = new LinkedList()
listNode1.append(1)
listNode1.append(2)
listNode1.append(4)
let l1 = listNode1.head

const listNode2 = new LinkedList()
listNode2.append(1)
listNode2.append(3)
listNode2.append(4)
let l2 = listNode2.head

console.log(mergeTwoLists(l1, l2))
// 执行用时：80 ms, 在所有 JavaScript 提交中击败了78.89%的用户
// 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了92.74%的用户