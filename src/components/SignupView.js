import { button, input, select } from "./Form.js";
import position from "../data/position.js";
import mbti from "../data/mbti.js";
import { addPersonalInfo } from "./Storage.js";
class SignupView {
  constructor($main) {
    this.$main = $main;
  }
  renderInput() {
    input("text", "name", "이름", true);
    input("email", "email", "이메일", true);
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
    this.submitForm(form);
    this.renderInput();
    this.renderSelect();
    this.renderButton();
  }

  submitForm($form) {
    $form.addEventListener("submit", (e) => {
      e.preventDefault();

      let name = e.target.name.value;
      let email = e.target.email.value;
      let nickname = e.target.nickname.value;
      const role = e.target.role.value;
      const mbti = e.target.mbti.value;
      const submitInfo = {
        name,
        email,
        role,
        mbti,
        nickname,
      };
      const result = addPersonalInfo(submitInfo);
      if (result === "success") {
        alert("성공적으로 등록되었습니다");
      }
      if (result === "exists") {
        alert("이메일 혹은 닉네임이 이미 등록되어 있습니다.");
      }
    });
  }
}
export default SignupView;
