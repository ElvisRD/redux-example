const aumento = () => {
  return {
    type: "aumentar",
    payload: 1,
  };
};

const disminuye = () => {
  return {
    type: "disminuir",
    payload: -1,
  };
};

export { aumento, disminuye };
