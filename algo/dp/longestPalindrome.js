/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
 */

var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s
  }
  let l = 0
  let r = 0
  for (let i = 0; i < s.length; i++) {
    // 奇数
    helper(i, i)
    // 偶数
    helper(i, i + 1)
  }

  function helper(m, n) {
    while(m >=0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    if (n - m > r - l) {
      r = n
      l = m
    }
  }
  return s.slice(l + 1, r)
};

/**
 * 核心思想：两种情况，一种是回文子串长度为奇数，一种是偶数。循环遍历，对取到的每个值都假设他可能成为最后的中心进行判断。
 */