---
title: "[작심큰일] 작심큰일 챌린지 1일차 TIL"
description: "[작심큰일] 작심큰일 챌린지 1일차 TIL"
date: "2025-08-04"
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
+ 문제 URL : [https://www.acmicpc.net/problem/1929](https://www.acmicpc.net/problem/1929)
+ 난이도 : 백준 실버3
+ 소요시간 : 14분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 입력
> 2. 소수 찾기
> 3. 출력

+ 소스 코드
    ```java
    import java.io.*;
    public class Main {
        public static void main(String[] args) throws Exception {
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            String[] tmp = br.readLine().split(" ");

            int m = Integer.parseInt(tmp[0]);
            int n = Integer.parseInt(tmp[1]);

            // 2. 소수 찾기
            for (int i=m; i<=n; i++) {
                if (isPrimeNumer(i)) {
                    // 3. 출력
                    System.out.println(i);
                }
            }
        }

        // 소수 판별
        private static boolean isPrimeNumer(int num) {
            // 2보다 작은 수는 소수가 아님
            if (num < 2) {
                return false;
            }
            // 소수 : 1과 자기자신으로만 나누어져야 함
            for (int i=2; i * i <=num; i++) {
                if ( num % i == 0) {
                    return false;
                }
            }

            return true;
        }
    }
    ```
## 3. 🔍 문제 회고
이 문제는 범위 내의 모든 소수를 찾는 알고리즘을 구현하는 간단한 문제였다.   

기본적인 소수 판별 함수를 작성해 정답을 도출했지만 초반에는 2부터 √N까지만 검사하면 된다는 사실을 잊고 전체 범위를 순회했다. 이후 로직을 수정해 불필요한 연산을 줄일 수 있었다. 하지만 2보다 작은 수를 예외 처리하는 부분을 놓친 점은 아쉬웠지만 빠른 시간 내에 문제를 해결한 점은 좋았다.

## 📚 참조
