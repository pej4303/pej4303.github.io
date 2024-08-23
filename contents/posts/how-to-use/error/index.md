---
title: "[오류] 자동으로 도메인에 https가 붙는 경우"
description: "자동으로 도메인에 https가 붙는 경우"
date: "2024-08-23"
tags:
  - Error
  - Web
series: "오류 모음집"
---

## 1. 현상 
개발서버 https 적용으로 아래와 같이 http 요청 블락 에러가 발생하였다.
```
This request has been blocked; the content must be served over HTTPS.
```
그래서 아래의 메타 태그를 추가해 줬다. 
```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```
하지만 개발서버 https 적용을 해제하면서부터 화면 접속시 자동으로 `https://` 로 붙어서 js, css를 읽는 경우가 발생하였다.

## 2. 원인
```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```
https때문에 추가했던 메타 태그의 문제로, content-security-policy를 설정할 경우 자동으로 https로 호출해 주는 것이었다. 
```
The HTTP Content-Security-Policy (CSP) upgrade-insecure-requests directive instructs user agents to treat all of a site's insecure URLs (those served over HTTP) as though they have been replaced with secure URLs (those served over HTTPS).
HTTP Content-Security-Policy(CSP) upgrade-insecure-requests
```

## 3. 해결
해당 태그를 주석처리 하면 현상은 해결되지만, 개발서버에 https 적용 시 http 요청 블락 에러를 이 방법 말고 다른 방법으로 해야 될 것 같다. 로컬은 http인데 개발서버는 https인 경우에는 이 메타태그를 사용하는 것은 좋은 방법이 아닌 것 같다.

+ 참조
  + https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
