/**
 * 十大排序
 */


/**
 * 冒泡排序，一次比较两个数字，然后索引加一，一次遍历能确定一个数组的位置。确定最后一个元素
 * 时间复杂度O(n2)
 * 空间复杂度O(1)
 */

function maopao(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
}

/**
 * 选择排序
 * 选择拍戏跟冒泡排序类似，每次轮询找出最小的元素，跟开始轮询的位置调换。确定最开始的元素
 * 时间复杂度O(n2)
 * 空间复杂度O(1)
 */

function selectSort(nums) {
  const len = nums.length
  for (let i = 0; i < len - 1; ++i) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
  }
  return nums
}

/**
 * 插入排序
 * 从1位开始轮询，依次跟之前的元素比较，如果满足条件，把被比较的元素往后挪一位，遍历结束，把当前元素插入到遍历结束后的位置
 * 时间复杂度O(n2)
 * 空间复杂度O(1)
 */

function insertSort(nums) {
  const n = nums.length
  for (let i = 1; i < n; i++) {
    let j = i - 1
    const tmp = nums[i]
    while(j >= 0 && nums[j] > tmp) {
      nums[j + 1] = nums[j]
      --j
    }
    nums[j + 1] = tmp
  }
  return nums
}


/**
 * 希尔排序，插入排序的升级版本。图解见 https://www.cnblogs.com/chengxiao/p/6104371.html
 * 希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减小，每组包含的元素越来越多，当增量减为1时，被分成一组，算法终止。
 */

function xierSort(nums) {
  const n = nums.length
  for (let gap = n >> 1; gap > 0; gap >>= 1) {
    for (let i = 0; i < gap; i++) {
      for (let j = gap + i; j < n; j += gap) {
        let preIndex = j - gap
        const curNum = nums[j]
        while(preIndex >= 0 && nums[preIndex] > curNum) {
          nums[preIndex + gap] = nums[preIndex]
          preIndex -= gap
        }
        nums[preIndex + gap] = curNum
      }
    }
  }
  return nums
}


/**
 * 快速排序
 * 首先选一个基准数，一般取第一个，然后吧小于基准数的放到数列的左边，大于的放到右边。接着把两个分区的元素分别按照上面的方法对每个分区找出及专属，然后移动，知道各个分区只有一个数为止
 * 时间复杂度O(nlogn)
 * 空间复杂度O(nlogn)
 */

function sort(nums) {
  quickSort(nums, 0, nums.length - 1)
  return nums
}

function quickSort(nums, start, end) {
  if (start >= end) {
    return
  }
  const mid = partition(nums, start, end)
  quickSort(nums, start, mid - 1)
  quickSort(nums, mid + 1, end)
}

function partition(nums, start, end) {
  const pivot = nums[start]
  let left = start + 1
  let right = end
  while (left < right) {
    while (left < right && nums[right] >= pivot) {
      // 比基准数大，继续左移，直到发现比其小的值
      right--
    }
    while (left < right && nums[left] <= pivot) {
      // 比基准数小，继续右移，直到发现比其大的值
      left++
    }
    if (left < right) {
      // 交换发现的值，然后继续
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }
  if (left === right && nums[right] > pivot) {
    right--
  }
  // 循环结束，交换基准数和遍历到最后的位置。
  if (right !== start) {
    [nums[right], nums[start]] = [nums[start], nums[right]]
  }
  return right
}