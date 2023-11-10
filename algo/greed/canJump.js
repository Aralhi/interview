/**
 * 55. 跳跃游戏
 * 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

示例 1：

输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
示例 2：

输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let step = 0
  for (let i = 0; i < nums.length; i++) {
      if (step < i) {
          return false
      }
      step = Math.max(step, i + nums[i])
  }
  return true
};

/**
 * 核心思想：把每个能作为起跳点的都尝试，一次，取最大距离不断更新。如果能跳出就说明成功。
 * 如果最大跳跃step小于索引i，说明调不到索引i，返回失败。
 */