---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 2일차 TIL + 동적계획법"
description: "99클럽 코테 스터디 2일차 TIL + 동적계획법"
date: "2025-04-01"
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
+ 문제 URL : https://www.acmicpc.net/problem/14495

## 2. 공부한 내용 본인의 언어로 정리하기
+ 동적계획법(Dynamic Programming, DP)
    + **복잡한 문제를 작은 부분 문제로 나누어 해결한** 후 그 결과를 저장하여 동일한 계산을 반복하지 않도록 하는 최적화 기법을 말한다.
    + 구현 방법
        + Top-Down (메모이제이션, Memoization)
            + **재귀**를 사용하여 해결한다.
            + 이미 계산한 값을 저장하고 필요할 때 다시 사용한다.
        + Bottom-Up (타뷸레이션, Tabulation)
            + 작은 문제부터 해결하여 큰 문제를 해결한다.
            + **반복문**을 사용하여 점진적으로 결과를 계산한다.
+ 소스 코드
    + 시도1 : int형 -> long형으로 변경
    ````java
    import java.util.*;
    public static void main(String[] args) {
        // 입력
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        long[] arr = new long[n+1];
        // f(1) = f(2) = f(3) = 1이며 
        arr[1] = 1;
        arr[2] = 1;
        arr[3] = 1;
        
        // f(n) = f(n-1) + f(n-3)인 수열
        for (int i=4; i<=n; i++) {
            arr[i] = arr[i-1] + arr[i-3]
            // System.out.println(arr[i]);
        }
        // 출력
        System.out.println(arr[n]);
    }
    ````
    + 시도2 : long형 -> BigInteger 타입으로 변경
    ```java
    import java.util.*;
    import java.math.*;
    public static void main(String[] args) {
        // 입력
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        BigInteger[] arr = new BigInteger[n+1];
        // f(1) = f(2) = f(3) = 1이며 
        arr[1] = BigInteger.ONE;
        arr[2] = BigInteger.ONE;
        arr[3] = BigInteger.ONE;
        
        // f(n) = f(n-1) + f(n-3)인 수열
        for (int i=4; i<=n; i++) {
            arr[i] = arr[i-1].add(arr[i-3]);
            // System.out.println(arr[i]);
        }
        // 출력
        System.out.println(arr[n]);
    }
    ```
    + 시도3
    ```java
    import java.util.*;
    import java.math.*;
    public static void main(String[] args) {
        // 입력
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        // 유효성 검사 추가
        if (n == 1 || n == 2 || n == 3) {
            System.out.println(1);
            return;
        }
        
        // f(1) = f(2) = f(3) = 1이며 
        BigInteger f1 = BigInteger.ONE;         // f(n-3)
        BigInteger f2 = BigInteger.ONE;         // f(n-2)
        BigInteger f3 = BigInteger.ONE;         // f(n-1)
        BigInteger result = BigInteger.ZERO;    // 결과
        
        // f(n) = f(n-1) + f(n-3)인 수열
        for (int i=4; i<=n; i++) {
            result = f3.add(f1);
            f1 = f2;
            f2 = f3;
            f3 = result;
        }
        // 출력
        System.out.println(result);
    }
    ```

## 3. 오늘의 회고
+ 문제 상황과 시도
처음에는 int형을 사용해 제출했지만 틀렸다는 결과가 나왔다. n의 최대값인 161로 테스트해 보니 중간에 값이 이상해지는 것을 확인했고 이는 int형의 범위를 초과했기 때문이라고 판단했다.
이에 long형으로 변경했지만 여전히 같은 문제가 발생했다.

+ 해결 과정
검색을 통해 BigInteger를 사용하면 오버플로우를 방지할 수 있다는 것을 알게 되어 적용해 보았으나 이번에는 런타임 오류와 함께 메모리와 시간을 더 많이 사용하게 되었다.
이를 해결하기 위해 배열 대신 변수를 활용하여 메모리 사용을 최적화했고 유효성 검사도 추가하여 안정성을 높였다.

+ 배운 점
코딩 테스트에서 자료형의 범위를 신중하게 고려하는 습관이 중요하다는 것을 다시 한번 깨달았다.
앞으로는 숫자의 최대값을 미리 확인하고 적절한 자료형을 선택하는 과정을 습관화해야겠다. 