export default class SelectionSortModel implements ISelectionSortModel {
  constructor(array: Array<number>) {
    this.array = array;
    this.indexesToSwapArray = [];
  }

  array: Array<number>;

  indexesToSwapArray: Array<Array<number>>;

  private resetIndexesToSwap() {
    this.indexesToSwapArray = [];
  }

  getIndexesToSwapArray() {
    return this.indexesToSwapArray;
  }

  setArray(array: Array<number>) {
    this.array = array;
  }

  getArray() {
    return this.array;
  }

  sortArray() {
    this.resetIndexesToSwap();
    const { length } = this.array;

    for (let i = 0; i < length; i += 1) {
      let indexMin = i;
      for (let j = i + 1; j < length; j += 1) {
        if (this.array[j] < this.array[indexMin]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        // swap
        const temp = this.array[i];
        this.array[i] = this.array[indexMin];
        this.array[indexMin] = temp;

        this.indexesToSwapArray.push([indexMin, i]);
      }
    }
  }
}
