import ContentTitle from "../components/ContentTitle.js";
import SignupView from "../components/SignupView.js";
/**
 * @typedef {{render : ()=>void}} Component
 * @implements {Component}
 * */
class SignupPage {
  constructor(/**@type{HTMLElement} */ $main, $pageUrl) {
    this.$main = $main;
    this.$pageUrl = $pageUrl;
  }

  render() {
    const title = new ContentTitle(this.$main, "Sign Up, GreatPeoPle!");
    title.render();
    const signupView = new SignupView(this.$main);
    signupView.render();
  }
}

export default SignupPage;
