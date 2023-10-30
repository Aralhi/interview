/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3

 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
          count++
          turnZero(i, j, grid);
      }
      }
  }
  return count
};

function turnZero(i, j, grid) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') {
    return
  }
  grid[i][j] = '0';
  turnZero(i - 1, j, grid);
  turnZero(i + 1, j, grid);
  turnZero(i, j - 1, grid);
  turnZero(i, j + 1, grid)
}

/**
 * 核心思想：深度优先遍历DFS和广度优先遍历BFS
 * 遇到1说明就是大陆，count + 1，然后遍历节点的上下左右设置成0，以及节点相邻的节点。
 */

