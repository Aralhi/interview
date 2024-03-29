/**
 * 
整数数组 nums 按升序排列，数组中的值 互不相同 。
在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const n = nums.length
  if (n === 0) {
      return -1
  }
  if (n === 1) {
      return nums[0] === target ? 0 : -1
  }
  let l = 0
  let r = n - 1
  while(l <= r) {
      const mid = (l + r) >> 1
      if (nums[mid] === target) {
          return mid
      }
      if (nums[l] <= nums[mid]) {
          // 左侧有序
          if (nums[l] <= target && target <= nums[mid]) {
              // 如果target在有序的区间里，则搜索左侧区间
              r = mid - 1
          } else {
              // 否则搜索右侧区间
              l = mid + 1
          }
      } else {
          // 右侧有序
          if (nums[mid] <= target && target <= nums[r]) {
              l = mid + 1
          } else {
              r = mid - 1
          }
      }
  }
  return -1
};

/**
 * 搞懂这个问题的精髓在于三个定理
 * 1. 只有在有序区间才可以通过区间的两个端点判断target是否在其中。
 * 2. 判断有序区间还是无序区间，通过判断左右两个端点的值即可
 * 3. 每次二分至少会出现一个有序区间。
 */