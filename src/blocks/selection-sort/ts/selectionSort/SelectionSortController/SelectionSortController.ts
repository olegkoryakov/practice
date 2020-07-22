export default class SelectionSortController implements ISelectionSortController {
  constructor(
    model: ISelectionSortModel,
    view: ISelectionSortView,
  ) {
    this.model = model;
    this.view = view;

    this.view.on('change-values', this.changeValues.bind(this));
  }

  private view: ISelectionSortView;

  private model: ISelectionSortModel;

  private changeValues(values: Array<number>) {
    this.model.setArray(values);
    this.view.renderArray(values);
    this.sortArray();
  }

  private async sortArray() {
    this.model.sortArray();

    const indexesToSwapArray = this.model.getIndexesToSwapArray();

    const { length } = indexesToSwapArray;

    for (let i = 0; i < length; i += 1) {
      const [first, second] = indexesToSwapArray[i];
      // eslint-disable-next-line no-await-in-loop
      await this.view.swapAnimation(first, second);

      if (i === length - 1) {
        // eslint-disable-next-line no-await-in-loop
        await this.view.markSortedSequence();
      } else {
        // eslint-disable-next-line no-await-in-loop
        await this.view.markSortedSequence(second);
      }
    }
  }
}
