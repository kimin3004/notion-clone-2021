import { ROUTER_CHANGE_EVENT_NAME, POPSTATE_EVENT_NAME } from './constant.js';

const routerDispatcher = (nextUrl, isReplace = false) => {
  window.dispatchEvent(
    new CustomEvent(ROUTER_CHANGE_EVENT_NAME, {
      detail: {
        nextUrl,
        isReplace,
      },
    })
  );
};

const initRouter = (onRoute) => {
  window.addEventListener(ROUTER_CHANGE_EVENT_NAME, (event) => {
    const { nextUrl, isReplace } = event.detail;

    if (nextUrl) {
      // onDelete시 isReplace 값을 추가하여 뒤로가기 시 오류방지
      if (isReplace) {
        window.history.replaceState(null, null, nextUrl);
      } else {
        window.history.pushState(null, null, nextUrl);
      }
      onRoute();
    }
  });

  // 뒤로가기 시에도 라우팅
  window.addEventListener(POPSTATE_EVENT_NAME, () => {
    onRoute();
  });
};

export const RouterUtils = {
  routerDispatcher,
  initRouter,
};
