---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 9일차 TIL + 탐욕법"
description: "99클럽 코테 스터디 9일차 TIL + 탐욕법"
date: "2025-04-10"
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
+ 탐욕법
+ 문제 URL : https://www.acmicpc.net/problem/2437

## 2. 공부한 내용 본인의 언어로 정리하기
+ 시도1(틀림)
    + 접근 방법 
        + 1부터 1000까지 돌면서 가능한 무게를 추로 하나씩 빼본다.
    + 문제점 
        + **단순히 무게를 빼면 부분 조합을 체크 할 수 없다.**
        ```
        추 무게 : [1,1,3]
        조합 : 1, 2(1+1), 3, 4(1+3), 5(1+1+3)
        ```
+ 시도2(맞음)
    + 접근 방법 
        + 그리디 알고리즘을 적용해본다.
    + 소스 코드
    ```java
    import java.io.*;
    import java.util.*;

    public class Main {
        public static void main(String[] args) throws Exception {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int n = Integer.parseInt(br.readLine());
            String[] tmpArr = br.readLine().split(" ");

            int[] inputArr = new int[n];
            for (int i=0; i<n; i++) {
                inputArr[i] = Integer.parseInt(tmpArr[i]);
            }

            /**
            * 정렬 + 누적합을 이용해서 최소 무게를 구해야함
            */
            Arrays.sort(inputArr);

            int result = 1; // 현재까지 만들 수 있는 무게의 범위

            /**
            * 만약 현재 추의 무게가 result보다 작거나 같다면 result을 확장시킬 수 있음
            * 그렇지 않다면 result는 만들 수 없는 가장 작은 무게임
            */
            for (int i=0; i<n; i++) {
                // 이제 무게를 만들 수 없음
                if (inputArr[i] > result) {
                    break;
                }
                result += inputArr[i];
    //            System.out.println(result);
            }
            // 출력
            System.out.println(result);
        }
    }
    ```
+ 그리디 알고리즘(Greedy Algorithm)
    + 문제를 해결할 때 **가장 최적의 선택을 하는 알고리즘**를 말한다.
    + **이 문제에서는 정렬 + 누적합 + 그리디를 이용한 것이지 정렬+누적합 자체가 그리디 알고리즘을 말하는 것이 아니다.**
    + 핵심 개념
        + 탐욕적 선택
        + 부분 문제 최적성
    + 장점
        + 계산 속도가 빠르다.
    + 단점
        + 문제에 따라 탐욕적 접근이 실패할 수 있다.
    + 대표적인 문제
        + 동전 거스름돈
        + 회의실 배정
        + 최소 신장 트리
        + 다익스트라 알고리즘
## 3. 오늘의 회고
+ 문제 상황과 시도   
문제를 보고 1부터 1000까지 돌면서 가능한 무게를 추로 하나씩 빼본다라고 생각했지만 문제 풀이의 핵심인 부분 조합 경우를 어떻게 구현해야 할지 떠오르지 않았다.

+ 해결 과정   
GPT의 도움을 받아 그리디 알고리즘이라는 개념을 접하게 되었고 이 문제에 적합한 해결 방법임을 알게 되었다.

+ 배운 점   
이번 문제를 통해 그리디 알고리즘의 개념과 그 활용 방법에 대해 알게 되었다. 그리디 알고리즘에 대한 문제를 좀 더 풀어봐야겠다.