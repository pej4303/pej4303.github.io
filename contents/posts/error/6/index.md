---
title: "[JS] iframe 안에서 단축키 이벤트가 동작하지 않는 문제"
description: "[JS] iframe 안에서 단축키 이벤트가 동작하지 않는 문제"
date: "2025-07-27"
tags:
  - 해결
  - jQuery
  - iframe
series: 오류 모음집
previewImage: 'how.png'
isPrivate: false
---

## 1. 현상 

iframe을 이용해 화면을 구성하고 있는 상황에서 단축키를 눌러 특정 버튼을 동작시키려고 했으나  
**화면을 한 번 클릭한 뒤에만 단축키가 동작하는** 문제가 발생했다.

---

## 2. 원인

키보드 이벤트 자체는 잡히지만 **버튼 요소는 iframe 내부에 있기 때문에 이벤트를 받아도 버튼을 탐지하지 못하는** 상황이었다.  
즉, 현재 문서(document) 기준으로 버튼을 찾으려고 했기 때문에 iframe 내부 버튼에는 접근할 수 없었다.

---

## 3. 해결

현재 문서가 iframe이면 **iframe 내부에서 버튼을 찾고**   
그 외에는 현재 문서에서 버튼을 찾도록 분기 처리하였다.

### 🔧 개선된 코드
```javascript
// 기존 소스
...
if (e.ctrlKey && e.key === 'Enter') {
  e.preventDefault();
  const $btn = $('.search:visible');
  if ($btn.length > 0) {
    $btn.first().trigger('click');
  }
  return false;
}
...

// 변경된 소스
...
// 현재 활성화된 화면의 iframe 내부 문서 반환
function getActiveIframeDocument() {
  // 현재 활성화된 탭을 선택(is-active 로 식별)
  const $activeTab = $('.ib-tab-contents__item.is-active);
  const ifram = $activeTab.find('iframe')[0];
  // iframe이 존재하면 반환, 존재하지 않으면 null을 반환
  return iframe? iframe.contentWindow.document : null;
}

const iframeDoc = getActiveIframeDocument();
// iframe이 있으면 내부에서 없으면 메인 문서에서
const btnScope = iframeDoc || document;
if (e.ctrlKey && e.key === 'Enter') {
   const $btn = $(btnScope).find('.search:visible');
  if ($btn.length > 0) {
    $btn.first().trigger('click');
  }
}
...
```
+ 📚 참조
  + [iframe.contentWindow 설명 (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow)