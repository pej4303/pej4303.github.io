---
title: "[작심큰일] 작심큰일 3일차 TIL"
description: "[작심큰일] 작심큰일 3일차 TIL"
date: "2025-08-06"
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
+ 문제 URL : [https://www.acmicpc.net/problem/2437](https://www.acmicpc.net/problem/2437)
+ 난이도 : 백준 골드2
+ 소요시간 : 50분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 입력
> 2. 배열 오름차순으로 정렬
> 3. 배열의 길이만큼 순회 하면서 누적합 계산하여 만들 수 있는지 체크
> 4. 출력

+ 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        public static void main(String[] args) throws Exception {
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            // 정수 n 입력 받기
            int n = Integer.parseInt(br.readLine());
            StringTokenizer st = new StringTokenizer(br.readLine());

            // 추의 무게 입력 받기
            int[] arr = new int[n];
            for (int i=0; i<n; i++) {
                arr[i] = Integer.parseInt(st.nextToken());
            }

            // 2. 배열 오름차순으로 정렬
            // => 이유 : 누적합을 정확하게 판단하기 위해서
            Arrays.sort(arr);

            // 3. 배열의 길이만큼 순회 하면서 누적합 계산하여 만들 수 있는지 체크
            long sum = 0;
            for (int i=0; i<arr.length; i++) {
                if ( arr[i] > sum + 1) {
                    // 만들 수 없는 최소값은 sum + 1
                    break;
                }
                // 누적합 계산
                sum += arr[i];
            }

            // 4. 출력
            System.out.println(sum + 1);
        }
    }
    ```
## 3. 🔍 문제 회고
백준 2437번 문제는 다양한 무게의 추를 이용해 만들 수 없는 최소 무게를 구하는 문제였다. 골드2 난이도답게 처음에는 어떻게 접근해야 할지 막막했다. 추의 조합을 통해 만들 수 없는 최솟값을 찾아야 했다.   

최솟값을 어떻게 구해야 할지 감이 잡히지 않아 풀이 방법을 검색했다. 그 과정에서 '오름차순 정렬 후 누적합을 활용해 만들 수 있는 무게 범위를 좁혀간다'는 그리디 알고리즘 풀이 방법을 알게 되었고 이를 그대로 적용해 문제를 해결했다.   

생각보다 간단한 풀이 방법에 허무한 느낌도 들었지만 그리디 문제는 아이디어가 핵심이라는 점을 다시금 깨달았다. 아직 그리디 유형에 익숙하지 않다는 것을 느꼈고 다양한 유형의 문제를 많이 접하면서 감각을 키워야겠다고 생각했다.

## 📚 참조
