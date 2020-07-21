type TIndexesToSwapArray = Array<Array<number>>;

interface ISelectionSortModel {
  setArray(array: Array<number>): void,
  getArray(): Array<number>,
  sortArray(): void,
  getIndexesToSwapArray(): TIndexesToSwapArray,
}

interface ISelectionSortView {
  renderArray(array: Array<number>): void,
  swapAnimation(firstIndex: number, secondIndex: number): Promise<void>,
  markSortedSequence(endIndexOfSortedSequence?: number): Promise<unknown>,
}

interface ISelectionSortController {
  init(userArray: Array<number>): void;
}

interface ISelectionSort {
}
