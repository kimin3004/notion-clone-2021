import Editor from '../components/Editor.js';
import EditorLink from '../components/EditorLink.js';
import { request } from '../utils/api.js';
import { StorageUtils } from '../utils/storage.js';
import { EventUtils } from '../utils/event.js';
import { RouterUtils } from '../utils/router.js';

export default function EditPage({ $target, initialState }) {
  const $editPage = document.createElement('div');
  $editPage.classList.add('edit-page');
  $editPage.classList.add('page');

  this.state = initialState;

  let KeyLocalDocument = `temp-document-${this.state.documentId}`;
  // 통신 지연 시 로컬 값 이용
  const localSavedDocument = StorageUtils.getItem(KeyLocalDocument, {
    title: '',
    content: '',
  });

  let timer = null;

  const editorDocLink = new EditorLink({
    $target: $editPage,
  });

  const editor = new Editor({
    $target: $editPage,
    initialState: localSavedDocument,

    onEditing: async (document) => {
      // Debounce : 1초
      if (timer !== null) {
        clearTimeout(timer);
      }

      timer = setTimeout(async () => {
        // 로컬 KEY ID 업데이트
        KeyLocalDocument = `temp-document-${this.state.documentId}`;

        // 로컬에 저장
        StorageUtils.setItem(KeyLocalDocument, {
          ...document,
          tempSaveDate: new Date(),
        });

        await request(`/documents/${document.id}`, {
          method: 'PUT',
          body: JSON.stringify(document),
        });

        // 로컬에서 삭제
        StorageUtils.removeItem(KeyLocalDocument);

        // customEvent dispatcher
        EventUtils.titleDispatcher();
      }, 200);
    },
  });

  const fetchDocument = async () => {
    const { documentId } = this.state;
    if (documentId) {
      const document = await request(`/documents/${documentId}`).catch(() =>
        RouterUtils.routerDispatcher('/')
      );
      editor.setState(document);
      editor.render();
      // 현재 document 하위 document 수 만큼 링크버튼 렌더
      editorDocLink.makeSubLinks(document);

      this.render();
    }
  };

  this.setState = async (nextState) => {
    this.state = nextState;

    fetchDocument();
  };

  this.render = () => {
    $target.appendChild($editPage);
  };
}
