/**
 * 
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  return sumVal(l1, l2, 0)
};

function sumVal(l1, l2, carry) {
  if (!l1 && !l2 && carry === 0) {
    return null
  }
  const val1 = l1 ? l1.val : 0
  const val2 = l2 ? l2.val : 0
  const sum = val1 + val2 + carry
  const node = new ListNode(sum % 10)
  node.next = sumVal(l1 ? l1.next : null, l2 ? l2.next : null, Math.floor(sum / 10))
  return node
}