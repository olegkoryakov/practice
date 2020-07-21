export default class SelectionSortView implements ISelectionSortView {
  constructor(parentElement: HTMLUListElement) {
    this.parentElement = parentElement;
    this.lItems = [];
  }

  private parentElement: HTMLUListElement;

  private lItems: Array<HTMLLIElement>;

  private getXCoord(lItem: HTMLLIElement) {
    const parentClientX = this.parentElement.getBoundingClientRect().left;
    const elementClientX = lItem.getBoundingClientRect().left;

    return elementClientX - parentClientX;
  }

  private moveElementToXCoord = (lItem: HTMLLIElement, x: number) => new Promise((resolve) => {
    const onTransitionEnd = () => {
      lItem.removeEventListener('transitionend', onTransitionEnd);
      lItem.classList.remove('selection-sort__item--swap-transition');
      lItem.setAttribute('style', "translate: '0'");
      resolve();
    };

    lItem.addEventListener('transitionend', onTransitionEnd);

    lItem.classList.add('selection-sort__item--swap-transition');
    lItem.setAttribute('style', `transform: translateX(${x}px)`);
  })

  private swapElementsText = (firstElement: HTMLLIElement, secondElement: HTMLLIElement) => {
    const firstElementValueElement = (firstElement.querySelector('.selection-sort__item-value') as HTMLDivElement);
    const secondElementValueElement = (secondElement.querySelector('.selection-sort__item-value') as HTMLDivElement);
    const temp = firstElementValueElement.textContent;
    firstElementValueElement.textContent = secondElementValueElement.textContent;
    secondElementValueElement.textContent = temp;
  }

  renderArray(array: Array<number>) {
    this.parentElement.innerHTML = '';
    this.lItems = [];

    const fragment = document.createDocumentFragment();

    array.forEach((item) => {
      const lItem = document.createElement('li');
      lItem.classList.add('selection-sort__item');

      const lItemBg = document.createElement('div');
      lItemBg.classList.add('selection-sort__item-bg');

      const lItemValue = document.createElement('span');
      lItemValue.classList.add('selection-sort__item-value');
      lItemValue.textContent = item.toString();

      lItem.append(lItemBg, lItemValue);

      fragment.append(lItem);
      this.lItems.push(lItem);
    });

    this.parentElement.append(fragment);
  }

  markSortedSequence = (
    endIndexOfSortedSequence: number,
  ) => new Promise((resolve) => {
    const lItemsBg = this.parentElement.querySelectorAll('.selection-sort__item-bg');
    const length = endIndexOfSortedSequence !== undefined
      ? endIndexOfSortedSequence : lItemsBg.length - 1;

    for (let i = 0; i <= length; i += 1) {
      if (!(lItemsBg[i].classList.contains('selection-sort__item-bg--sorted'))) {
        lItemsBg[i].classList.add('selection-sort__item-bg--sorted');
      }
    }
    const onTransitionEnd = () => {
      lItemsBg[length].removeEventListener('transitionend', onTransitionEnd);
      resolve();
    };

    lItemsBg[length].addEventListener('transitionend', onTransitionEnd);
  });

  async swapAnimation(firstIndex: number, secondIndex: number) {
    const firstElement = this.lItems[firstIndex];
    const secondElement = this.lItems[secondIndex];

    const coord = {
      first: this.getXCoord(secondElement) - this.getXCoord(firstElement),
      second: this.getXCoord(firstElement) - this.getXCoord(secondElement),
    };

    await Promise.all([
      this.moveElementToXCoord.call(this, firstElement, coord.first),
      this.moveElementToXCoord.call(this, secondElement, coord.second),
    ]).then(() => {
      this.swapElementsText(firstElement, secondElement);
    });
  }
}
