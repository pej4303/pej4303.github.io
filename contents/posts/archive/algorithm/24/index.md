---
title: "[백준] 한 줄로 서기 Java"
description: "한 줄로 서기 Java"
date: "2025-06-12"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://www.acmicpc.net/problem/1138](https://www.acmicpc.net/problem/1138)
+ 난이도 : 실버2

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + 입력 받기
    + index랑 사람수를 같이 저장할 클래스 선언
    + list에 넣기
    + 사람수를 기준으로 오름차순 
    + 출력
+ 문제점
    + 단순 오름차순 정렬로는 사람 수 조건을 모두 만족하기 어렵다.
    + 자리 배치를 하면서 현재 배열 상태를 고려해야 하기 때문에 이 방식은 논리적으로 성립하지 않음
    + **정렬보다는 "자리 찾기" 방식으로 풀어야 한다.**

### 시도2
+ 접근 방법
    + 입력 받기
    + 결과를 저장할 배열 result 선언
    + N까지 반복
        + arr[i-1] → 왼쪽에 있어야 할 키 큰 사람 수 = peopleCnt
        + result 배열에서 다음을 반복:
            + 0(빈칸)을 만날 때마다 cnt 변수 값 증가
            + cnt와 peopleCnt이 같으면 빈칸 위치에 i번 사람을 배치
        + 한번 배치하면 루프 종료
    + 출력
+ 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        public static void main(String[] args) throws Exception {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            // 사람의 수
            int n = Integer.parseInt(br.readLine());
            // 배열
            StringTokenizer st = new StringTokenizer(br.readLine());

            int[] arr = new int[n];
            for (int i=0; i<arr.length; i++) {
                arr[i] = Integer.parseInt(st.nextToken());
            }

            int[] result = new int[n];
            for (int i=0; i<n; i++) {
                int peopleCnt = arr[i]; // 왼쪽에 있어야 할 사람 수
                int cnt = 0;

                for (int j=0; j<n; j++) {
                    // 빈 칸이면 키 큰 사람 수를 셀 수 있음
                    if (result[j] == 0) {
                        if (cnt == peopleCnt) {
                            result[j] = i + 1; // 사람 번호는 i+1
                            break;
                        }
                        cnt++;
                    }
                }
            }

            Arrays.stream(result).forEach(i -> System.out.print(String.format("%d ", i)) );
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
처음에는 사람 번호와 왼쪽에 있어야 하는 사람 수를 클래스로 묶어 리스트에 저장하고 이 리스트를 정렬해서 처리하면 될 거라고 생각했다. 하지만 검색해보니 단순 정렬만으로는 모든 사람의 조건을 만족시키는 순서를 만들기 어렵다는 걸 깨달았다.

+ 🛠 해결 과정
검색을 통해 문제 해결의 핵심이 "정렬"이 아니라 "자리 찾기"라는 것을 알게 되었고 사람 번호를 1번부터 N번까지 순서대로 보면서 자기가 원하는 조건을 만족하는 자리를 result 배열에서 직접 찾아가는 방식으로 구현했다.
배열의 빈칸을 순회하면서 카운트를 세고 자신보다 키 큰 사람이 pepoleCnt명만큼 있을 때 그 자리에 자신을 넣는 방식은 생각보다 간단하면서도 효과적이었다.

+ ⚠ 개선할 점
처음엔 구현 아이디어가 명확히 떠오르지 않아 검색에 의존했다. 앞으로는 문제를 더 다양한 관점에서 바라보고 조건 하나하나를 코드 흐름으로 바꾸는 연습을 더 해야겠다. 
```
## 참조