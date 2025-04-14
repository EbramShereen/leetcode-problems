/*
runtime => 5ms
memory => 62.6mb
*/
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let englishNumber = 0;
    for (let i = 0; i < s.length; i++) {
      const romanNumbersToEnglish = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
      };
  
      const currentRoman = s[i];
      const nextRoman = s[i + 1];
      const currentValue = romanNumbersToEnglish[currentRoman];
      const nextValue = romanNumbersToEnglish[nextRoman];
  
      if (currentValue === undefined) {
        break
      }
  
      if (nextValue !== undefined && currentValue < nextValue) {
        englishNumber += nextValue - currentValue;
        i++;
      } else {
        englishNumber += currentValue;
      }
    }
    return englishNumber;
  };