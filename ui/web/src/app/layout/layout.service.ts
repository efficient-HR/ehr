export class LayoutService {
  private showMenu!: boolean;
  constructor() {}

  show() {
    return this.showMenu;
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
