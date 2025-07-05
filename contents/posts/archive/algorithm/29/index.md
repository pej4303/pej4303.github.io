---
title: "[백준] RGB거리 Java"
description: "RGB거리 Java"
date: "2025-07-05"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png' 
isPrivate: false
---

## 1. 📝 문제 요약
+ 문제 URL : [https://www.acmicpc.net/problem/1149](https://www.acmicpc.net/problem/1149)
+ 난이도 : 실버1
+ 소요시간 : 50분

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

            int n = Integer.parseInt(br.readLine());    // 집의 수

            int[][] arr = new int[n][3]; // 각 집의 R,G,B 비용 저장

            for (int i=0; i<n; i++) {
                st = new StringTokenizer(br.readLine());

                arr[i][0] = Integer.parseInt(st.nextToken()); // 빨강
                arr[i][1] = Integer.parseInt(st.nextToken()); // 초록
                arr[i][2] = Integer.parseInt(st.nextToken()); // 파랑
            }

            // 2. DP 테이블
            // 집 번호(i)와 색(j)라는 두 상태를 저장해야 해서 2차원 배열로 선언
            int[][] dp = new int[n][3];

            // 초기화
            dp[0][0] = arr[0][0];
            dp[0][1] = arr[0][1];
            dp[0][2] = arr[0][2];

            // 3. DP
            for (int i=1; i<n; i++) {
                dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + arr[i][0];
                dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + arr[i][1];
                dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + arr[i][2];
            }

            // 4. 출력
            int result = Math.min(dp[n-1][0], Math.min(dp[n-1][1], dp[n-1][2]));
            System.out.println(result);
        }
    }
    ```
## 3. 🔍 문제 회고
"모든 집을 칠하되 총 비용이 최소가 되도록 하라"는 조건과 인접한 집을 같은 색으로 칠할 수 없는 제약이 있는 문제였다. 단순히 모든 경우를 시도하기엔 집의 수가 많아질수록 계산량이 폭발적으로 늘어날 수 있다는 점에서 효율적인 접근이 필요했다. 각 집을 어떤 색으로 칠할지를 결정하면서 인접한 집과 색이 겹치지 않도록 하고 전체 칠하는 비용의 합이 최소가 되도록 해야 했다.

문제를 처음 접했을 때는 어떻게 풀어야 할지 감이 오지 않아 검색에 의존했다. 이후에 색상과 집 번호라는 두 가지 상태를 기준으로 2차원 DP 테이블을 만들고 이전 집의 색에 따라 현재 집의 최소 비용을 계산하는 점화식을 세워 문제를 해결했다.

DP의 개념을 코드에 직접 적용하며 이전 상태를 기반으로 현재 상태를 구성하는 방식에 대해 조금 더 이해할 수 있었다. 문제는 해결했지만 DP의 적용 방식과 점화식을 스스로 떠올리지 못했다는 점에서 아쉬움이 남는다. 다음에는 문제의 구조를 보고 스스로 점화식을 세워보는 연습이 필요하다고 느꼈다.

## 📚 참조