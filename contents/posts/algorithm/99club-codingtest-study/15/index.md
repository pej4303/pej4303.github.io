---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 15일차 TIL + 동적계획법"
description: "99클럽 코테 스터디 15일차 TIL + 동적계획법"
date: "2025-04-20"
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
+ 동적계획법
+ 문제 URL : https://www.acmicpc.net/problem/17271

## 2. 공부한 내용 본인의 언어로 정리하기
+ 시도1
    + 접근 방법 
        + `n`이 10000 이하의 자연수이니까 완전탐색으로 하면 시간초과가 날 수 있음
        + n분 동안의 모든 조합을 찾는 방법으로 풀어야겠다고 생각했음
    + 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        public static void main(String[] args) throws Exception {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            StringTokenizer st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());  // 총 싸움시간
            int m = Integer.parseInt(st.nextToken());  // B스킬 시전 시간

            int mod = 1_000_000_007;

            int[] dp = new int[n + 1];
            dp[0] = 1;

            for (int i = 1; i <= n; i++) {
                // 스킬 A (1분) 사용: 이전 시간(i-1분)에 A 하나 붙이면 i분 가능
                dp[i] = dp[i - 1];
                // 스킬 B (m분) 사용: i가 m 이상일 때만 가능
                // 이전 시간(i - m분)에 B 하나 붙이면 i분 가능
                if (i >= m) {
                    dp[i] = (dp[i] + dp[i - m]) % mod;
                }
            }

            // 출력
            System.out.println(dp[n]);
        }
    }
    ```
## 3. 오늘의 회고
+ 문제 상황과 시도   
문제를 읽고, 처음에는 n분 동안의 모든 경우의 수를 찾아야겠다고 판단했다.

+ 해결 과정   
처음에는 동적 계획법 문제라는 생각을 하지 못하고 접근하였다.

+ 배운 점   
최근 여러 문제에서 동적 계획법 유형이 반복해서 등장하고 있지만, 아직 구현에 익숙하지 않다. DP가 가장 취약한 부분이라는 점을 다시금 느꼈고, 보다 집중적으로 연습할 필요가 있음을 깨달았다.