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