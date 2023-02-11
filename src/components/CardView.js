import { cardDiv, cardPlane } from "./Card.js";
import { getPersonalInfo } from "./Storage.js";

// 카드 컨테이너 요소
/**
 * @typedef {{render : ()=>void }} Component
 * @implements {Component}
 * */
class CardView {
  constructor(/**@type{HTMLElement}*/ $main) {
    this.$main = $main;
  }

  render() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "cards_container");
    const personalInfo = getPersonalInfo();
    personalInfo.forEach((cardData, i) => {
      const card = cardDiv(i + "");
      card.appendChild(cardPlane("front", cardData.nickname));
      card.appendChild(cardPlane("back", cardData.mbti));
      containerDiv.appendChild(card);
    });

    this.$main.appendChild(containerDiv);
  }
}
export default CardView;
