---
title: "[백준] 차이를 최대로 Java"
description: "차이를 최대로 Java"
date: "2025-06-21"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png' 
isPrivate: false
---

## 1. 📝 문제 요약
+ 문제 URL : [https://www.acmicpc.net/problem/10819](https://www.acmicpc.net/problem/10819)
+ 난이도 : 실버2
+ 소요시간 : 35분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 입력
> 2. DFS를 이용해서 순열 만들기
> 3. 완전탐색 최댓값 찾기
> 4. 출력

+ 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        static int n;
        static boolean[] visited;

        static int[] arr;       // 원본 배열
        static int[] tmpArr;    // 순열 배열

        static int max = Integer.MIN_VALUE;

        public static void main(String[] args) throws Exception {
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            n = Integer.parseInt(br.readLine());
            StringTokenizer st = new StringTokenizer(br.readLine());

            visited = new boolean[n];
            arr = new int[n];
            tmpArr = new int[n];

            for (int i=0; i<n; i++) {
                arr[i] = Integer.parseInt(st.nextToken());
            }

            // 2. DFS를 이용해서 순열 만들기
            dfs(0);

            // 5. 출력
            System.out.println(max);
        }

        private static void dfs(int index) {
            if (index == n) {
                // System.out.println( Arrays.toString(tmpArr) );

                // 3. 완전탐색
                int sum = 0;
                for (int i=0; i<n-1; i++) {
                    sum += Math.abs(tmpArr[i] - tmpArr[i+1]);
                }
                // 4. 최대값 계산
                max = Math.max(max, sum);

                return;
            }

            for (int i=0; i<n; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    tmpArr[index] = arr[i];
                    dfs(index + 1);
                    // 한 번 선택한 숫자를 다시 되돌려 놓고 다음에 또 다른 숫자를 선택해보는 구조 → 백트레킹
                    visited[i] = false;
                }
            }
        }
    }
    ```
## 3. 🔍 문제 회고
**입력된 숫자의 개수가 최대 8개라는 점을 보고 완전탐색이 가능하다고 판단했다.** 하지만 배열의 숫자들을 어떤 순서로 나열해서 조합을 만들지 고민하던 중 **검색을 통해 DFS를 이용해서 모든 가능한 순서를 만들 수 있다는 사실을 알게 되었다.**

이 문제는 주어진 숫자들을 한 번씩만 사용해 인접한 수들의 차이의 총합이 가장 큰 순서를 찾는 것이 목표였다.

**DFS를 활용하여 숫자들을 한 번씩만 사용해 만들 수 있는 모든 순서를 생성했고 각 순서에 대해 인접한 숫자들의 차이를 모두 더한 후 Math.max()를 이용해 최댓값을 갱신했다.**

문제는 무리 없이 해결했지만 숫자를 나열하는 방식에 대해 처음부터 스스로 끝까지 시도해보지 못하고 검색에 의존했다는 점은 아쉬웠다. 앞으로는 검색 이전에 작게라도 직접 구현해보며 문제를 탐색해보는 연습이 필요하다고 느꼈다.

## 📚 참조