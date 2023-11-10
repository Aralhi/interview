/**
 * 买卖股票的最佳时机 II
给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
返回 你能获得的 最大 利润 。

 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ans = 0
  for (let i = 1; i < prices.length; i++) {
      ans += Math.max(0, prices[i] - prices[i - 1])
  }
  return ans;
};

/**
 * 核心思想：把没两天之间的差计算出来求和就是最大利润。如果第二天涨，前一天就埋点。否则不卖，则利润为0.
 */