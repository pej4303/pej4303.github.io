---
title: "[프로그래머스] 올바른 괄호 Java"
description: "올바른 괄호 Java"
date: "2025-06-04"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/12909](https://school.programmers.co.kr/learn/courses/30/lessons/12909)
+ 난이도 : 레벨2

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + 스택 생성
    + 문자열 `s`를 char 배열로 변환해 순회 - for문 이용
    + 로직 처리 
        + 스택이 비어있지 않고 현재 문자가 `')'`이고 스택의 top이 `'('`이면 pop()
        + 그 외의 경우는 push()
    + 스택이 비어 있으면 true 아니면 false를 반환
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        boolean solution(String s) {
            boolean answer = true;
            
            // 1. 스택 생성
            Stack<Character> stack = new Stack<>();
            // 2. 문자열 `s`를 char 배열로 변환해 순회 - for문 이용
            char[] arr = s.toCharArray();
            for (int i=0; i<arr.length; i++) {
                // System.out.println(c);
                
                // 3. 로직 처리
                if (!stack.isEmpty() && stack.peek() == '(' && arr[i] == ')') {
                    // 스택이 비어있지 않고 현재 문자가 `')'`이고 스택의 top이 `'('`이면 pop()
                    stack.pop();
                } else {
                    // 그 외의 경우는 push()
                    stack.push(arr[i]);
                }
                
            }
            
            // System.out.println("isEmpty = " + stack.isEmpty());
            
            // 4. 스택이 비어 있으면 true 아니면 false를 반환
            answer = stack.isEmpty();
            
            return answer;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
처음 문제를 읽고 나서 스택으로 접근하는 방식이 자연스럽게 떠올랐다. 괄호의 짝을 맞추는 전형적인 문제였기 때문이다.

+ 🛠 해결 과정
처음에는 if-else 구조를 잘못 사용해서 결과가 잘못 나왔다. push()는 괄호의 짝이 맞지 않을 때 반드시 호출되어야 하는데 조건문 안에서만 처리하다 보니 예외가 발생했던 것이다. 나누었던 조건문을 하나로 합쳤더니 테스트 케이스를 모두 통과하였다.

+ ✅ 잘한 점
스택 자료구조를 이용해서 제한시간 안에 문제를 풀었다.

+ ⚠ 개선할 점
조건문 로직을 더 명확히 구현하는 연습이 필요하다.

## 참조