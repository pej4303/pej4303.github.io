---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 13일차 TIL + 문자열"
description: "99클럽 코테 스터디 13일차 TIL + 문자열"
date: "2025-04-16"
tags:
  - 99클럽
  - 코딩테스트준비
  - 개발자취업
  - 항해99
  - TIL
series: "99클럽 코테 스터디"
previewImage: 'how.png'
isPrivate: false
---

![99클럽 코테 스터디](/images/99_java.png)

## 1. 오늘의 학습 키워드
+ 문자열열
+ 문제 URL : https://www.acmicpc.net/problem/2156

## 2. 공부한 내용 본인의 언어로 정리하기
+ 시도1(맞음)
    + 접근 방법 
        + 대문자여부를 체크하여 대문자로 변환
    + 소스 코드
    ```java
    class Solution {
        public String solution(String s) {
            StringBuilder sb = new StringBuilder();
            char[] arr = s.toCharArray();
            boolean isUpper = true;  // 첫글자는 무조건 대문자여야 하니까 

            for (int i=0; i<arr.length; i++) {
                if (arr[i] == ' ') {
                    sb.append(arr[i]);
                    isUpper = true;
                } else {
                    if (isUpper) {
                        // 대문자로 변환
                        sb.append(Character.toUpperCase(arr[i]));
                    } else {
                        // 소문자로 변환
                        sb.append(Character.toLowerCase(arr[i]));
                    }
                    isUpper = false;
                }
            }

            return sb.toString();
        }
    }
    ```
## 3. 오늘의 회고
+ 문제 상황과 시도   
오늘의 문제는 쉬어서 별다른 문제가 없었다.

+ 해결 과정   
String보다 char타입이 더 속도가 빠르다고 생각이 들어서 char[] 타입으로 변경하였고 문자열 조작시 불변객체인 String을 그대로 사용하는 것보다 StringBuilder를 이용해서 최적화를 하였다.

+ 배운 점   
