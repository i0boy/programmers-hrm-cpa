export const createUrlChangeEvent = ({ detail: { href } }) => {
  return new CustomEvent("urlchange", { detail: { href } });
};
