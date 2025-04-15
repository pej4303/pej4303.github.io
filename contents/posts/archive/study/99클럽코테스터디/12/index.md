---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 12일차 TIL + 동적계획법"
description: "99클럽 코테 스터디 12일차 TIL + 동적계획법"
date: "2025-04-15"
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
+ 문제 URL : https://www.acmicpc.net/problem/2156

## 2. 공부한 내용 본인의 언어로 정리하기
+ 시도1
    + 접근 방법 
        + 배열을 순회하면서 큰 수끼리 더해보며 어떨까?
    + 문제점
        + **연속적으로 포도잔을 마실수 없으므로 문제에 부합하지 않는다.**
+ 시도2
    + 접근 방법
        + 모든 경우를 탐색하면서 연속된 3잔을 막는 방식 => 완전탐색
    + 문제점
        + 완전탐색의 최악의 경우 시간복잡도는 O(2^n)으로 보고 n이 20만 넘어도 너무 커진다.
        + `2^20 = 1,048,576`
        + 그래서 시간 초과가 발생할 가능성이 높다.
+ 시도3
    + 접근 방법
        + 다이나믹 프로그래밍 알고리즘 Bottom-Up 방식 이용하였다.
    + 소스 코드
    ```java
    import java.io.*;
    public class Main {
        public static void main(String[] args) throws IOException {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int n = Integer.parseInt(br.readLine());

            int[] arr = new int[n + 1];
            int[] dp = new int[n + 1];

            for (int i=1; i<=n; i++) {
                arr[i] = Integer.parseInt(br.readLine());
            }

            // 기본 초기값 설정 (n이 1, 2일 수도 있어서 따로 처리)
            dp[1] = arr[1];
            if (n >= 2) {
                dp[2] = arr[1] + arr[2];
            }

            // DP 점화식 적용
            for (int i = 3; i <= n; i++) {
                dp[i] = Math.max(dp[i - 1], 
                        Math.max(dp[i - 2] + arr[i], 
                                dp[i - 3] + arr[i - 1] + arr[i]));
            }

            // 출력
            System.out.println(dp[n]);
        }
    }
    ```
## 3. 오늘의 회고
+ 문제 상황과 시도   
문제를 다양한 각도에서 접근해보며 여러 가지 시도를 했고 기본 로직 구성에는 성공했으나 결론적으로 DP를 제대로 구현하지 못했다.

+ 해결 과정   
문제를 단순 반복문과 조건문으로 해결하려 했으나 시간 복잡도에서 문제가 발생했다. 이후 메모이제이션과 점화식을 고려하며 DP 방식으로 전환하려 했지만 상태 정의와 배열 설계에서 미흡함이 있었다.
결국 참고 자료를 통해 DP 구현 방식을 다시 점검하고 문제 유형에 따라 어떻게 상태를 나누고 저장할지 구체화하는 연습이 필요함을 느꼈다.

+ 배운 점   
문제를 풀때마다 느끼는것인데 유형별로 한번씩 쭉 풀어볼 필요가 있을것같다. 문제를 읽고 어떤 알고리즘을 쓰면 좋을지 감을 잡는게 먼저 필요할것같다.