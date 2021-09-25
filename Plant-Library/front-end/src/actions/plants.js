import {
    CREATE_PLANT,
    RETRIEVE_PLANTS,
    UPDATE_PLANT,
    DELETE_PLANT,
    DELETE_ALL_PLANTS
  } from "./types";
  
  import PlantDataService from "../services/plant.service";
  
  export const createPlant = (title, climate, description) => async (dispatch) => {
    try {
      const res = await PlantDataService.create({ title, climate, description });
  
      dispatch({
        type: CREATE_PLANT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrievePlants = () => async (dispatch) => {
    try {
      const res = await PlantDataService.getAll();
  
      dispatch({
        type: RETRIEVE_PLANTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updatePlant = (id, data) => async (dispatch) => {
    try {
      const res = await PlantDataService.update(id, data);
  
      dispatch({
        type: UPDATE_PLANT,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deletePlant = (id) => async (dispatch) => {
    try {
      await PlantDataService.delete(id);
  
      dispatch({
        type: DELETE_PLANT,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllPlants = () => async (dispatch) => {
    try {
      const res = await PlantDataService.deleteAll();
  
      dispatch({
        type: DELETE_ALL_PLANTS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const findPlantsByTitle = (title) => async (dispatch) => {
    try {
      const res = await PlantDataService.findByTitle(title);
  
      dispatch({
        type: RETRIEVE_PLANTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };