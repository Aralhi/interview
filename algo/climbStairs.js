/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 */

var climbStairs = function (n) {
  const dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 0; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

/** 这递归可能会超时 */
var climbStairs_1 = function(n) {
  if(n===0) return 1
  if(n===1) return 1
  return climbStairs_1(n-1)+climbStairs_1(n-2)
}

/**
 * 核心思想是斐波那契数列，第n个的数字是由前面两个的数字相加得出来的。
 */