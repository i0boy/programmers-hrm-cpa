class CardView {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "cards_container");
    this.$main.appendChild(containerDiv);
  }
}
export default CardView;
