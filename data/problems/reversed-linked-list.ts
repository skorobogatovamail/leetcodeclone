import assert from "assert";
import { Problem } from "../types/problem";

const reverseLinkedListHandler = (fn: (list: number[]) => number[]) => {
  try {
    const lists = [[1, 2, 3, 4, 5], [2, 5, 7, 8, 3, 0], [6, 3, 5, 2], [1]];

    const answers = [[5, 4, 3, 2, 1], [0, 3, 8, 7, 5, 2], [2, 5, 3, 6], [1]];

    for (let i = 0; i < lists.length; i += 1) {
      const result = fn(lists[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    throw error;
  }
};

export const reversedLinkedList: Problem = {
  id: "reversed-linked-list",
  title: "2. Reversed Linked List",
  problemStatement: `
  <div class=" text-sm flex flex-col gap-3">
  <p >Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>
  </div>
	`,
  examples: [
    {
      id: 0,
      inputText: "head = [1,2,3,4,5]",
      outputText: "[5,4,3,2,1]",
      img: example.src,
    },
    {
      id: 1,
      inputText: "head = [1,2,3]",
      outputText: "[3,2,1]",
    },
    {
      id: 2,
      inputText: "head = [1]",
      outputText: "[1]",
    },
  ],
  constraints: `<li class='mt-2'>The number of nodes in the list is the range <code>[0, 5000]</code>.</li>
  <li class='mt-2'><code>-5000 <= Node.val <= 5000</code></li>`,
  starterCode: starterCodeReverseLinkedListJS,
  handlerFunction: reverseLinkedListHandler,
  starterFunctionName: "function reverseLinkedList(",
  order: 2,
};
