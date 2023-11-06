/**
 * 279. 完全平方数
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

 */

var numSquares = function(n) {
  const f = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      let minn = Number.MAX_VALUE;
      for (let j = 1; j * j <= i; j++) {
          minn = Math.min(minn, f[i - j * j]);
      }
      f[i] = minn + 1;
  }
  return f[n];
};

/**
 * 动态规划五部曲
 * 1. 确定dp数组以及下标的含义。dp[i]: 和为i的完全平方数的最少数量dp[i]
 * 2. 确定递推公式。dp[i]可由dpd[i - j * j]推出，dp[i - j * j] + 1便可以凑成dp[i]，因此公式为dp[i] = min(dp[i - j * j] + 1, dp[i])
 * 3. dp数组如何初始化。
 * 4. 确定遍历顺序。如果求组合数就是外层for循环遍历物品，内层for遍历背包。如果求排列数就是外层for遍历背包，内层for循环遍历物品。
 * 5. 举例推到dp数组
 */