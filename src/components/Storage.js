export const setPersonalInfo = async () => {
  const response = await fetch(
    "https://pr-0658a688646a585a1.programmers.co.kr:49226/web/src/data/new_data.json"
  );
  const data = await response.json();
  console.log(data);
  if (!localStorage.getItem("personalInfo")) {
    localStorage.setItem("personalInfo", data);
  }
};
