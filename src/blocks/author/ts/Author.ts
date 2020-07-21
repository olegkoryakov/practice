import TypeWritter from '../../../ts/TypeWritter/TypeWritter';

export default class Autor {
  constructor(authorElement: HTMLElement) {
    this.authorElement = authorElement;
    this.init();
  }

  private authorElement: HTMLElement;

  private typeWritter!: ITypeWritter;

  init() {
    const authorAdvantagesElement = this.authorElement.querySelector('.author__advantages');
    if (authorAdvantagesElement) {
      let authorAdvantagesData: any = authorAdvantagesElement.getAttribute('data-advantages');
      if (authorAdvantagesData !== null) {
        authorAdvantagesData = JSON.parse(authorAdvantagesData);
        this.typeWritter = new TypeWritter(
          authorAdvantagesElement as HTMLElement,
          authorAdvantagesData as string[],
          3000,
        );
      }
    }
  }
}
