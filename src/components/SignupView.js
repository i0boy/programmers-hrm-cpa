import { button, input, select } from "./Form.js";
import position from "../data/position.js";
import mbti from "../data/mbti.js";
class SignupView {
  constructor($main) {
    this.$main = $main;
  }
  renderInput() {
    input("text", "name", "이름", true);
    input("email", "name", "이메일", true);
    input("text", "nickname", "닉네임", true);
  }
  renderSelect() {
    const roleValList = position.map((d) => d.name);
    select("role", roleValList, "직군", "직군을 선택해 주세요", true);
    select("mbti", mbti, "MBTI", "MBTI를 선택해 주세요");
  }
  createContainer() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "form_container");
    this.$main.appendChild(containerDiv);
    const form = document.createElement("form");
    form.setAttribute("id", "grepp_form");
    containerDiv.appendChild(form);
    return form;
  }
  renderButton() {
    button("submit", "등록");
  }

  render() {
    const form = this.createContainer();
    this.renderInput();
    this.renderSelect();
    this.renderButton();
  }
}
export default SignupView;
