---
title: "[프로그래머스] [1차] 비밀지도 Java"
description: "[1차] 비밀지도 Java"
date: "2025-06-09"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/17681](https://school.programmers.co.kr/learn/courses/30/lessons/17681)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + 문자열 연산을 많이 해야 하니 StringBuilder 사용
    + arr1, arr2를 순회
        + 각 항목을 이진수로 변환 - Integer.toBinaryString
        + 각 항목에 '1'이 하나라도 있으면 '#', 둘다 '0'이면 공백으로 표시
    + answer 반환
+ 소스 코드
    ```java
    class Solution {
        public String[] solution(int n, int[] arr1, int[] arr2) {
            String[] answer = new String[n];
            
            for (int i=0; i<arr1.length; i++) {
                // - 각 항목을 이진수로 변환 - Integer.toBinaryString
                String tmpNum1 = String.format("%" + n + "s", Integer.toBinaryString(arr1[i])).replace(' ', '0');
                String tmpNum2 = String.format("%" + n + "s", Integer.toBinaryString(arr2[i])).replace(' ', '0');
                // System.out.println( tmpNum );
                
                char[] c1 = tmpNum1.toCharArray();
                char[] c2 = tmpNum2.toCharArray();
                
                // System.out.println( createStr(c1, c2) );
                answer[i] = createStr(c1, c2);
                
            }
            
            return answer;
        }
        
        private String createStr(char[] c1, char[] c2) {
            StringBuilder sb = new StringBuilder();
            
            for (int i=0; i<c1.length; i++) {
                // 각 항목에 '1'이 하나라도 있으면 '#', 둘다 '0'이면 공백으로 표시
                if ( c1[i] == '0' && c2[i] == '0' ) {
                    sb.append(" ");
                } else {
                    sb.append("#");
                }
            }
            
            return sb.toString();
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
문제를 읽고 각 항목값을 비교하여 하나라도 1이면 '#', 둘 다 0이면 공백 ' '으로 표시하면 되겠다는 아이디어가 떠올랐다. 예제를 보며 예상한 방식이 정답과 일치하는지 확인했고 해당 흐름대로 구현하기로 결정했다.

+ 🛠 해결 과정
arr1, arr2 배열을 순회하며 각 요소를 십진수에서 이진수로 변환하였다. 그 후 n자리로 자릿수를 맞춘 이진수 문자열을 char[]로 비교하여 각 자릿수에서 두 값이 모두 '0'이면 공백, 그렇지 않으면 '#'을 출력하도록 처리했다.

+ ✅ 잘한 점
제한 시간 30분 내에 문제를 정확히 해결했다. 예전에는 이 문제를 보고 구현 방법이 떠오르지 않았는데 이번에는 전체 흐름을 파악하고 스스로 해결할 수 있었다는 점에서 성장을 느낄 수 있었다.

+ ⚠ 개선할 점
십진수를 이진수로 변환하는 메소드(Integer.toBinaryString)가 바로 떠오르지 않아 검색을 통해 확인했다. 변환 후 이진수의 자릿수가 n보다 짧을 경우 앞에 0을 채우는 처리가 처음엔 다소 헷갈렸다.
추후 진법 변환이나 문자열 포맷팅 관련 문제에서 빠르게 대응할 수 있도록 관련 메서드들을 더 익숙하게 익힐 필요가 있다.

## 참조