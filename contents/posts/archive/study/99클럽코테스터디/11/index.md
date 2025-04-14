---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 11일차 TIL + 이분탐색"
description: "99클럽 코테 스터디 11일차 TIL + 이분탐색"
date: "2025-04-14"
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
+ 이분탐색
+ 문제 URL : https://www.acmicpc.net/problem/16401

## 2. 공부한 내용 본인의 언어로 정리하기
+ 시도1
    + 소스 코드
    ```java
    import java.io.*;
    public class Main {
        public static void main(String[] args) throws IOException {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            String[] tmpArr = br.readLine().split(" ");

            int m = Integer.parseInt(tmpArr[0]); // 조카 수
            int n = Integer.parseInt(tmpArr[1]); // 과자 수

            long[] inputArr = new long[n];
            long maxLen = 0;

            String[] tpmArr2 = br.readLine().split(" ");
            for (int i=0; i<n; i++) {
                inputArr[i] = Long.parseLong(tpmArr2[i]);
                maxLen = Math.max(maxLen, inputArr[i]);
            }

            long left = 1;        // 시작점
            long right = maxLen;  // 끝점
            long result = 0;

            // 길이를 1부터 가장 긴 과자 길이까지 이진 탐색 시작
            // "숫자 범위"에서 최적의 값을 찾는 문제는 → 이진 탐색을 숫자 범위에 해야 한다.(예: 나무 자르기, 랜선 자르기, 과자 나눠주기 등)
            while (left <= right) {
                long mid = (left + right) / 2;
                long count = 0;
                // 각 과자를 mid 길이로 잘랐을 때 몇 개가 나오는지 합산
                for (long num : inputArr) {
                    count += num / mid;
                }
                // 줄 수 있는 과자 수가 조카 수 이상이면 더 길게 자를 수도 있음
                if (count >= m) {
                    result = mid;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            // 출력
            System.out.println(result);
        }
    }
    ```
+ 이분 탐색
    + 정렬된 배열이나 리스트에서 원하는 값을 빠르게 찾는 알고리즘를 말한다.
    + 반드시 오름차순(또는 내림차순)으로 정렬되어 있어야 한다.
    + 동작 방식
        + 배열의 중간값을 찾는다.
        + 찾는 값이 중간값보다 작으면 왼쪽, 크면 오른쪽으로 탐색 범위를 줄인다.
        + 범위가 좁아질 때까지 반복한다.
    + 사용되는 상황
        + 효율적으로 검색이 필요할 때
        + 예: 값의 존재 여부, 최댓값/최솟값 구하기, 조건을 만족하는 값 찾기, 나무 자르기, 랜선 자르기, 과자 나눠주기
        
## 3. 오늘의 회고
+ 문제 상황과 시도   
문제를 보고 어떤 알고리즘을 사용해야 할지 바로 떠오르지 않았다. 완전 탐색으로 접근하면 시간 초과가 날 것 같았고, DFS나 BFS 알고리즘도 적용되지 않을 것 같았다.

+ 해결 과정   
힌트를 통해 이분탐색을 사용해야 한다는 것을 알게 되었지만 이 알고리즘이 생소해서 구현하는 데 어려움이 있었다.

+ 배운 점   
이분탐색은 처음 접했을 때 구현이 어렵지만 문제를 풀고 나니 그 효율성을 잘 이해할 수 있었다.
알고리즘을 배우고 익히는 과정에서 반복적인 연습의 중요성을 다시 한 번 느꼈다.