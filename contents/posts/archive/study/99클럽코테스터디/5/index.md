---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 5일차 TIL + 투포인터"
description: "99클럽 코테 스터디 5일차 TIL + 투포인터"
date: "2025-04-04"
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
+ 투포인터
+ 문제 URL : https://www.acmicpc.net/problem/2559

## 2. 공부한 내용 본인의 언어로 정리하기
+ 투포인터 
    + 정렬된 배열이나 리스트에서 두 개의 포인터를 사용하여 문제를 해결하는 방법을 말한다.
    + 주로 연속된 부분 배열, 구간 합, 정렬된 배열에서 특정 조건을 만족하는 쌍 찾기 등에 사용된다.
+ 소스 코드
    + 시도1
    ````java
    import java.io.*;
    import java.util.Arrays;

    public class Main {
        static int[] arr = null;

        public static void main(String[] args) throws Exception {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            String[] tmp1 = br.readLine().split(" ");
            String[] tmp2 = br.readLine().split(" ");

            int n = Integer.parseInt(tmp1[0]);    // 온도를 측정한 전체 날짜의 수
            int k = Integer.parseInt(tmp1[1]) - 1;    // 합을 구하기 위한 연속적인 날짜의 수(자기 자신도 포함되어서 -1)

            arr = new int[n];
            for (int i=0; i<n; i++) {
                arr[i] = Integer.parseInt(tmp2[i]);
                // System.out.print(arr[i] + " ");
            }

            int maxSum = Integer.MIN_VALUE;
            for (int i=0; i<n-1; i++) {
                int j = i + k;
                if (j < n) {
                    // 연속적인 날짜의 합 구하기
                    int sum = getSum(arr, i, j);
    //                System.out.print(sum + " ");
                    maxSum = Math.max(maxSum, sum);
                }
            }
            // 출력
            System.out.println(maxSum);
        }

        public static int getSum(int[] arr, int startIdx, int endIndx) {
            int sum = 0;
            for (int i=startIdx; i<=endIndx; i++) {
                sum += arr[i];
            }
            return sum;
        }
    }
    ````

## 3. 오늘의 회고
+ 문제 상황과 시도
초반에 문제를 잘못 이해하여 연속적인 구간의 합을 구해야 했는데 특정 인덱스끼리의 합을 구하는 방식으로 풀었다.

+ 해결 과정
생각한대로 쉽게 구현이 되었다.

+ 배운 점
처음에는 단순한 시뮬레이션 문제라고 생각했지만 힌트를 보고 투 포인터 알고리즘이 활용된다는 것을 알게 되었다. 
문제의 특성을 정확히 파악하는 것이 중요하다는 점을 다시 한번 느꼈다.
