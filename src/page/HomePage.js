import CardView from "../components/CardView.js";

class HomePage {
  constructor(/**@type{HTMLElement}*/ $main) {
    this.$main = $main;
  }

  render() {
    const cardView = new CardView(this.$main);
    cardView.render();
  }
}
export default HomePage;
