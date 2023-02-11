/**
 * 아래와 같은 항목 렌더링
 *
 * <div class="content_title">
 *   <h1> CardView </h1> <-- CardView 텍스트를 받아 텍스트 노드로 만듬.
 * </div>
 */
class ContentTitle {
  constructor($main, $title) {
    this.$main = $main;
    this.$title = $title;
  }

  render() {
    const div = document.createElement("div");
    div.setAttribute("class", "content_title");

    const h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(this.$title));

    div.appendChild(h1);
    this.$main.appendChild(div);
  }
}
export default ContentTitle;
