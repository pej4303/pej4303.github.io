---
title: "[작심큰일] 작심큰일 6일차 TIL"
description: "[작심큰일] 작심큰일 6일차 TIL"
date: "2025-08-11"
tags:
  - 작심큰일
  - 코딩테스트준비
  - 팀스파르타
  - TIL
series: "작심큰일 챌린지 1기"
previewImage: 'how.png'
isPrivate: false
---

<!-- ![작심큰일 챌린지](/images/99_java.png) -->


## 1. 📝 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/12951](https://school.programmers.co.kr/learn/courses/30/lessons/12951)
+ 난이도 : 프로그래머스 레벨2
+ 소요시간 : 10분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 입력 문자열을 char 배열 소문자로 변경
> 2. 배열을 순회하면서 첫번째 글자이거나 이전 글자가 공백 한 칸이면 대문자로 변환
> 3. 출력

+ 소스 코드
    ```java
    class Solution {
        public String solution(String s) {
            StringBuilder sb = new StringBuilder();
            // 1. 소문자로 변경
            char[] arr = s.toLowerCase().toCharArray();
            // char 배열을 순회하면서
            for (int i=0; i<arr.length; i++) {
                // 2. 첫번째 글자이거나 이전 글자가 공백 한 칸이면 대문자로 변환
                if (i == 0 || arr[i-1] == ' ') {
                    sb.append(Character.toUpperCase(arr[i]));
                } else {
                    sb.append(arr[i]);
                }
            }
            // 4. 출력
            return sb.toString();
        }
    }
    ```

## 3. 🔍 문제 회고
이 문제는 비교적 단순한 문자열 처리 문제였다. 요구사항대로 단계별로 차근차근 구현하면 쉽게 해결할 수 있었다.   

먼저 문자열을 소문자로 다 변경한 다음에 첫 번째 글자이거나 이전 글자가 공백 한 칸인 경우에만 대문자로 변환해줬다. 그리고 String이 불변 객체라는 점을 고려해 StringBuilder를 사용해 메모리 사용 효율을 높였다. 또한 문자열을 char 배열로 변환해 순회함으로써 처리 속도도 개선했다. 

## 📚 참조
