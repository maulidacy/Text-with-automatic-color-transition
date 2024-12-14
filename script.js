//Text with automatic color transition
class ColorChanger {
  constructor(elementId, colors, interval) {
    this.element = document.getElementById(elementId);
    this.colors = colors;
    this.currentIndex = 0;
    this.interval = interval;

    this.startChangingColors();
  }

  changeColor() {
    this.element.style.color = this.colors[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
  }

  startChangingColors() {
    setInterval(() => this.changeColor(), this.interval);
  }
}

const colors = ["#ff7d61", "#ffdb59", "#ff33f6", "#fddd68"];
const colorChanger = new ColorChanger("colorful-text", colors, 1000); // Ganti warna setiap 1 detik
