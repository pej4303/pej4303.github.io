---
title: "[프로그래머스] 햄버거 만들기 Java"
description: "햄버거 만들기 Java"
date: "2025-06-05"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/133502](https://school.programmers.co.kr/learn/courses/30/lessons/133502)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + ingredient 배열을 문자열(str)로 변환
    + `1231`로 치환이 될때마다 answer 증가 - while문 이용
    + answer 반환
+ 문제점
    + 테스트 케이스는 통과 하였으나 제출까지는 통과하지 못함
    + 문자열 치환이 비효율적이다.
        + String.replace("1231", "")는 내부적으로 문자열 전체를 한 번 순회한다. → O(N)
        + "1231"이 많다면 위 과정을 여러 번 반복한다. → O(N * "1231" 등장 횟수)
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        public int solution(int[] ingredient) {
            int answer = 0;
            
            // 1. ingredient 배열을 문자열로 변환
            StringBuilder sb = new StringBuilder();
            for (int n : ingredient) {
                sb.append(String.valueOf(n));
            }
            
            // System.out.println( sb );
            
            String str = sb.toString();
            
            // 2. 1231로 치환이 될때마다 answer 증가 - while문 이용
            while (true) {
                if (str.indexOf("1231") == -1) {
                    break;
                }
                str = str.replace("1231", "");
                answer++;
            }
            
            return answer;
        }
    }
    ```
### 시도2
+ 접근 방법
    + 스택 생성
    + ingredient 배열을 순회
        + 각 원소를 넣으면서 스택의 마지막 4개의 값이 1231인지 체크하여 맞으면 pop()을 4번 수행, answer 증가
    + answer 반환
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        public int solution(int[] ingredient) {
            int answer = 0;
            
            // 1. 스택 생성
            Stack<Integer> stack = new Stack<>();
            
            // 2. ingredient 배열을 순회
            for (int num : ingredient) {
                // 각 원소를 넣으면서
                stack.push(num);
                
                int size = stack.size();
                if (stack.size() >= 4) {
                // 스택의 마지막 4개의 값이 1231인지 체크하여 맞으면
                if ( stack.get(size-4) == 1 &&
                        stack.get(size-3) == 2 &&
                        stack.get(size-2) == 3 &&
                        stack.get(size-1) == 1 ) {
                    
                    // pop()을 4번 수행
                    for (int i=0; i<4; i++) {
                        stack.pop();
                    }
                    // answer 증가
                    answer++;
                }
                }
            }
            
            // 3. answer 반환
            return answer;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
문제를 읽고 "1231" 패턴을 문자열로 인식해 replace()로 제거하는 방식이 떠올랐다. 효율성 면에서는 불리할 수 있다는 점을 간과했다. 테스트 케이스에서는 통과했지만 실제 제출에서는 시간 초과 또는 메모리 초과가 발생했다.

+ 🛠 해결 과정
문제의 핵심은 재료 순서가 "1231"인 경우를 빠르게 탐지하고 제거하는 것이다. 문자열 치환 방식이 비효율적인 이유는 replace()가 내부적으로 전체 문자열을 순회하고 새로운 문자열을 매번 생성하기 때문이다. 이를 개선하기 위해 스택을 이용한 풀이로 전환하였다. 스택을 이용하면 O(N) 시간복잡도로 모든 재료를 한 번만 순회하면서 햄버거를 만들 수 있다.

+ ✅ 잘한 점
문자열 방식과 스택 방식 두 가지 접근을 모두 시도했고, 제한 시간 내에 문제를 해결하며 효율적인 방식으로 전환한 점은 긍정적이었다.

+ ⚠ 개선할 점
문제에서 요구하는 "효율성" 조건을 처음부터 좀 더 면밀히 고려했어야 했다.

## 참조