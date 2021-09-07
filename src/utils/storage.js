import {
  STORAGE_SET_ERROR,
  STORAGE_GET_ERROR,
  STORAGE_REMOVE_ERROR,
} from './constant.js';

const storage = window.localStorage;

const setItem = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e, STORAGE_SET_ERROR);
  }
};

const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);

    if (!storedValue) {
      return defaultValue;
    }
    return JSON.parse(storedValue);
  } catch (e) {
    console.error(e, STORAGE_GET_ERROR);
    return defaultValue;
  }
};

const removeItem = (key) => {
  try {
    storage.removeItem(key);
  } catch (e) {
    console.error(e, STORAGE_REMOVE_ERROR);
  }
};

export const StorageUtils = {
  setItem,
  getItem,
  removeItem,
};
