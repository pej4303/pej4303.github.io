---
title: "[오류] 팝업 여러개 띄울때 화면 reload 발생"
description: "팝업 여러개 띄울때 화면 reload 발생"
date: "2024-08-25"
tags:
  - Error
  - Web
series: "오류 모음집"
previewImage: 'how.png'
isPrivate: false
---

## 1. 현상 
A팝업 -> B팝업 -> C팝업으로 호출하는 경우 B팝업에서만 팝업 호출 시 해당 화면이 reload 되는 현상이 발생했다.

## 2. 원인
```html
<form>
    <button onclick="test();"></button>
</form>
```
**form 태그 안에  button 태그가 1개만 있는 경우에 onclick() 이벤트와 동시에 submit()도 같이** 동작된다. 그래서 발생한 오류였다.

## 3. 해결
+ 방법1)
```html
<form id="testForm" method="post" target="iframe1">
    <iframe id="iframe1" name="iframe1" style="display:none"></iframe>
</form>
```
+ 방법2)
```html
<form id="testForm" method="post" target="iframe1">
    <button type="button" onclick="test();"></button>
</form>
```
이런 방법 말고도 검색해보면 다른 방법이 많이 있지만 나의 경우에는 이 2가지 방법으로 했을 때 오류가 발생하지 않았다.   

button 태그에 대해서 좀 더 알아보다가 재미난 글을 발견하였다.   
👉🏻[버튼에 타입을 쓰는 이유 (button type='button')](https://nykim.work/96 "버튼에 타입을 쓰는 이유 (button type='button')")

+ 참조
    + https://nykim.work/96