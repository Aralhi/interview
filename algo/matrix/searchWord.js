/**
 * https://leetcode.cn/problems/word-search/description/
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true

 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const n = board[0].length //
  const m = board.length
  const used = new Array(m).fill(0).map(i => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (board[i][j] === word[0] && canFind(i, j, 0)) {
              return true
          }
      }
  }
  function canFind(row, col, index) {
      // 上下左右依次找下一个字符
      // 索引超出word长度说明找到，返回true
      if (index >= word.length) {
          return true
      }
      // 越界返回false
      if (row < 0 || col < 0 || row >= m || col >= n) {
          return false
      }
      // 遍历过，或者不匹配，返回false
      if (used[row][col] === 1 || board[row][col] !== word[index]) {
          return false
      }
      used[row][col] = 1 // 记录被访问过了
      // 然后深度遍历该节点的上下左右
      const findRest = canFind(row - 1, col, index + 1) || canFind(row + 1, col, index + 1)
          || canFind(row, col - 1, index + 1) || canFind(row, col + 1, index + 1)
      if (findRest) {
          return true
      }
      // 后面路径不通，重置该节点
      used[row][col] = 0
      return false
  }
  return false
};

/**
 * 核心思想：先遍历二维数组，找到单词的第一个char。然后采用递归，对该位置上下左右依次遍历，找单词的下一个char。
 * 超出边界返回、使用过、指不匹配均返回false，跳出递归
 * 索引超出单词长度，说明找到
 * 如果命中单词的char，把对应的坐标标记为已使用，同时对上下左右四个路径进行递归，如果有任何一个路径返回true，说明找到了
 * 否则，当前坐标重置为0，并返回false
 */