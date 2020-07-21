# Практика. Визуализация алгоритма сортировки выбором.

## Краткое описание
Сортировка выбором - алгоритм сортировки, который содержит в себе следующие шаги:
* Нахождение номера минимального значения в текущем спискею
* Обмен минимального значения со значением первой неотсортированной позиции(обмен не нужен, если минимальный элемент уже находится на данной позиции).
* сортировка оставшихся элементов, исключив из рассмотрения уже отсортированные элементы.

В текущей реализации нужно ввести в поле <code>.selection-sort__input-field</code> последовательность чисел. Допускается вводить через пробел или запятую. В момент наступления события change на этом поле данные считаются и заполнят элемент <code>.selection-sort__array</code> элементами <code>.selection-sort__item</code>.

## Используемые технологии

* [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.")

* [ESLint](https://eslint.org/ "Find and fix problems in your JavaScript code")

* [Webpack](https://webpack.js.org/ "Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging")

## Установка 
* <code>npm run prod</code> для сборки проекта
* <code>npm run dev</code> для запуска локального дев сервера

## Demo
**[клик ми!](https://olegkoryakov.github.io/practice/dist/index.html)**