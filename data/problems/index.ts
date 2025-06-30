import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";

interface ProblemMap {
    [key: string]: Problem;
}

export const problems: ProblemMap = {
    'two-sum': twoSum,
    'reverse-Linked-List': reverseLinkedList,
    'jump-game': jumpGame,
    'search-2D-Matrix': search2DMatrix,
    'valid-parentheses': validParentheses,
}