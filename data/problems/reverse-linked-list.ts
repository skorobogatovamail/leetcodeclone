import assert from "assert";
import { Problem } from "../types/problem";
import example from "../images/reverseLL.jpg";

class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function createLinkedList(arr: number[]): LinkedList {
  const head = new LinkedList(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new LinkedList(arr[i]);
    current.next = node;
    current = node;
  }
  return head;
}

function linkedListToArray(head: LinkedList): number[] {
  const res = [];

  let current: LinkedList | null = head;
  while (current) {
    res.push(current.value);
    current = current.next;
  }
  return res;
}

const reverseLinkedListHandler = (fn: (list: LinkedList) => LinkedList) => {
  try {
    const lists = [[1, 2, 3, 4, 5], [2, 5, 7, 8, 3, 0], [6, 3, 5, 2], [1]];

    const answers = [[5, 4, 3, 2, 1], [0, 3, 8, 7, 5, 2], [2, 5, 3, 6], [1]];

    for (let i = 0; i < lists.length; i += 1) {
      const linkedList = createLinkedList(lists[i]);
      const result = fn(linkedList);
      assert.deepStrictEqual(linkedListToArray(result), answers[i]);
    }
    return true;
  } catch (error) {
    throw error;
  }
};

const starterCodeReverseLinkedListJS = `
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Do not edit function name
function reverseLinkedList(head) {
  // write your code here
}
`;

export const reverseLinkedList: Problem = {
  id: "reverse-linked-list",
  title: "2. Reverse Linked List",
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
  handlerFunction: reverseLinkedListHandler.toString(),
  starterFunctionName: "function reverseLinkedList(",
  order: 2,
};
