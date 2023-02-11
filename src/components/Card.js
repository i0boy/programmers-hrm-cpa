/**
 * 카드 레이아웃 요소
 * @param {string|number} index
 * @returns HTMLDivElement
 */
export const cardDiv = (index) => {
  const card_div = document.createElement("div");
  card_div.setAttribute("idx", index + "");
  card_div.setAttribute("class", "card");

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
