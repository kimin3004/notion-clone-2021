export default function Header({ $target }) {
  const $header = document.createElement('div');
  $header.classList.add('header');
  $target.appendChild($header);

  this.template = `
    <div class="header-notion">
      <img src="/src/img/profile.png" alt="notion-profile" class="header-notion__profile">
      <h2 class="header-notion__text">
      민정의 <strong>Notion</strong>
      </h2><span class="material-icons">unfold_more</span>
    </div>

    <ul class="header-list">
      <li class="header-list__item">
        <span class="material-icons">search</span>
        빠른 검색
      </li>
      <li class="header-list__item">
        <span class="material-icons">schedule</span>
        모든 업데이트
      </li>
      <li class="header-list__item">
        <span class="material-icons">settings</span>
        설정과 멤버
      </li>
    </ul>
  `;

  this.render = () => {
    $header.innerHTML = this.template;
  };
  this.render();
}
