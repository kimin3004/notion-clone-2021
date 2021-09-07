import { EDITOR_TITLE_CHANGE_EVENT_NAME } from './constant.js';

const titleDispatcher = () => {
  window.dispatchEvent(new CustomEvent(EDITOR_TITLE_CHANGE_EVENT_NAME));
};

const titleEventListener = (onFetch) => {
  window.addEventListener(EDITOR_TITLE_CHANGE_EVENT_NAME, () => {
    onFetch();
  });
};

export const EventUtils = {
  titleDispatcher,
  titleEventListener,
};
