/**
 * 1. 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]

 */

var twoSum = function(nums, target) {
  const len = nums.length
  const map = new Map()
  map.set(nums[0], 0)
  for (let i = 1; i < len; i++) {
      const index = map.get(target - nums[i])
      if (index >= 0) {
          return [index, i]
      }
      map.set(nums[i], i)
  }
};

/**
 * 核心思想
 * 把之前遍历过的元素记录起来，然后跟target作对比。这样就不需要遍历两次了。
 */


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