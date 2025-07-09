---
title: "[백준] 정수 삼각형 Java"
description: "정수 삼각형 Java"
date: "2025-07-09"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png' 
isPrivate: false
---

## 1. 📝 문제 요약
+ 문제 URL : [https://www.acmicpc.net/problem/1932](https://www.acmicpc.net/problem/1932)
+ 난이도 : 실버1
+ 소요시간 : 30분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 입력
> 2. DP 테이블 생성
> 3. DP 처리
> 4. 출력

+ 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        public static void main(String[] args) throws Exception {
            StringTokenizer st = null;
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            int n = Integer.parseInt(br.readLine());
            int[][] arr = new int[n][n];

            arr[0][0] = Integer.parseInt(br.readLine());

            for (int i=1; i<n; i++) {
                st = new StringTokenizer(br.readLine());
                for (int j=0; j<=i; j++) {
                    arr[i][j] = Integer.parseInt(st.nextToken());
                }
            }
            // 2. dp
            int[][] dp = new int [n][n];
            // 초기값 셋팅
            dp[0][0] = arr[0][0];
            for (int i=1; i<n; i++) {
                for (int j=0; j<=i; j++) {
                    if (j == 0) {
                        // 왼쪽 끝: 위에서만 올 수 있음
                        dp[i][j] = dp[i-1][j] + arr[i][j];
                    } else if (j == i) {
                        // 오른쪽 끝: 위 왼쪽에서만 올 수 있음
                        dp[i][j] = dp[i-1][j-1] + arr[i][j];
                    } else {
                        // 중간: 위와 위 왼쪽에서 둘 다 올 수 있음
                        dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + arr[i][j];
                    }
                }
            }

            // 3. 출력
            int reuslt = Arrays.stream(dp[n-1]).max().getAsInt();
            System.out.println(reuslt);
        }
    }
    ```
## 3. 🔍 문제 회고
문제을 읽고 다이나믹 프로그래밍 문제라고 생각했다. dp 점화식을 떠오르지 않아서 검색에 의존했다.

문제를 처음 보았을 때 단순 탐색으로는 비효율적일 것 같아 다이나믹 프로그래밍(DP)으로 접근해야 한다고 판단했다.
아래로 내려오면서 최댓값을 누적해서 계산해야 했고 이를 위해 이전 계산 결과를 기반으로 다음 값을 구할 수 있는 점화식을 도출하는 것이 핵심 과제였다.

DP 테이블을 2배열로 선언하고 각 위치에서 올 수 있는 경로를 고려하여 최댓값을 누적하는 방식으로 점화식을 완성했다. 삼각형의 양쪽 끝은 경로가 하나이므로 예외 처리를 통해 처리하였다.

점화식이 완성된 이후에는 구현은 수월하게 이루어졌고, 정답을 맞출 수 있었다.
다만, 초기 점화식 도출 과정에서 검색에 의존했던 점은 아쉬웠다. 점화식을 도출하는 연습을 더 해야될 것 같다.

## 📚 참조