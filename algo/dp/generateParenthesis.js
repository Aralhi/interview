/**
 * 22. 括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 
 */

var generateParenthesis = function(n) {
  const res = []
  const dfs = function (lRemain, rRemain, str) {
      if (str.length === n * 2) {
          res.push(str)
          return
      }
      if (lRemain > 0) {
          // 只要还有(，就可以选它
          dfs(lRemain - 1, rRemain, str + '(')
      }
      if (rRemain > lRemain) {
          // 只有)大于(个数时才能选)
          dfs(lRemain, rRemain - 1, str + ')')
      }
  }
  dfs(n, n, '')
  return res
};

/**
 * 核心思想：就是不停选括号，要不选左要不选右。
 * 明白约束条件：)还有剩余就可以选。(比)剩余多才可以选。
 */