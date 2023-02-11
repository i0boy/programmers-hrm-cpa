import new_data from "../data/new_data.js";
const personalInfoToken = "personalInfo";
/**
 * @typedef {{
    name: string;
    email: string;
    nickname: string;
    role?: string;
    mbti?: string; }} PersonalInfo
 */

/**@type{() => Promise<void>} */
export const setPersonalInfo = async () => {
  const data = await Promise.resolve(new_data);
  console.log(data);
  if (!localStorage.getItem(personalInfoToken)) {
    localStorage.setItem(personalInfoToken, JSON.stringify(data));
  }
};

/**@type{() => PersonalInfo[]} */
export const getPersonalInfo = () => {
  const data = JSON.parse(localStorage.getItem(personalInfoToken));
  return data;
};
