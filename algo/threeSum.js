/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 先排序
  nums = nums.sort()
  let res = []
  for(let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) {
          // 开始大于0，直接返回
          break
      }
      if (nums[i] === nums[i - 1]) {
          continue
      }
      let left = i + 1
      let right = nums.length - 1
      while(left < right) {
          const result = nums[i] + nums[left] + nums[right]
          if (result > 0) {
              right--
          } else if (result === 0) {
              res.push([nums[i], nums[left], nums[right]])
              left++
              right--
          } else {
              left++
          }
      }
  }
  return res
};

/**
 * 核心思想
 * 先排序成有序数字，从第0个开始遍历，设置两个指针（left、right），分别指向第1位和最后一位
 * 这样的三个数之和跟0比较
 * =0，把三个值放入结果中，同时left指针向右移动，right指针向左移动
 * >0，right指针向左移动
 * <0，left指针向右移动
 * 当两个指针重叠的时候跳出循环，从第1个开遍历一次。
 */