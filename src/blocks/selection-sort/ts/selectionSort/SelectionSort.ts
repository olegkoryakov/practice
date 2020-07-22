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
    this.view = new SelectionSortView(parentElement, inputElement);
    this.controller = new SelectionSortController(this.model, this.view);
  }

  private inputElement: HTMLInputElement;

  private model: ISelectionSortModel;

  private view: ISelectionSortView;

  private controller: ISelectionSortController;
}
