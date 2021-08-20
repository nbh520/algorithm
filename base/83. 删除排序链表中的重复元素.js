/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head == null || head.next == null) {
    return head
  }
  head.next = deleteDuplicates(head.next)
  if (head.val == head.next.val) {
    head = head.next
  }
  return head
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
listNode1.append(1)
listNode1.append(2)
listNode1.append(2)
listNode1.append(3)
listNode1.append(4)
let l1 = listNode1.head



console.log(deleteDuplicates(l1))
// 执行用时：88 ms, 在所有 JavaScript 提交中击败了61.48%的用户
// 内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了70.20%的用户