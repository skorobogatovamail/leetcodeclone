export type DBProblem = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  likes?: number;
  order: number;
  videoId?: string;
  link?: string;
  description?: string;
};

export const problems: DBProblem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    category: "Array",
    difficulty: "Easy",
    likes: 0,
    order: 1,
    videoId: "8-k1C6ehKuw",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  },
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Hard",
    category: "Linked List",
    order: 2,
    videoId: "",
    likes: 0,
  },
  {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 3,
    videoId: "",
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    order: 4,
    videoId: "xty7fr-k0TU",
    likes: 0,
  },
  {
    id: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    category: "Binary Search",
    order: 5,
    videoId: "ZfFl4torNg4",
    likes: 0,
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Two Pointers",
    order: 6,
    videoId: "",
    likes: 0,
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "intervals",
    order: 7,
    videoId: "",
    likes: 0,
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    order: 8,
    videoId: "4qYTqOiRMoM",
    likes: 0,
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array",
    order: 9,
    videoId: "",
    likes: 0,
  },
  {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking",
    order: 10,
    videoId: "",
    likes: 0,
  },
];
