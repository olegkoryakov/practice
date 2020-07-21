import SelectionSort from '../blocks/selection-sort/ts/selectionSort/SelectionSort';
import Author from '../blocks/author/ts/Author';

const uListElement = (document.querySelector('.selection-sort__array') as HTMLUListElement);
const inputElement = (document.querySelector('.selection-sort__input-field') as HTMLInputElement);

// eslint-disable-next-line no-unused-vars
const selectioSort = new SelectionSort(
  [0, 0, 0],
  uListElement,
  inputElement,
);

const authorElement = (document.querySelector('.author') as HTMLElement);
// eslint-disable-next-line no-unused-vars
const authorInstance = new Author(authorElement);
