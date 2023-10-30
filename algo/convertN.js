/**
 * 
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
请你实现这个将字符串进行指定行数变换的函数：
string convert(string s, int numRows);

 */

var convert = function(s, numRows) {
  if (numRows < 2) return s;
  const rows = new Array(numRows).fill('')
  let i = 0, flag = -1;
  for (let c of s) {
      rows[i] += c;
      // i=0是最上面，i=numRows-1是最下面
      if (i === 0 || i === numRows - 1) {
        flag = -flag;
      }
      i += flag;
      console.log('.....rows', rows)
  }
  return rows.join('');
};

console.log(convert('PAYPALISHIRING', 3))

/**
 .....rows [ 'P', '', '' ]
.....rows [ 'P', 'A', '' ]
.....rows [ 'P', 'A', 'Y' ]
.....rows [ 'P', 'AP', 'Y' ]
.....rows [ 'PA', 'AP', 'Y' ]
.....rows [ 'PA', 'APL', 'Y' ]
.....rows [ 'PA', 'APL', 'YI' ]
.....rows [ 'PA', 'APLS', 'YI' ]
.....rows [ 'PAH', 'APLS', 'YI' ]
.....rows [ 'PAH', 'APLSI', 'YI' ]
.....rows [ 'PAH', 'APLSI', 'YIR' ]
.....rows [ 'PAH', 'APLSII', 'YIR' ]
.....rows [ 'PAHN', 'APLSII', 'YIR' ]
.....rows [ 'PAHN', 'APLSIIG', 'YIR' ]

 * 核心思想是，纵向索引。不断纵向添加，触底反弹。
 */