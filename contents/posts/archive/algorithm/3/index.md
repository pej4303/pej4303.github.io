---
title: "[BOJ] 백준 2805 나무 자르기  Java"
description: "백준 2805 나무 자르기  Java"
date: "2025-04-27"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : https://www.acmicpc.net/problem/2805
+ 난이도 : 실버2 
+ 문제 내용 : 

## 2. 내 풀이 방법
+ 시도1
    + 접근 방법
        + 이분탐색 방법을 이용하였다.
    + 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        public static void main(String[] args) throws IOException {
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            StringTokenizer st = new StringTokenizer(br.readLine());
            // 나무의 수
            int n = Integer.parseInt(st.nextToken());
            // 나무의 길이
            int m = Integer.parseInt(st.nextToken());

            int[] arr = new int[n];
            int high = 0;
            int low = 0;

            st = new StringTokenizer(br.readLine());
            for (int i=0; i<n; i++) {
                arr[i] = Integer.parseInt(st.nextToken());
                high = Math.max(high, arr[i]);
            }

            // 2. 이분 탐색
            int result = 0;

            while (high >= low) {
                int mid = (high + low) / 2;
                long sum = 0;

                // 현재 높이(mid)로 잘랐을 때 얻는 나무 길이 합 구하기
                for (int num : arr) {
                    if (num > mid) {
                        sum += (num - mid);
                    }
                }

                if (sum >= m) {
                    result = mid;       // 조건을 만족했으니 일단 기록
                    low = mid + 1;      // 절단기 높이를 더 높여본다
                } else {
                    high = mid - 1;     // 절단기 높이를 낮춰야 함
                }
            }

            System.out.println(result);
        }
    }
    ```

## 3. 문제 회고
+ 시도
문제에 맞는 알고리즘을 생각하지 못하였다.

+ 해결 과정
문제 유형을 참고하여 이분 탐색 알고리즘을 적용해야 한다는 것을 알게 되었고 이를 기반으로 문제를 해결할 수 있었다.

+ 잘한 점

+ 개선할 점
이분 탐색 유형 문제를 많이 풀어봐야겠다.

## 참조