---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 1일차 TIL + 에라토스테네스의 체 "
description: "99클럽 코테 스터디 1일차 TIL"
date: "2025-03-31"
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
+ 에라토스테네스의 체 
+ 문제 URL : https://www.acmicpc.net/problem/1929

## 2. 공부한 내용 본인의 언어로 정리하기
+ 소수 
    + 1과 자기 자신만을 약수로 가지는 수를 말한다.
    + 0, 1은 소수가 아니다.
    + 소수를 찾는 방법
        + 소인수 분해를 이용하는 방법
        + 에라토스테네스의 체를 이용하는 방법

+ 에라토스테네스의 체 
    + 소수를 빠르게 찾는 알고리즘을 말한다.
    + 시간 복잡도가 줄어들게 된다.
    + 원리
        + 소수를 구하고자 하는 범위만큼 배열을 할당한다.
        + 처음 모든 숫자를 소수라고 가정하기 위해서 true로 초기화한다.
        + 2부터 시작해서 특정 수의 배수에 해당하는 수를 모두 지운다.(지울 때 자기자신은 지우지 않고 이미 지워진 수는 건너뛴다.)
        + 2부터 시작하여 남아있는 수를 모두 출력한다.

+ 소스 코드
    ````java
    import java.util.*;

    public class Main {
        public static void main(String[] args) {
            // 입력
            Scanner sc = new Scanner(System.in);
            int m = sc.nextInt();
            int n = sc.nextInt();

            boolean[] isPrime = new boolean[n + 1]; // boolean 배열을 사용해서 공간을 최소화
            Arrays.fill(isPrime, true); // 처음 모든 숫자를 소수라고 가정하기 위해서

            isPrime[0] = false;
            isPrime[1] = false;

            /**
            * Q. i * i <= n까지만 반복하는 이유?
            * A. 그 이전 값들은 이미 작은 수의 배수로 처리됐기 때문이다
            *    예를 들어 i=3이면 3×2=6은 이미 i=2일 때 처리됐으므로 3×3=9부터 시작하면 된다
            */
            for (int i=2; i * i <= n; i++) { // 2부터 sqrt(n)까지 반복
                if (isPrime[i]) { // 이미 지워진 숫자도 다시 검사 될 수 있으므로 필요함
                    for (int j = i * i; j <= n; j += i) { // i의 배수 지우기
                        isPrime[j] = false;
                    }
                }
            }

            // 출력
            for (int i=m; i<=n; i++) {
                if (isPrime[i]) {
                    System.out.println(i);
                }
            }
        }
    }
    ````

## 3. 오늘의 회고
소수의 개념이 기억나지 않아 개념을 찾아보고 코드를 작성해보았다. 처음 시도한 방법은 M과 N 사이의 모든 수를 반복문을 돌면서 소수인지 판별하는 방법이었다. 하지만 오답처리가 되었다. 그래서 int형의 범위 초과인지 싶어서 int형을 long형으로 변경해보았지만 여전히 오답처리가 되었다.
그래서 소수 판별 알고리즘을 찾아보았는데 에라토스테네스의 체 알고리즘을 사용하면 더 빠르게 소수를 판별할 수 있다는 것을 알게 되었다.
에라토스테네스의 체 알고리즘을 좀 더 공부해서 코드를 작성해보고 이해하는 시간이 필요할 것 같다.

## 4. 내일 학습할 것
+ 에라토스테네스의 체 알고리즘 코드 이해하기
