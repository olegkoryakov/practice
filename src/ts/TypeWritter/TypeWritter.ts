export default class TypeWritter {
  constructor(
    element: HTMLElement,
    words: Array<string>,
    duration: number,
  ) {
    this.element = element;
    this.words = words;
    this.duration = duration;
    this.type();
  }

  private element: HTMLElement;

  private words: Array<string>;

  private duration: number;

  private isDeleting = false;

  private wordIndex = 0;

  private txt = '';

  private type() {
    const currentWordIndex = this.wordIndex % this.words.length;
    const fullTxtOfCurrentWord = this.words[currentWordIndex];

    if (this.isDeleting) {
      // remove char
      this.txt = fullTxtOfCurrentWord.substring(
        0,
        this.txt.length - 1,
      );
    } else {
      // add char
      this.txt = fullTxtOfCurrentWord.substring(
        0,
        this.txt.length + 1,
      );
    }

    // insert txt
    this.element.textContent = this.txt;

    // initial type speed
    let typeSpeed = this.duration / 10;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxtOfCurrentWord) {
      typeSpeed = this.duration;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex += 1;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}
