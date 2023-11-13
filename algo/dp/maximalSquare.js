/**
 * 221. 最大正方形
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4

 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let maxSideLength = 0
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === '1') {
              if (i === 0 || j === 0) {
                  dp[i][j] = 1
              } else {
                  dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
              }
              maxSideLength = Math.max(maxSideLength, dp[i][j])
          }
      }
  }
  return maxSideLength * maxSideLength
};

/**
 * 核心思想：dp[i][j]代表坐标[i][j]为右下角所能形成的最大正方形的边，取决于它左边、上边、左上边的最小值 + 1
 * 所以问题转变为动态规划问题，求dp[i][j]的最小边长，起始值为：第一行和第一列对应的dp[i][j]是0
 */