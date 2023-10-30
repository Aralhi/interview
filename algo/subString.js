/**
 * 
 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const set = new Set()
  const len = s.length
  let ans = 0
  let right = 0
  for (let i = 0; i < len; ++i) {
    if (i > 0) {
      set.delete(s.charAt(i - 1))
    }
    while(right < len && !set.has(s.charAt(right))) {
      set.add(s.charAt(right))
      right++
    }
    ans = Math.max(ans, right - i)
  }
  return ans
};

console.log(lengthOfLongestSubstring('abcabcbb'))

/**
 * 核心思想：滑动指针
 * 从第0位开始，依次往后找不等的元素，需要用Set来存储已经出现过的元素，然后right指针记录位置
 * 有重复出现的时候计算子串长度，然后从第1位再执行一遍，执行前需要把第0位的元素从set中删除。
 */