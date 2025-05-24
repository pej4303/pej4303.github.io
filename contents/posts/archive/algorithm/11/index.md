---
title: "[프로그래머스] 기사단원의 무기 Java"
description: "기사단원의 무기 Java"
date: "2025-05-24"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/136798](https://school.programmers.co.kr/learn/courses/30/lessons/136798)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + 1부터 number까지 약수의 개수 구하기
    + number까지의 약수들 중 limit를 초과하는 값들은 power로 값 변경하여 합계 구하기
    + answer return
+ 소스 코드
    ```java
    class Solution {
        public int solution(int number, int limit, int power) {
            int answer = 0;
            // 1. 1부터 number까지 약수의 개수 구하기
            for (int i=1; i<=number; i++) {    
                int cnt = calcCnt(i);
                
                // 2.number까지의 약수들 중 limit를 초과하는 값들은 power로 값 변경하여 합계 구하기
                if (cnt > limit) {
                    answer += power;
                } else {
                    answer += cnt;
                }
            }
            
            // 3. answer return
            return answer;
        }
        
        private int calcCnt(int n) {
            int cnt = 0;
            
            for (int i=1; i*i<=n; i++) {
                if (n % i == 0) {
                    cnt++;
                    
                    // 중복 계산을 방지하기 위해서
                    if (i != n / i) {
                        cnt++;
                    }
                }
            }
            
            return cnt;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
1부터 number까지 각 숫자의 약수 개수를 구한 후 그 개수가 limit을 초과하면 power로 대체하여 누적합(answer)을 계산하는 방식으로 문제를 해결하고자 했다.

+ 🛠 해결 과정
약수 개수를 효율적으로 구하기 위해 제곱근까지만 순회하면서 중복 약수 계산을 방지하는 방식으로 calcCnt() 메서드를 구현했다.

+ ✅ 잘한 점
문제의 구현 로직 자체는 복잡하지 않아 구조를 빠르게 설계할 수 있었고 약수 개수를 구할 때 중복을 방지하는 최적화도 잘 적용했다.

+ ⚠ 개선할 점
초기 문제 해석을 잘못해 풀이 방향을 잡는 데 시간이 오래 걸렸고 이로 인해 제한 시간 30분 내에 문제를 해결하지 못했다. 앞으로는 문제를 꼼꼼히 읽고 요구사항을 명확히 이해한 후에 구현을 시작해야겠다.

## 참조