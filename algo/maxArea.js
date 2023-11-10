/**
 11. 盛最多水的容器
 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
返回容器可以储存的最大水量。

输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
示例 2：

输入：height = [1,1]
输出：1

 */

var maxArea = function(height) {
  const n = height.length
  let left, ans = 0;
  let right = n - 1
  while(left < right) {
    ans = Math.max(ans, Math.min(height[left], height[right]) * (right - left))
    if(height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return ans
}

/**
 * 核心思想
 * 定理：当前列的容量 = 左右两变最大值，且短的这条线和中间的任意一条线组合都不会超过当前的值。
 * 从两头开始遍历，计算左右两个指针的容量，哪条线短移动哪条。
 */


/**
 42. 接雨水
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9

 */

var trap = function (height) {
  const n = height.length
  let left = 0
  let right = n - 1
  let ans = 0
  let preMax = 0
  let subMax = 0
  while (left <= right) {
    preMax = Math.max(preMax, height[left]);
    subMax = Math.max(subMax, height[right]);
    if (preMax < subMax) {
      ans += preMax - height[left]
      left++
    } else {
      ans += subMax - height[right]
      right--
    }
  }
  return ans
}

/**
 * 核心思想
 * 当前列的雨量 = 左右两边的最大值 - 当前列的值
 * 也就是说雨量是有左右两侧的最大值决定了，所以要不断地找最大值，左侧最大值比右侧小，指针不断右边移，否则左移。
 */