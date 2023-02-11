import { getCardStatus, setCardStatus } from "./Storage.js";

/**
 * 카드 레이아웃 요소
 * @param {string} index
 * @returns HTMLDivElement
 */
export const cardDiv = (index) => {
  const card_div = document.createElement("div");
  card_div.setAttribute("idx", index + "");
  card_div.setAttribute("class", getCardStatus(index));
  card_div.addEventListener("click", (e) => {
    const toggleResult = card_div.classList.toggle("is-flipped");
    if (toggleResult) {
      setCardStatus(index, "card is-flipped");
    } else {
      setCardStatus(index, "card");
    }
  });

  return card_div;
};
/**
 * 카드 컨텐츠 요소
 * @param {string} side
 * 카드 면을 나타내는 클래스 명
 * @param {*} data
 * 카드에 표시할 텍스트 데이터
 * @returns HTMLDivElement
 */
export const cardPlane = (side, data) => {
  const cardPlane_div = document.createElement("div");
  cardPlane_div.setAttribute("class", "card_plane card_plane--" + side);
  cardPlane_div.appendChild(document.createTextNode(data));

  return cardPlane_div;
};
