export default function Editor({ $target, initialState, onEditing }) {
  const $editor = document.createElement('div');
  $editor.classList.add('edit-page__editor');

  this.template = `
  <input type="text" name="title" maxlength="30" placeholder="제목 없음"/>
  <div name="content" contenteditable="true" id="content-editor" spellcheck = "false"></div>
  `;

  $target.appendChild($editor);
  $editor.innerHTML = this.template;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    // this.render()
  };

  this.render = () => {
    $editor.querySelector('[name=title]').value = this.state.title;
    $editor.querySelector('[name=content]').innerHTML = this.state.content;
  };

  this.render();

  $editor.querySelector('[name=title]').addEventListener('input', (event) => {
    const nextState = {
      ...this.state,
      title: event.target.value,
    };
    this.setState(nextState);
    onEditing(this.state);
  });

  $editor.querySelector('[name=content]').addEventListener('keyup', (event) => {
    const $contentEditor = document.getElementById('content-editor');
    const lineStack = $contentEditor.innerHTML
      .split(/<.*?>/g)
      .filter((el) => !!el && el !== '\n'); // 줄별로 나누기
    const lastLine = lineStack[lineStack.length - 1];

    function addTag(tagString, length) {
      const lastWord = lineStack.pop().substring(length);
      const $tag = document.createElement(tagString);
      $contentEditor.appendChild($tag);
      $tag.innerHTML = lastWord;
      $contentEditor.removeChild($contentEditor.childNodes[lineStack.length]);
    }

    if (lastLine) {
      if (lastLine.match(/\/1./)) {
        addTag('h1', 2);
      } else if (lastLine.match(/\/2./)) {
        addTag('h2', 2);
      } else if (lastLine.match(/\/3./)) {
        addTag('h3', 2);
      } else if (lastLine.match(/\/b./)) {
        addTag('b', 2);
      } else if (lastLine.match(/\/i./)) {
        addTag('i', 2);
      } else if (lastLine.match(/---./)) {
        addTag('hr', 3);
      }
    }

    const nextState = {
      ...this.state,
      content: event.target.innerHTML,
    };
    this.setState(nextState);
    onEditing(this.state);
  });
}
