---
title: "[작심큰일] 작심큰일 5일차 TIL"
description: "[작심큰일] 작심큰일 5일차 TIL"
date: "2025-08-08"
tags:
  - 작심큰일
  - 코딩테스트준비
  - 팀스파르타
  - TIL
series: "작심큰일 챌린지 1기"
previewImage: 'how.png'
isPrivate: false
---

<!-- ![작심큰일 챌린지](/images/99_java.png) -->


## 1. 📝 문제 요약
+ 문제 URL : [https://www.acmicpc.net/problem/18126](https://www.acmicpc.net/problem/18126)
+ 난이도 : 백준 실버4
+ 소요시간 : 20분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 입력
> 2. DP 배열 선언
> 3. DP 배열 초기화
> 4. DP 처리
> 5. 출력

+ 소스 코드
    ```java
    import java.io.*;
    public class Main {
        public static void main(String[] args) throws Exception {
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int n = Integer.parseInt(br.readLine());

            // n의 범위가 1부터여서 추가함
            if (n == 1 || n == 2 || n == 3) {
                System.out.println(1);
                return;
            }

            // 2. dp 배열 선언
            long[] dp = new long [n+1];

            // 3. dp 배열 초기화
            dp[1] = 1;
            dp[2] = 1;
            dp[3] = 1;

            // 4. dp
            for (int i=4; i<=n; i++) {
                dp[i] = dp[i-1] + dp[i-3];
            }

            // 5. 출력
            System.out.println(dp[n]);
        }
    }
    ```

## 3. 🔍 문제 회고
전형적인 DP 유형으로 문제 설명에 점화식과 구현 방법이 거의 제시되어 있어 비교적 쉽게 풀 수 있었다. 점화식을 코드로 구현하고 주어진 N에 대한 수열 값을 정확하게 계산하여 제출해야 했다.   

점화식을 기반으로 DP 배열을 만들고 초기값 f(1) = 1, f(2) = 1, f(3) = 1을 설정했다.
그러나 제출시 ArrayIndexOutOfBoundsException이 발생했다. 원인을 확인해 보니 N이 1, 2, 3인 경우에도 배열의 인덱스를 잘못 참조하게 되는 로직이 문제였다. 따라서 N이 1, 2, 3일 경우에는 그대로 초기값을 출력하는 예외 처리를 추가했다.   
또한, N의 범위가 116이라 처음에는 int형으로 충분하다고 판단했지만 이는 입력값 범위일 뿐 결과값이 매우 커지는 피보나치 변형 수열 특성상 int 범위를 초과했다. 그래서 DP 배열을 long형으로 변경하여 문제를 해결했다.

예외 처리와 자료형 변경을 통해 모든 테스트 케이스에서 정상적으로 통과할 수 있었으며 DP 문제 해결 시 입력 범위와 출력 값의 범위를 반드시 구분해서 고려해야 함을 다시 한번 깨달았다.

## 📚 참조
