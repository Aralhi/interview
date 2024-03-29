/**
 * LCR 166. 珠宝的最高价值
 * 
 * 现有一个记作二维矩阵 frame 的珠宝架，其中 frame[i][j] 为该位置珠宝的价值。拿取珠宝的规则为：

只能从架子的左上角开始拿珠宝
每次可以移动到右侧或下侧的相邻位置
到达珠宝架子的右下角时，停止拿取
注意：珠宝的价值都是大于 0 的。除非这个架子上没有任何珠宝，比如 frame = [[0]]。

示例 1:

输入: frame = [[1,3,1],[1,5,1],[4,2,1]]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最高价值的珠宝

 */


var jewelleryValue = function(grid) {
  const m = grid.length, n = grid[0].length;
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i > 0) {
              f[i][j] = Math.max(f[i][j], f[i - 1][j]);
          }
          if (j > 0) {
              f[i][j] = Math.max(f[i][j], f[i][j - 1]);
          }
          f[i][j] += grid[i][j];
      }
  }
  return f[m - 1][n - 1];
};

/**
 * 核心思想：f(i, j)表达走到改位置时的总价值，这个值有，左边和上边的元素决定，所以取左边或上边的最大元素就行了。
 * 一次遍历m*n，算每个位置的最大价值，算到最后得出结论。
 */

/**
 * 64. 最小路径和
 * 
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例 1：
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
示例 2：

输入：grid = [[1,2,3],[4,5,6]]
输出：12
 */

var minPathSum = function(grid) {
  const m = grid.length
  const n = grid[0].length
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i === 0 && j !== 0) {
              grid[i][j] = grid[0][j] + grid[0][j - 1]
          } else if (j === 0 && i !== 0) {
              grid[i][j] = grid[i][0] + grid[i - 1][0]
          } else if (i !== 0 && j !== 0) {
              grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1])
          }
      }
  }
  return grid[m - 1][n - 1]
};

/**
 * 类似 uniquePaths
 */