/* eslint-disable no-useless-escape */
export const removeMask = (value: string) => {
  return (value = value.replace(/\D/g, ""));
};

export const formattedCNPJ = (value: string | undefined) => {
  if (value) {
    value = removeMask(value);
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
    return value;
  } else return "";
};
