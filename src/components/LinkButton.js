import { RouterUtils } from '../utils/router.js';

export default function LinkButton({ $target, initialState }) {
  const $linkBtn = document.createElement('button');
  $target.appendChild($linkBtn);

  this.state = initialState;

  this.render = () => {
    const titleLen = this.state.title.length;
    if (titleLen === 0) {
      this.state.title = '제목 없음';
    } else if (titleLen > 10) {
      this.state.title = `${this.state.title.substring(0, 9)}...`;
    }
    $linkBtn.textContent = this.state.title;
  };

  this.render();

  $linkBtn.addEventListener('click', () => {
    RouterUtils.routerDispatcher(`/documents/${this.state.id}`);
  });
}
