export default function NavButton({ $target, iconTag, text, onCreateRootDoc }) {
  const $navBtn = document.createElement('button');
  $navBtn.classList.add('nav-bar__btn__new-page');
  $target.appendChild($navBtn);

  this.render = () => {
    $navBtn.innerHTML = iconTag + text;
  };

  this.render();

  $navBtn.addEventListener('click', () => {
    onCreateRootDoc();
  });
}
