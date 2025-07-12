---
title: "[백준] 숨바꼭질 Java"
description: "숨바꼭질 Java"
date: "2025-07-12"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png' 
isPrivate: false
---

## 1. 📝 문제 요약
+ 문제 URL : [https://www.acmicpc.net/problem/1697](https://www.acmicpc.net/problem/1697)
+ 난이도 : 실버1
+ 소요시간 : 31분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 입력
> 2. 방문배열 만들기
> 3. bfs으로 탐색
>   3.1. 큐에는 [현재 위치, 시간] 형태로 데이터를 저장
>   3.2. 큐에서 하나씩 꺼내며 현재 위치가 동생의 위치와 같다면 종료한다.
>        그렇지 않으면 현재 위치에서 이동 가능한 세 가지 경우(앞으로 한 칸, 뒤로 한 칸, 순간이동)를 탐색하고
>        아직 방문하지 않은 위치라면 큐에 넣고 방문 처리한다.
> 4. 출력

+ 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        static boolean[] visited;
        static int result = 0;
        static int n = 0;
        static int k = 0;

        public static void main(String[] args) throws Exception {
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            StringTokenizer st = new StringTokenizer(br.readLine());
            n = Integer.parseInt(st.nextToken());   // 수빈 위치
            k = Integer.parseInt(st.nextToken());   // 동생 위치

            // 2. 방문배열 만들기
            visited = new boolean[100001];

            // 3. bfs 처리
            bfs(n, k);

            // 4. 출력
            System.out.println(result);
        }

        private static void bfs(int start, int end) {
            // 1. 큐 생성
            Queue<int[]> queue = new LinkedList<>();
            queue.add(new int[]{start, 0});

            // 2. 방문배열 표시
            visited[start] = true;

            while (!queue.isEmpty()) {
                int[] cur = queue.poll();
                int pos = cur[0];
                int cnt = cur[1];

                // 동생을 찾았음
                if (pos == end) {
                    result = cnt;
                    return;
                }

                // 지금 위치에서 갈 수 있는 3가지 위치를 탐색하면서 아직 안 가본 곳이면 큐에 넣는다.
                // 시간도 +1 해준다.
                int[] moveArr = {pos - 1, pos + 1, pos * 2};
                for (int move : moveArr) {
                    if ((0 <= move && move <= 100000) && !visited[move]) {
                        visited[move] = true;
                        queue.add(new int[]{move, cnt + 1});
                    }
                }

            }
        }
    }
    ```
## 3. 🔍 문제 회고
문제을 읽고 가장 빠른 시간이 몇 초 후인지 구하는 문제여서 bfs문제라고 생각이 들었다.

방문배열과 큐에 넣을때 어떤 자료구조로 해야될까 고민을 많이 하였다. 방문배열은 범위에 맞는 0 ~ 100000까지만 하면 되니까 int 배열로 선언하였고, 큐에는 현재 위치와 시간을 같이 넣어야 되어서 int 배열로 선언하였다.

핵심 로직인 "다음에 탐색할 위치를 어떻게 정의하고 큐에 넣을지" 에서 약간의 막힘이 있었지만
결국 현재 위치에서 -1, +1, *2의 세 가지 이동을 모두 시도하면서 방문하지 않은 위치만 큐에 넣으면 된다는 단순한 원리였다.

## 📚 참조