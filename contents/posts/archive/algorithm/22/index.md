---
title: "[프로그래머스] [PCCE 기출문제] 9번 / 지폐 접기 Java"
description: "[PCCE 기출문제] 9번 / 지폐 접기 Java"
date: "2025-06-10"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/340199](https://school.programmers.co.kr/learn/courses/30/lessons/340199)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + minBill > minWallet 이거나 maxBill > maxWallet인 동안만 while문 반복
    + bill[0]과 bill[1]를 비교하여 큰 값을 2로 나누고 나머지를 버림
    + minBill, maxBill 값 갱신
    + answer 값 증가
    + answer 반환
+ 소스 코드
    ```java
    class Solution {
        public int solution(int[] wallet, int[] bill) {
            int answer = 0;
        
            int minBill = Math.min(bill[0], bill[1]);
            int maxBill = Math.max(bill[0], bill[1]);
            int minWallet = Math.min(wallet[0], wallet[1]);
            int maxWallet = Math.max(wallet[0], wallet[1]);
            
            // 1. 반복문을 이용해 bill의 작은 값이 wallet의 작은 값 보다 크거나 bill의 큰 값이 wallet의 큰 값 보다 큰 동안 아래 과정을 반복합니다.
            while (minBill > minWallet || maxBill > maxWallet) {
                if (bill[0] > bill[1]) {
                    // 2-1. bill[0]이 bill[1]보다 크다면 bill[0]을 2로 나누고 나머지는 버립니다.
                    bill[0] /= 2;
                } else {
                    // 2-2. 그렇지 않다면 bill[1]을 2로 나누고 나머지는 버립니다.    
                    bill[1] /= 2;
                }
                // 최소값, 최대값 갱신
                minBill = Math.min(bill[0], bill[1]);
                maxBill = Math.max(bill[0], bill[1]);
                
                // 2-3. answer을 1 증가시킵니다.
                answer++;
                
            }
            return answer;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
문제 지문에 구현 방식이 친절하게 설명되어 있어 그대로 따라가며 구현하기만 하면 되는 문제였다.

+ 🛠 해결 과정
반복문을 이용해 bill의 작은 값이 wallet의 작은 값 보다 크거나 bill의 큰 값이 wallet의 큰 값 보다 큰 동안 과정을 반복하면 된다. bill[0]이 bill[1]보다 크다면 bill[0]을 2로 나누고 그렇지 않다면 bill[1]을 2로 나누고 나머지는 버린다. 그리고 bill의 작은 값, bill의 큰 값을 갱신해주고 answer 값을 증가시킨다.

+ ✅ 잘한 점
제한 시간 30분 내에 문제를 정확히 해결했다.

+ ⚠ 개선할 점
처음에 "나머지를 버린다"는 표현을 잘못 이해해서 Math.ceil()을 사용하는 실수를 했다. 하지만 정수형 나눗셈에서는 소수점 이하가 자동으로 버려지므로 단순히 /= 2만 해주면 된다. 기본적인 연산 동작에 대한 이해를 다시 한번 상기하게 된 계기였다.

## 참조