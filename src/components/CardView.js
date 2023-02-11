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

  infiniteScroll(/**@type{HTMLElement}*/ container) {
    const target = () =>
      document.getElementById("cards_container").lastElementChild;

    console.log(document.getElementById("cards_container"));
    const personalInfo = getPersonalInfo();
    const io = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          const currentCardsCount =
            document.getElementById("cards_container").childElementCount;
          if (currentCardsCount === personalInfo.length) {
            io.unobserve(target());
            return;
          }
          Array.from({
            length: Math.min(3, personalInfo.length - currentCardsCount),
          }).forEach((_, i) => {
            const card = cardDiv(i + currentCardsCount + "");
            card.appendChild(
              cardPlane("front", personalInfo[i + currentCardsCount].nickname)
            );
            card.appendChild(
              cardPlane("back", personalInfo[i + currentCardsCount].mbti)
            );
            container.appendChild(card);
          });
        }
        io.unobserve(target());
        io.observe(target());
      },
      {
        threshold: 0.7,
      }
    );
    io.observe(target());
  }

  render() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "cards_container");

    const personalInfo = getPersonalInfo();
    personalInfo.slice(0, 3).forEach((cardData, i) => {
      const card = cardDiv(i + "");
      card.appendChild(cardPlane("front", cardData.nickname));
      card.appendChild(cardPlane("back", cardData.mbti));
      containerDiv.appendChild(card);
    });
    this.$main.appendChild(containerDiv);
    this.infiniteScroll(containerDiv);
  }
}
export default CardView;
