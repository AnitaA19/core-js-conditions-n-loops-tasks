/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;

  max = b > max ? b : max;
  max = c > max ? c : max;

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */

function canQueenCaptureKing(queen, king) {
  if (queen.y === king.y || queen.x === king.x) {
    return true;
  }

  const deltaX = queen.x - king.x;
  const deltaY = queen.y - king.y;

  if ((deltaX < 0 ? -deltaX : deltaX) === (deltaY < 0 ? -deltaY : deltaY)) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(side1, side2, side3) {
  if (
    side1 <= 0 ||
    side2 <= 0 ||
    side3 <= 0 ||
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    return false;
  }
  return side1 === side2 || side2 === side3 || side1 === side3;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */

function convertToRomanNumerals(num) {
  let result = '';
  let temporaryNumber = num;

  let tens = 0;
  while (temporaryNumber >= 10) {
    tens += 1;
    temporaryNumber -= 10;
  }

  if (tens === 3) {
    result += 'XXX';
  } else if (tens === 2) {
    result += 'XX';
  } else if (tens === 1) {
    result += 'X';
  }

  if (temporaryNumber === 9) {
    result += 'IX';
  } else if (temporaryNumber >= 5) {
    result += 'V';
    const leftover = temporaryNumber - 5;
    let index = 0;
    while (index < leftover) {
      result += 'I';
      index += 1;
    }
  } else if (temporaryNumber === 4) {
    result += 'IV';
  } else {
    let index = 0;
    while (index < temporaryNumber) {
      result += 'I';
      index += 1;
    }
  }

  return result;
}
/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let output = '';
  let shouldAddSpace = false;

  for (let index = 0; index < numberStr.length; index += 1) {
    const currentChar = numberStr[index];
    let wordRepresentation = null;

    switch (currentChar) {
      case '-':
        wordRepresentation = 'minus';
        break;
      case '.':
      case ',':
        wordRepresentation = 'point';
        break;
      case '0':
        wordRepresentation = 'zero';
        break;
      case '1':
        wordRepresentation = 'one';
        break;
      case '2':
        wordRepresentation = 'two';
        break;
      case '3':
        wordRepresentation = 'three';
        break;
      case '4':
        wordRepresentation = 'four';
        break;
      case '5':
        wordRepresentation = 'five';
        break;
      case '6':
        wordRepresentation = 'six';
        break;
      case '7':
        wordRepresentation = 'seven';
        break;
      case '8':
        wordRepresentation = 'eight';
        break;
      case '9':
        wordRepresentation = 'nine';
        break;
      default:
        wordRepresentation = currentChar;
        break;
    }

    if (wordRepresentation !== null) {
      if (shouldAddSpace) {
        output += ' ';
      }
      output += wordRepresentation;
      shouldAddSpace = true;
    }
  }

  return output;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(input) {
  let leftIndex = 0;
  let rightIndex = input.length - 1;

  while (leftIndex < rightIndex) {
    if (input[leftIndex] !== input[rightIndex]) {
      return false;
    }
    leftIndex += 1;
    rightIndex -= 1;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, char) {
  let index = 0;

  while (str[index]) {
    if (str[index] === char) {
      return index;
    }
    index += 1;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(number, target) {
  let absoluteNumber = Math.abs(number);

  while (absoluteNumber > 0) {
    const currentDigit = absoluteNumber % 10;
    if (currentDigit === target) {
      return true;
    }
    absoluteNumber = (absoluteNumber - currentDigit) / 10;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(array) {
  let totalSum = 0;
  for (let i = 0; i < array.length; i += 1) {
    totalSum += array[i];
  }

  let leftTotal = 0;

  for (let i = 0; i < array.length; i += 1) {
    const rightTotal = totalSum - leftTotal - array[i];
    if (leftTotal === rightTotal) {
      return i;
    }
    leftTotal += array[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  const n = size;

  for (let i = 0; i < n; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < n; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let value = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (value <= n * n) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = value;
      value += 1;
    }
    top += 1;

    if (value > n * n) break;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = value;
      value += 1;
    }
    right -= 1;

    if (value > n * n) break;

    for (let i = right; i >= left; i -= 1) {
      matrix[bottom][i] = value;
      value += 1;
    }
    bottom -= 1;

    if (value > n * n) break;

    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = value;
      value += 1;
    }
    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrixParameters) {
  const matrix = matrixParameters;
  const { length } = matrix;

  for (let i = 0; i < length; i += 1) {
    for (let j = i + 1; j < length; j += 1) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < length; i += 1) {
    let left = 0;
    let right = length - 1;
    while (left < right) {
      const temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
      left += 1;
      right -= 1;
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(unsortedArray) {
  const values = unsortedArray;

  function exchange(i, j) {
    const temp = values[i];
    values[i] = values[j];
    values[j] = temp;
  }

  function split(start, end) {
    let left = start;
    let right = end;
    const pivotIdx = Math.floor((start + end) / 2);
    const pivot = values[pivotIdx];

    while (left <= right) {
      while (values[left] < pivot) left += 1;
      while (values[right] > pivot) right -= 1;

      if (left <= right) {
        exchange(left, right);
        left += 1;
        right -= 1;
      }
    }
    return left;
  }

  function sortSection(start, end) {
    if (start >= end) return;
    const pivotIdx = split(start, end);
    sortSection(start, pivotIdx - 1);
    sortSection(pivotIdx, end);
  }

  sortSection(0, values.length - 1);
  return values;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(input, times) {
  if (!input || times <= 0) {
    return input;
  }
  const { length } = input;
  if (length === 1) {
    return input;
  }

  const middle = Math.floor((length + 1) / 2);

  function calculateNext(i) {
    if (i % 2 === 0) {
      return Math.floor(i / 2);
    }
    return middle + Math.floor((i - 1) / 2);
  }

  const checked = new Array(length);
  for (let i = 0; i < length; i += 1) {
    checked[i] = false;
  }

  const outputArr = new Array(length);

  for (let start = 0; start < length; start += 1) {
    if (!checked[start]) {
      const cycleIndices = [];
      let cycleCount = 0;
      let position = start;
      do {
        cycleIndices[cycleCount] = position;
        cycleCount += 1;
        checked[position] = true;

        position = calculateNext(position);
      } while (position !== start);

      const modIterations = times % cycleCount;

      for (let i = 0; i < cycleCount; i += 1) {
        const initialPos = cycleIndices[i];
        const finalPos = cycleIndices[(i + modIterations) % cycleCount];
        outputArr[finalPos] = input.charAt(initialPos);
      }
    }
  }

  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += outputArr[i];
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(num) {
  let tempNum = num;

  const initialValue = tempNum;

  if (tempNum === 0) {
    return 0;
  }

  const digitArray = [];
  let idx = 0;
  while (tempNum > 0) {
    const digit = tempNum % 10;
    tempNum = (tempNum - digit) / 10;
    digitArray[idx] = digit;
    idx += 1;
  }

  const size = idx;

  let pivotIndex = -1;
  let i = 1;
  while (i < size) {
    if (digitArray[i] < digitArray[i - 1]) {
      pivotIndex = i;
      break;
    }
    i += 1;
  }

  if (pivotIndex === -1) {
    return initialValue;
  }

  const pivotVal = digitArray[pivotIndex];
  let swapIdx = -1;
  let smallestValueAbovePivot = 10;
  let j = 0;
  while (j < pivotIndex) {
    if (digitArray[j] > pivotVal && digitArray[j] < smallestValueAbovePivot) {
      smallestValueAbovePivot = digitArray[j];
      swapIdx = j;
    }
    j += 1;
  }

  const temp = digitArray[pivotIndex];
  digitArray[pivotIndex] = digitArray[swapIdx];
  digitArray[swapIdx] = temp;

  let start = 0;
  let end = pivotIndex - 1;
  while (start < end) {
    const tempSwap = digitArray[start];
    digitArray[start] = digitArray[end];
    digitArray[end] = tempSwap;
    start += 1;
    end -= 1;
  }

  let resultNum = 0;
  let multiplier = 1;
  i = 0;
  while (i < size) {
    resultNum += digitArray[i] * multiplier;
    multiplier *= 10;
    i += 1;
  }

  return resultNum;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
