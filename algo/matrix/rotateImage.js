/**
 * 48. 旋转图像 https://leetcode.cn/problems/rotate-image/description/
 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 */

var rotate = function(matrix) {
  // 0,1 --> 1,2
  // 1,1 --> 1,1
  // 2,1 --> 1,0
  // i,j --> j,n - i - 1
  // n - i - 1 = j
  // n - 1 - (n - 1 - i)
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
          const tmp = matrix[i][j]
          // 四个角互换，从matrix[j][n - 1 - i] = tmp倒退赋值。
          matrix[i][j] = matrix[n - 1 - j][i]
          matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
          matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
          matrix[j][n - 1 - i] = tmp
      }
  }
};

/**
 * 核心思想：i,j --> j,n - i - 1
 */

// 第二题
/**
 * 
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
不占用额外内存空间能否做到？

示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
示例 2:

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length
  const new_matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
          new_matrix[j][n - i - 1] = matrix[i][j]
      }
  }
  for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
          matrix[i][j] = new_matrix[i][j]
      }
  }
};