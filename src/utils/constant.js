// router.js
const ROUTER_CHANGE_EVENT_NAME = 'route-change';
const POPSTATE_EVENT_NAME = 'popstate';

// event.js
const EDITOR_TITLE_CHANGE_EVENT_NAME = 'editor-title-change';
const DOCUMENT_DELETE_EVENT_NAME = 'document-change';

// api.js
const API_USER_NAME = 'minjeong';
const API_END_POINT = 'https://kdt.roto.codes';

// Error message
const STORAGE_SET_ERROR = '로컬스토리지에 데이터를 저장할 수 없습니다.';
const STORAGE_GET_ERROR = '로컬스토리지에서 데이터를 가져올 수 없습니다.';
const STORAGE_REMOVE_ERROR = '로컬스토리지에서 데이터를 삭제할 수 없습니다.';

export {
  ROUTER_CHANGE_EVENT_NAME,
  POPSTATE_EVENT_NAME,
  EDITOR_TITLE_CHANGE_EVENT_NAME,
  DOCUMENT_DELETE_EVENT_NAME,
  API_USER_NAME,
  API_END_POINT,
  STORAGE_SET_ERROR,
  STORAGE_GET_ERROR,
  STORAGE_REMOVE_ERROR,
};
