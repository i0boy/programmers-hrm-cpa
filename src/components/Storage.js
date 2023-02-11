import new_data from "../data/new_data.js";
const personalInfoToken = "personalInfo";
const cardStatusToken = "cardStatus";
/**
 * @typedef {{
    name: string;
    email: string;
    nickname: string;
    role?: string;
    mbti?: string; 
  status?: string;
  }} PersonalInfo
 */

/**@type{() => Promise<void>} */
export const setPersonalInfo = async () => {
  const data = await Promise.resolve(new_data);
  if (!localStorage.getItem(personalInfoToken)) {
    localStorage.setItem(personalInfoToken, JSON.stringify(data));
  }
};

/**@type{() => PersonalInfo[]} */
export const getPersonalInfo = () => {
  const data = JSON.parse(localStorage.getItem(personalInfoToken));
  return data;
};

/**@type{() => void} */
export const initCardStatus = () => {
  if (!localStorage.getItem(cardStatusToken)) {
    localStorage.setItem(cardStatusToken, JSON.stringify({}));
  }
};

/**@type{() => {[key:string] : string}}} */
export const getCardsStatus = () => {
  initCardStatus();
  return JSON.parse(localStorage.getItem(cardStatusToken));
};

/**@type{(idx:string,status:string) => void} */
export const setCardStatus = (idx, status) => {
  const currentStatus = getCardsStatus();
  localStorage.setItem(
    cardStatusToken,
    JSON.stringify({ ...currentStatus, [idx]: status })
  );
};

/**@type{(idx:string) => string} */
export const getCardStatus = (idx) => {
  return getCardsStatus()[idx] ?? "card";
};
