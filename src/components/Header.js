import { createUrlChangeEvent } from "../util/event.js";

/**
 *      아래와 같은 구조로 헤더를 작성함
 *     <header>
 *      // createMenuElem
        <div class="header header_left">
            <span class="menu_name" id="menu_home">HOME</span>
        </div>
        <div class="header header_right">
            <span class="menu_name" id="menu_signup">SIGNUP</span>
        </div>
    </header>
 */
/**
 * @typedef {{render : ()=>void}} Component
 * @implements {Component}
 * */
class Header {
  constructor($body) {
    this.$body = $body;
  }

  createElem(tag, props, aChild) {
    const elem = document.createElement(tag);
    Object.entries(props).forEach(([attr, value]) => {
      elem.setAttribute(attr, value);
    });
    if (aChild) {
      elem.appendChild(aChild);
    }
    return elem;
  }

  createMenuElem(divClass, spanClass, spanId, menuText) {
    const span = this.createElem(
      "span",
      { class: spanClass, id: spanId },
      document.createTextNode(menuText)
    );
    const div = this.createElem("div", { class: divClass }, span);
    return div;
  }
  addEventListener(elem, event, callBack) {
    elem.addEventListener(event, callBack);
  }

  render() {
    const header = document.createElement("header");
    const home_menu = this.createMenuElem(
      "header header_left",
      "menu_name",
      "menu_home",
      "HOME"
    );
    this.addEventListener(home_menu, "click", () => {
      const urlChange = createUrlChangeEvent({
        detail: { href: "/" },
      });
      document.dispatchEvent(urlChange);
    });
    const signup_menu = this.createMenuElem(
      "header header_right",
      "menu_name",
      "menu_signup",
      "SIGNUP"
    );
    this.addEventListener(signup_menu, "click", () => {
      const urlChange = createUrlChangeEvent({
        detail: { href: "/signup" },
      });
      document.dispatchEvent(urlChange);
    });
    header.appendChild(home_menu);
    header.appendChild(signup_menu);
    this.$body.appendChild(header);
  }
}
export default Header;
