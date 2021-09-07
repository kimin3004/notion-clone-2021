## 👩‍💻 요구 사항과 구현 내용 <!-- 기능을 Commit 별로 잘개 쪼개고, Commit 별로 설명해주세요 -->

## 기본 요구사항

바닐라 JS만을 이용해 노션을 클로닝합니다.
기본적인 레이아웃은 노션과 같으며, 스타일링, 컬러값 등은 원하는대로 커스텀합니다.

- [x] 글 단위를 Document라고 합니다. Document는 Document 여러개를 포함할 수 있습니다.
- [x] 화면 좌측에 Root Documents를 불러오는 API를 통해 루트 Documents를 렌더링합니다.
- [x] Root Document를 클릭하면 오른쪽 편집기 영역에 해당 Document의 Content를 렌더링합니다.
- [x] 해당 Root Document에 하위 Document가 있는 경우, 해당 Document 아래에 트리 형태로 렌더링 합니다.
- [x] Document Tree에서 각 Document 우측에는 + 버튼이 있습니다. 해당 버튼을 클릭하면, 클릭한 Document의 하위 Document로 새 Document를 생성하고 편집화면으로 넘깁니다.
- [x] 편집기에는 기본적으로 저장 버튼이 없습니다. Document Save API를 이용해 지속적으로 서버에 저장되도록 합니다.
- [x] History API를 이용해 SPA 형태로 만듭니다.
- [x] 루트 URL 접속 시엔 별다른 편집기 선택이 안 된 상태입니다.
- [x] /documents/{documentId} 로 접속시, 해당 Document 의 content를 불러와 편집기에 로딩합니다.

## 추가 구현 사항

- [x] 기본적으로 편집기는 textarea 기반으로 단순한 텍스트 편집기로 시작하되, 여력이 되면 div와 contentEditable을 조합해서 좀 더 Rich한 에디터를 만들어봅니다.
- 현재 맨 마지막 라인만 인식하므로, 문서 중간에 입력 시 변환되지 않습니다. 😂
- /1하고 space를 누르면 적용되는 방식입니다.

![notion1](https://user-images.githubusercontent.com/80511900/132088263-19a869ab-4f79-46f0-8846-9c2f423244ae.gif)

- [x] 편집기 최하단에는 현재 편집 중인 Document의 하위 Document 링크를 렌더링하도록 추가합니다.

![notion4](https://user-images.githubusercontent.com/80511900/132135510-5b97d86f-37ca-4706-b093-058e34f86295.gif)

- [ ] 편집기 내에서 다른 Document name을 적은 경우, 자동으로 해당 Document의 편집 페이지로 이동하는 링크를 거는 기능을 추가합니다.

## ISSUE

- [x] 우측 edit page 렌더 시 깜빡임 문제(해결)
      : route 시 editPage엘리먼트의 상위 page엘리먼트가 `page.innerHTML = '' ;`로 매번 초기화되며 생긴 현상
      => 해결법 / 문제가 발생하는 page엘리먼트가 하위 page엘리먼트를 붙이는 기능 외 하는 역할이 없어 삭제.
      대신 하위 editPage, homePage에 `page` class를 추가하여 css를 유지.

- [ ] 좌측 navigation 폴더 구조 상태 저장 문제

## ✅ PR 포인트 & 궁금한 점 <!-- 리뷰어 분들이 집중적으로 보셨으면 하는 내용을 적어주세요 -->

- 제 코드를 봐주시는 모든 분들 감사합니다! 😊
- 또한 이번 프로젝트를 하며 부족한 저에게 많은 도움을 주신 팀원분들 감사합니다 :-)
- 각 엘리먼트의 State들이 나누어져 있는데, 엘리먼트들이 늘어나며 파악 및 관리하기가 까다로워지네요..🤣
- API에서 받아오는 값 외의 커스텀 값을 state에 추가하고, state를 좀 더 정리된(?) 방식으로 다루는 방법에 대해 알아봐야 할 것 같습니다!
- 그 외에도 코드의 가독성이나 효율성, 컴포넌트 등을 잘 나누었는지 등등 자유롭게 피드백 주시면 감사하겠습니다 :)
