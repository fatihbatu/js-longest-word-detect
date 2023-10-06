function isVowel(char) {
  return (
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
  );
}

function processWord(word) {
  let vowelCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (isVowel(word[i])) {
      vowelCount++;
    }
  }
  return { word, vowelCount };
}

function findLongestWord(sentence) {
  try {
    let cleaned = sentence.replace(/[^a-zA-Z ]/g, '');
    splitted = cleaned.split(' ');
    let longestWordInfo = { word: '', vowelCount: 0 };
    for (let i = 0; i < splitted.length; i++) {
      let wordInfo = processWord(splitted[i]);
      if (wordInfo.word.length > longestWordInfo.word.length) {
        longestWordInfo = wordInfo;
      } else if (
        wordInfo.word.length === longestWordInfo.word.length &&
        wordInfo.vowelCount > longestWordInfo.vowelCount
      ) {
        longestWordInfo = wordInfo;
      } else {
        continue;
      }
    }
    if (longestWordInfo.word.length === 0) {
      return 'error';
    }
    return longestWordInfo.word;
  } catch (error) {
    return 'error';
  }
}






// Pure js tests, no dependencies(like jest)
function runTests() {
  const testCases = [
    {
      input: 'I am a leet programmer',
      expected: 'programmer',
    },
    {
      input: 'A thing of beauty is a joy forever.',
      expected: 'forever',
    },
    {
      input: 'Forgetfulness is by all means powerless!',
      expected: 'Forgetfulness',
    },
    {
      input: 'The word strength is the longest and most beautiful word.',
      expected: 'beautiful',
    },
    {
      input: 'Virtue is bold, and goodness never fearful.',
      expected: 'goodness',
    },
    {
      input:
        'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
      expected: 'boolean',
    },
    {
      input: 'The quick brown fox jumped over the lazy dog',
      expected: 'jumped',
    },
    {
      input: 'Take the dog for a walk today',
      expected: 'today',
    },
    {
      input: 'What a wonderful day, I like it.',
      expected: 'wonderful',
    },
    {
      input: 'I am a leet programmer',
      expected: 'programmer',
    },
    {
      input: 'A thing of beauty is a joy forever.',
      expected: 'forever',
    },
    {
      input: 'Forgetfulness is by all means powerless!',
      expected: 'Forgetfulness',
    },
    {
      input: 12313,
      expected: 'error',
    },
    {
      input: undefined,
      expected: 'error',
    },
    {
      input: null,
      expected: 'error',
    },
    {
      input: '012390293 1 1 3213',
      expected: 'error',
    },
    {
      input: '',
      expected: 'error',
    },
    {
      input: 'What a wonder=_!=^+)ful day, I like it.',
      expected: 'wonderful',
    },
  ];
  let result = '';
  for (let i = 0; i < testCases.length; i++) {
    let testCase = testCases[i];
    result = findLongestWord(testCase.input);
    console.log(
      `Test case ${i + 1}: ${
        result === testCase.expected ? 'Passed' : 'Failed'
      } - Expected: ${testCase.expected}, Actual: ${result}`
    );
  }
}

console.log(runTests());
