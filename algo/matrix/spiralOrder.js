/**
 * https://leetcode.cn/problems/spiral-matrix/description/
 * 54. 螺旋矩阵
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]

 */


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
      return []
  }
  const res = []
  const m = matrix.length
  const n = matrix[0].length
  let top = 0, bottom = m - 1, left = 0, right = n - 1
  while(left < right && top < bottom) {
      // 上层
      for (let i = left; i < right; i++) {
          res.push(matrix[top][i])
      }
      // 右侧
      for (let i = top; i < bottom; i++) {
          res.push(matrix[i][right])
      }
      // 下层
      for (let i = right; i > left; i--) {
          res.push(matrix[bottom][i])
      }
      // 左侧
      for (let i = bottom; i > top; i--) {
          res.push(matrix[i][left])
      }
      right--
      top++
      bottom--
      left++
      // 同时四个边界同时收缩
  }
  if (top === bottom) {
      // 剩一行
      for (let i = left; i <= right; i++) {
          res.push(matrix[top][i])
      }
  }  else if (left === right) {
      // 剩一列
      for (let i = top; i <= bottom; i++) {
          res.push(matrix[i][left])
      }
  }
  return res
};

/**
 * 核心思想：定义四个变量代表矩形四个点，然后上、右、下、左分别做四次循环。四个变量均减小1。（遍历时交叉节点可以作为下一次遍历的起点。）
 * 最后遍历完剩下一行（行为奇数）或一列（列为奇数）或一个单点（行列均为奇数）。
 * 然后从左到右或者从上到下遍历即可，因为奇数想当时从头开始遍历，所以应该准寻先从左到右，再从上到下
 */