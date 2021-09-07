export default function DocumentList({
  $target,
  initialState,
  onClickDoc,
  onCreateSubDoc,
  onDeleteDoc,
}) {
  const $documentList = document.createElement('ul');
  $documentList.classList.add('document-list');
  $target.appendChild($documentList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.makeTreeTemplate = (documents) => {
    const string = [];
    documents.forEach((document) => {
      let { title } = document;
      const titleLen = document.title.length;
      const childLen = document.documents.length;
      if (titleLen === 0) {
        title = '제목 없음';
      }
      string.push(`
      <li data-id="${document.id}" class="document-list__item">
        <input type="checkbox" id="${document.id}">
        <label class="${childLen === 0 ? `lastTree` : ''}" for="${
        document.id
      }"></label>
        <p class="document-list__item__text">${
          titleLen > 16 ? `${document.title.substring(0, 15)}...` : title
        }</p>
        <div class="document-list__item__container">
        <button class="add-btn">+</button>
        <button class="delete-btn">-</button>
        </div>
      ${
        childLen > 0
          ? `<ul>${this.makeTreeTemplate(document.documents)}</ul>`
          : ''
      }
      </li>
      `);
    });
    return string.join('');
  };

  this.render = () => {
    const rootDocuments = this.state;
    $documentList.innerHTML = `
      <ul class="tree"><li><ul>
      <div class="document-list__page-name">개인 페이지</div>
      ${this.makeTreeTemplate(rootDocuments)}
      </ul></li></ul>`;
  };

  this.render();

  $documentList.addEventListener('click', (event) => {
    const $li = event.target.closest('li');
    const $span = event.target.closest('span');
    const { id } = $li.dataset;
    const [className] = event.target.classList;
    if (className) {
      switch (className) {
        case 'document-list__item__container':
          onClickDoc(id);
          break;
        case 'document-list__item__text':
          onClickDoc(id);
          break;
        case 'add-btn':
          onCreateSubDoc(id);
          break;
        case 'delete-btn':
          onDeleteDoc(id);
          break;
        case 'caret':
          if ($span) {
            $li.querySelector('.nested').classList.toggle('active');
            $span.classList.toggle('caret-down');
          }
          break;
        // no default
      }
    }
  });
}
