export const addDrug = (name) => ({
  type: "ADD_DRUG_NAME",
  name,
});

export const methodDrug = (name) => ({
  type: "ADD_METHOD_DRUG",
  name,
});

export const timeOfTheDay = (time) => ({
  type: "ADD_TIME_OF_THE_DAY",
  time,
});

export const dateStart = (date) => ({
  type: "ADD_START_DAY",
  date,
});

export const dateEnd = (date) => ({
  type: "ADD_END_DAY",
  date,
});

export const how = (text) => ({
  type: "ADD_HOW",
  text,
});

export const quantity1 = (quantity) => ({
  type: "ADD_QUANTITY_1",
  quantity,
});

export const quantity2 = (quantity) => ({
  type: "ADD_QUANTITY_2",
  quantity,
});

export const quantity3 = (quantity) => ({
  type: "ADD_QUANTITY_3",
  quantity,
});
