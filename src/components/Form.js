export const input = (type, id, placeholder, required) => {
  const span = document.createElement("span");
  span.setAttribute("class", "form_elem");

  const input = createInput(type, id, placeholder, required);
  addValidation(input);
  const label = createLabel(id, placeholder, required);
  span.appendChild(label);
  span.appendChild(input);
  document.getElementById("grepp_form").appendChild(span);
};

/**
 *
 * @param {HTMLInputElement} $input  */
const addValidation = ($input) => {
  if (validationData[$input.id]) {
    $input.setAttribute("pattern", validationData[$input.id].pattern);
    $input.setAttribute("title", validationData[$input.id].title);
  }
};

const validationData = {
  email: {
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.source,
    title:
      "이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다.",
  },
  name: {
    pattern: "^([가-힣]){2,4}$",
    title: "2~4 글자의 한글만 입력이 가능합니다.",
  },
  nickname: {
    pattern: /^([A-Za-z]){3,10}$/g.source,
    title: "대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다.",
  },
};

export const select = (id, optValList, label, placeholder, required) => {
  const span = document.createElement("span");
  span.setAttribute("class", "form_elem");

  const select = createSelect(id, required);
  const $label = createLabel(id, label, required);

  span.appendChild($label);
  select.appendChild(defaultOption(placeholder));

  optValList.forEach((d, i) => {
    const option = document.createElement("option");
    option.setAttribute("value", d);
    option.appendChild(document.createTextNode(d));
    select.appendChild(option);
  });

  span.appendChild(select);
  document.getElementById("grepp_form").appendChild(span);
};

export const button = (type, text) => {
  const span = document.createElement("span");
  span.setAttribute("class", "form_elem");

  const button = document.createElement("button");
  button.setAttribute("type", type);
  button.appendChild(document.createTextNode(text));

  span.appendChild(button);
  document.getElementById("grepp_form").appendChild(span);
};

const defaultOption = (placeholder) => {
  const option = document.createElement("option");
  option.setAttribute("value", "");
  option.appendChild(document.createTextNode(placeholder));
  return option;
};

const createInput = (type, id, text, required) => {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute("placeholder", text);
  if (required) {
    input.setAttribute("required", "");
  }
  return input;
};

/**
 *
 * @param {string} id
 * @param {boolean|undefined} required
 * @returns HTMLSelectElement
 */
const createSelect = (id, required = false) => {
  const select = document.createElement("select");
  select.setAttribute("id", id);
  select.setAttribute("name", id);

  if (required) {
    select.setAttribute("required", "");
  }

  return select;
};

/**
 *
 * @param {string} id
 * @param {string} label
 * @param {boolean|undefined} required
 * @returns
 */
const createLabel = (id, label, required = false) => {
  const $label = document.createElement("label");
  $label.setAttribute("for", id);
  $label.appendChild(document.createTextNode(label));

  if (required) {
    const markSpan = document.createElement("span");
    markSpan.setAttribute("class", "mark");
    markSpan.appendChild(document.createTextNode("(필수*)"));
    $label.appendChild(markSpan);
  }

  return $label;
};
