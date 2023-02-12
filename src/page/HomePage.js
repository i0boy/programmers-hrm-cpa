import CardView from "../components/CardView.js";
import ContentTitle from "../components/ContentTitle.js";
/**
 * @typedef {{render : ()=>void}} Component
 * @implements {Component}
 * */
class HomePage {
  constructor(/**@type{HTMLElement}*/ $main) {
    this.$main = $main;
  }

  render() {
    const title = new ContentTitle(this.$main, "Great PeoPle");
    const cardView = new CardView(this.$main, "/");
    title.render();
    cardView.render();
  }
}
export default HomePage;
