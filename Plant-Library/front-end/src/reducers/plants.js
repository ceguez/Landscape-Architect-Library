import {
    CREATE_PLANT,
    RETRIEVE_PLANTS,
    UPDATE_PLANT,
    DELETE_PLANT,
    DELETE_ALL_PLANTS,
  } from "../actions/types";
  
  const initialState = [];
  
  function plantReducer(plants = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_PLANT:
        return [...plants, payload];
  
      case RETRIEVE_PLANTS:
        return payload;
  
      case UPDATE_PLANT:
        return plants.map((plant) => {
          if (plant.id === payload.id) {
            return {
              ...plant,
              ...payload,
            };
          } else {
            return plant;
          }
        });
  
      case DELETE_PLANT:
        return plants.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_PLANTS:
        return [];
  
      default:
        return plants;
    }
  };
  
  export default plantReducer;