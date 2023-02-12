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
export const getPersonalInfos = () => {
  const data = JSON.parse(localStorage.getItem(personalInfoToken)) || [];
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

/**@type{(nickname:Partial<PersonalInfo>) => PersonalInfo|undefined} */
export const getPersonalInfo = (keyValue) => {
  return [...getPersonalInfos()].filter((d) =>
    Object.entries(keyValue).some(([k, v]) => {
      return d[k] === v;
    })
  )?.[0];
};

/**@type{(info:PersonalInfo) =>'success' |'exists'} */
export const addPersonalInfo = (info) => {
  const prevInfo = getPersonalInfo({
    nickname: info.nickname,
    email: info.email,
  });
  if (!prevInfo) {
    const personInfos = getPersonalInfos();
    const /**@type{PersonalInfo[]} */ newPersonInfos = [
        ...personInfos,
        { ...info },
      ];
    localStorage.setItem(personalInfoToken, JSON.stringify(newPersonInfos));
    return "success";
  } else {
    return "exists";
  }
};
