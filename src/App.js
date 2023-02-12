import Header from "./components/Header.js";
import ContentTitle from "./components/ContentTitle.js";
import { setPersonalInfo } from "./components/Storage.js";
import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";

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
    $body.innerHtml = "";
    const main = document.createElement("main");
    main.setAttribute("id", "page_content");
    $body.appendChild(main);
    return main;
  }

  async initData() {
    return await setPersonalInfo();
  }

  initComponents() {
    const header = new Header(this.$main);
    const homePage = new HomePage(this.$main);
    const signupPage = new SignupPage(this.$main);
    return { header, homePage, signupPage };
  }
  initMainPageComponents(
    /**@type {{render : ()=>void}[]} */ ...mainComponents
  ) {
    mainComponents.forEach((e) => e.render());
  }
  async initDataDependantComponents(
    /**@type {{render : ()=>void}[]} */ ...mainComponents
  ) {
    await this.initData();
    mainComponents.forEach((e) => e.render());
    return;
  }

  async initComponentByUrl() {
    this.$main.innerHTML = "";
    const { header, homePage, signupPage } = this.initComponents();
    this.initMainPageComponents(header);
    if (location.pathname === "/") {
      await this.initDataDependantComponents(homePage);
      return;
    }
    if (location.pathname === "/signup") {
      signupPage.render();
      return;
    }
  }

  async render() {
    this.initComponentByUrl();
    // TODO: 라우터로 이동
    document.addEventListener(
      "urlchange",
      (/**@type{{detail:{href:string}} & Event} */ e) => {
        let pathname = e.detail.href;
        if (location.pathname === pathname) {
          return;
        }
        window.history.pushState("", "", pathname);
        this.initComponentByUrl();
      }
    );
  }
}

export default App;
