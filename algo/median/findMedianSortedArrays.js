/**
 * 寻找两个有序数组的中位数
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

示例 1：

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

 */

/**
 * 双指针遍历
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  let p1 = p2 = 0
  const isOdd = (m + n) % 2 === 1
  let target = isOdd ? (m + n + 1) / 2 : (m + n) / 2
  let count = 0
  let val
  let firstVal
  while(p1 <= m || p2 <= n) {
      if (isOdd) {
          // 奇数，到中位数
          if (count === target) {
              return val
          }
      } else {
          // 偶数，到中位数
          if (count === target) {
              firstVal = val
          }
      }
      if (p1 >= m || m === 0) {
          val = nums2[p2++]
      } else if (p2 >= n || n === 0) {
          val = nums1[p1++]
      } else if (nums1[p1] < nums2[p2]) {
          val = nums1[p1++]
      } else {
          val = nums2[p2++]
      }
      count++
      if (firstVal !== undefined) {
          return (firstVal + val) / 2
      }
  }
};

/**
 * 核心思想：双指针
 * 从两个数组的0分别开始遍历，小的元素指针递增。知道遍历的个数等于中位数的索引。
 * 奇数好处理，偶数需要记录上一个元素的值跟当前值相加除以2。
 */

/**
 * 双指针合并再取数
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const arr = []
  let p2 = p1 = 0
  while(p1 < m || p2 < n) {
    if (p1 >= m || m === 0) {
      // 指针超出边界或为空，则用另一个数组的元素
      arr.push(nums2[p2++])
    } else if (p2 >= n || n === 0) {
      arr.push(nums1[p1++])
    } else if (nums1[p1] < nums2[p2]) {
      arr.push(nums1[p1++])
    } else {
      arr.push(nums2[p2++])
    }
  }
  if (arr.length % 2 === 0) {
    const mid = arr.length / 2
    return (arr[mid - 1] + arr[mid]) / 2
  } else {
    return arr[Math.floor((m + n) / 2)]
  }
}

const nums1 = [1,3]
const nums2 = [2]
console.log(findMedianSortedArrays(nums1, nums2))