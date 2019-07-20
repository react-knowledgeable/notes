module.exports = {
  docs: {
    Preface: [
      'introduction',
      // 'landscape',
    ],
    'Job Application': [
      // 'how-to-apply',
      'resume',
      'cover-letter',
    ],
    'Interview Process': [
      // 'interview-stages',
      'company-interview-formats',
      'self-introduction',
      {
        type: 'category',
        label: 'Coding Round',
        items: [
          'coding-round-overview',
          'picking-a-language',
          'study-and-practice',
          'coding-round-phases',
          'cheatsheet',
          'mock-interviews',
        ],
      },
      {
        type: 'category',
        label: 'Behavioral Round',
        items: [
          'star-framework',
          'behavioral-questions',
          'psychological-tricks',
        ],
      },
      'questions-to-ask',
    ],
    'Post Interview': ['negotiation', 'understanding-compensation'],
    Algorithms: [
      'algorithms/algorithms-introduction',
      'algorithms/array',
      'algorithms/binary',
      'algorithms/dynamic-programming',
      'algorithms/geometry',
      'algorithms/graph',
      'algorithms/hash-table',
      'algorithms/heap',
      'algorithms/interval',
      'algorithms/linked-list',
      'algorithms/math',
      'algorithms/matrix',
      'algorithms/oop',
      'algorithms/permutation',
      'algorithms/queue',
      'algorithms/recursion',
      'algorithms/sorting-searching',
      'algorithms/stack',
      'algorithms/string',
      'algorithms/tree',
      'algorithms/trie',
    ],
  },
};
