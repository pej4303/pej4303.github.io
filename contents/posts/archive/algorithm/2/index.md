---
title: "[BOJ] 백준 11053 가장 긴 증가하는 부분 수열 Java"
description: "백준 11053 가장 긴 증가하는 부분 수열 Java"
date: "2025-04-26"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : https://www.acmicpc.net/problem/11053
+ 난이도 : 실버2 
+ 문제 내용 : 가장 긴 증가하는 부분 수열의 길이를 구하는 문제이다.

## 2. 내 풀이 방법
+ 시도1
    + 접근 방법
        + TreeSet에 이용해서 중복제거 + 정렬을 하였다.
    + 문제점
        + TreeSet에 넣어서 중복제거 + 정렬하고 input.size 를 출력하고 있는데
          이건 서로 다른 수의 개수를 구하는 것이지 문제의 핵심인 **가장 긴 증가하는 부분 수열**을 구하게 아니다.
    + 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        public static void main(String[] args) throws IOException {
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            int n = Integer.parseInt(br.readLine());
            String[] tmp = br.readLine().split(" ");

            // 2. 구현
            // TreeSet : 중복제거 및 자동정렬이 된다.
            Set<Integer> input = new TreeSet<>();
            for (int i=0; i<n; i++) {
                input.add(Integer.parseInt(tmp[i]));
            }

            // System.out.println(input);

            // 3. 출력
            System.out.println(input.size());
        }
    }
    ```
+ 시도2
    + 접근 방법
        + DP 알고리즘을 이용하였다.
    + 소스 코드
    ```java
    import java.io.*;
    import java.util.*;

    public class Main {
        public static void main(String[] args) throws IOException {
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            int n = Integer.parseInt(br.readLine());

            int[] arr = new int[n];
            StringTokenizer st = new StringTokenizer(br.readLine());

            for (int i=0; i<n; i++) {
                arr[i] = Integer.parseInt(st.nextToken());
            }

            // 2. dp 배열 생성
            int[] dp = new int[n];
            Arrays.fill(dp, 1);  // 자기 자신만 있는 경우 길이 1

            for (int i=0; i<n; i++) {
                for (int j=0; j<i; j++) {
                    if (arr[j] < arr[i]) {
                        dp[i] = Math.max(dp[i], dp[j] + 1);
                    }
                }
            }

            // 3. 출력
            int result = 0;
            for (int i=0; i<n; i++) {
                result = Math.max(result, dp[i]);
            }

            System.out.println(result);
        }
    }
    ``` 

## 3. 문제 회고
+ 🔍 시도
처음에는 TreeSet을 사용해서 정렬과 중복 제거를 통해 문제를 풀려고 했지만 이는 문제의 의도와 맞지 않았다.
문제 밑에 있는 알고리즘의 분류를 보고 동적 계획법(DP)을 이용해서 풀었다.

+ 🛠 해결 과정
dp[i] = i번째 숫자를 마지막으로 했을 때의 LIS 길이라고 정의하고 i번째 수를 기준으로 0부터 i-1까지 순회하면서
arr[j] < arr[i] 이면 dp[i] = Math.max(dp[i], dp[j] + 1)로 갱신했다. (DP bottom-up형식)

+ ✅ 잘한 점

+ ⚠ 개선할 점
DP 문제 유형에 대해 좀 더 풀어봐야겠다.


## 참조