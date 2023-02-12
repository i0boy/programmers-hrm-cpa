export const input = (type, id, placeholder, required) => {
  const span = document.createElement("span");
  span.setAttribute("class", "form_elem");

  const input = createInput(type, id, placeholder, required);
  const label = createLabel(id, placeholder, required);
  span.appendChild(label);
  span.appendChild(input);
  document.getElementById("grepp_form").appendChild(span);
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
