---
title: "[오류] https 도메인인데 request.isSecure() return false인 경우"
description: "https 도메인인데 request.isSecure() return false인 경우"
date: "2024-08-25"
tags:
  - Error
  - Web
series: 오류 모음집
previewImage: 'how.png'
isPrivate: false
---

## 1. 현상 
`request.isSecure()` 메소드를 이용해서 js를 분기처리 하는데 SSL 적용이 된 운영서버에서 http 리소스가 로드되어서 에러가 발생하였다.
```
<%
   if( !request.isSecure() ) {
%>
	<!-- http -->
<%
    } else {
%>
	<!-- https -->
<%
    }
%>
```

## 2. 원인
web서버에서 was서버를 호출할때는 http 통신이기 때문에 isSecure() 메소드에서 false가 나온 것이다.

## 3. 해결
+ 방법1) 
```
request.getHeader("x-forwarded-proto")
```
+ 방법2) 
```
request.getRequestURL().indexOf("http://") != -1
```
위와 같이 2가지 방법이 있는데 처음에는 x-forwarded-proto를 이용해서 하였으나 로드밸런서가 없는 로컬과 개발에서는 null로 나와서 방법 2로 변경하였다.

> x-forwarded-proto 
> + 클라이언트가 로드밸런서에 접속할 때 사용한 프토토콜을 식별하는 표준 헤더

+ 참조
    + https://zetawiki.com/wiki/X-Forwarded-Proto
