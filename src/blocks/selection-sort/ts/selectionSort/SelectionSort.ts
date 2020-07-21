import SelectionSortModel from './SelectionSortModel/SelectionSortModel';
import SelectionSortView from './SelectionSortView/SelectionSortView';
import SelectionSortController from './SelectionSortController/SelectionSortController';

export default class SelectionSort implements ISelectionSort {
  constructor(
    array: Array<number>,
    parentElement: HTMLUListElement,
    inputElement: HTMLInputElement,
  ) {
    this.inputElement = inputElement;
    this.model = new SelectionSortModel(array);
    this.view = new SelectionSortView(parentElement);
    this.controller = new SelectionSortController(this.model, this.view);

    this.inputElement.addEventListener('change', this.onInputChange.bind(this));
  }

  private inputElement: HTMLInputElement;

  private model: ISelectionSortModel;

  private view: ISelectionSortView;

  private controller: ISelectionSortController;

  // eslint-disable-next-line class-methods-use-this
  private isCorrectValues(values: Array<number>) {
    const isCorrectValues = !values.some((value) => Number.isNaN(value));
    return isCorrectValues;
  }

  onInputChange() {
    const regExp = new RegExp(',?\\s');
    let values: string | Array<number> = this.inputElement.value;

    if (values !== '') {
      values = values.split(regExp).map((value) => parseInt(value, 10));
      const isCorrectValues = this.isCorrectValues(values);

      if (isCorrectValues) {
        this.inputElement.setCustomValidity('');
        this.controller.init(values);
      } else {
        this.inputElement.setCustomValidity('please, enter correct values');
      }
    }
  }
}
