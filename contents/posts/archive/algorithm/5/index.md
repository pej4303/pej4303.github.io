---
title: "[BOJ] 백준 1912 연속합 Java"
description: "백준 1912 연속합 Java"
date: "2025-05-02"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://www.acmicpc.net/problem/1912](https://www.acmicpc.net/problem/1912)
+ 난이도 : 실버2
+ 문제 내용 : 연속된 몇 개의 수를 선택해서 구할 수 있는 합 중 가장 큰 합을 구한다. 단, 수는 한 개 이상 선택해야 한다.

## 2. 내 풀이 방법

+ 시도1
    + 접근 방법
        + 완전탐색(= 브루트포스)를 이용하였다.
    + 문제점
        + 완전탐색의 시간복잡도는 `O(n²)` 이다.
        + n = 100,000이라면 O(n²) → 10⁵ * 10⁵ → **100억 × 100억 = 1조** 연산을 하게 되며 1초에 약 1억 연산 가능하기 때문에 시간 초과가 발생한다.
    + 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        public static void main(String[] args) throws IOException {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int n = Integer.parseInt(br.readLine());
            StringTokenizer st = new StringTokenizer(br.readLine());

            int[] arr = new int[n];
            for (int i=0; i<n; i++) {
                arr[i] = Integer.parseInt(st.nextToken());
            }

            // 방법1) 완전탐색 = 브루트 포스
            // 시간 초과 발생
            long max = arr[0];
            for (int i=0; i<n; i++) {
                long sum = 0;
                for (int j=i; j<n; j++) {
                    sum += arr[j];
                    max = Math.max(max, sum);
                }
            }
            // 출력
            System.out.println(max);
        }
    }
    ```
+ 시도2
    + 접근 방법
        + 누적합 기법을 이용하였다.
        + 계산 방법
        | i | arr| sum | max  |
        | - | ----| ------------------------------------------ | ----------------------- |
        | 1 | -4  | max(-4, 10 + (-4)) = max(-4, 6) = 6        | max(10, 6) = 10         |
        | 2 | 3   | max(3, 6 + 3) = max(3, 9) = 9              | max(10, 9) = 10         |
        | 3 | 1   | max(1, 9 + 1) = 10                         | max(10, 10) = 10        |
        | 4 | 5   | max(5, 10 + 5) = 15                        | max(10, 15) = 15        |
        | 5 | 6   | max(6, 15 + 6) = 21                        | max(15, 21) = 21        |
        | 6 | -35 | max(-35, 21 + (-35)) = max(-35, -14) = -14 | max(21, -14) = 21       |
        | 7 | 12  | max(12, -14 + 12) = max(12, -2) = 12       | max(21, 12) = 21        |
        | 8 | 21  | max(21, 12 + 21) = 33                      | max(21, 33) = 33        |
        | 9 | -1  | max(-1, 33 - 1) = 32                       | max(33, 32) = 33        |

    > 누적합(prefix sum)이란?
    > + 배열의 앞에서부터 차례로 합을 계산해서 저장해두는 방식이다.
    > + 이렇게 하면 시간복잡도가 O(1) = 1회 연산 수행하게 된다.

    + 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        public static void main(String[] args) throws IOException {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int n = Integer.parseInt(br.readLine());
            StringTokenizer st = new StringTokenizer(br.readLine());

            int[] arr = new int[n];
            for (int i=0; i<n; i++) {
                arr[i] = Integer.parseInt(st.nextToken());
            }

            // 방법2) 누적합 이용
            long max = arr[0];
            long sum = arr[0];

            /**
            * arr = [10 -4 3 1 5 6 -35 12 21 -1]
            *
            * sum = 10, max = 10
            *
            * arr[1] = -4 → sum = max(-4, 10 + (-4)) = max(-4, 6) = 6 → max = max(10, 6) = 10
            * arr[2] =  3 → sum = max(3, 6 + 3) = max(3, 9) = 9     → max = max(10, 9) = 10
            * arr[3] =  1 → sum = max(1, 9 + 1) = max(1, 10) = 10   → max = max(10, 10) = 10
            * arr[4] =  5 → sum = max(5, 10 + 5) = max(5, 15) = 15  → max = max(10, 15) = 15
            */
            for (int i=1; i<n; i++) {
                sum = Math.max(arr[i], sum + arr[i]);
                max = Math.max(max, sum);
            }

            // 출력
            System.out.println(max);
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
문제를 읽고 생각나는대로 구현을 하였는데 의도치 않게 완전탐색 방식으로 구현하게 되었다.

+ 🛠 해결 과정
시간 초과가 발생하여 효율적인 누적합 계산 방법을 찾아보았고 그 과정에서 prefix sum(누적합) 기법을 적용하여 문제를 해결할 수 있었다.

+ ✅ 잘한 점
직관적인 방식으로 먼저 접근하면서 문제의 구조를 빠르게 파악했다.

+ ⚠ 개선할 점
문제를 처음 읽을 때 시간 복잡도를 고려하지 못했다.

## 참조