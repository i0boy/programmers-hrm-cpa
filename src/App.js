import Header from "./components/Header.js";
import ContentTitle from "./components/ContentTitle.js";
import { setPersonalInfo } from "./components/Storage.js";
import HomePage from "./page/HomePage.js";
import SignupPage from "./page/HomePage.js";

/**
 * App Instance
 */
class App {
  #$body;
  #$main;
  constructor($body) {
    this.$body = $body;
    this.$main = this.initMain($body);
    this.render();
  }
  initMain($body) {
    const main = document.createElement("main");
    main.setAttribute("id", "page_content");
    $body.appendChild(main);
    return main;
  }

  async render() {
    const header = new Header(this.$main);
    const homePage = new HomePage(this.$main);
    const signupPage = new SignupPage(this.$main);
    const title = new ContentTitle(this.$main, "Great PeoPle");
    header.render();
    title.render();
    await setPersonalInfo();
    // TODO: 라우터로 이동
    document.addEventListener(
      "urlchange",
      (/**@type{{detail:{href:string}} & Event} */ e) => {
        let pathname = e.detail.href;
        switch (pathname) {
          case "/web/":
            homePage.render();
            break;
          case "/web/signup":
            signupPage.render();
            break;
          default:
        }
      }
    );
  }
}
export default App;
