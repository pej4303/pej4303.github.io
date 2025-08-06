---
title: "[작심큰일] 작심큰일 2일차 TIL"
description: "[작심큰일] 작심큰일 2일차 TIL"
date: "2025-08-05"
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
+ 문제 URL : [https://www.acmicpc.net/problem/2468](https://www.acmicpc.net/problem/2468)
+ 난이도 : 백준 실버1
+ 소요시간 : 40분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 입력
> 2. 배열, 방문배열 생성
> 3. bfs
>    + 방문배열, 안전영역개수 초기화
>    + 영역 순회
>    + 현재 높이가 h보다 크고(침수되지 않았고), 방문하지 않은 영역인 경우만 bfs 탐색
> 4. 출력

+ 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        public static int n;
        public static int[][] arr;
        public static boolean[][] visited;    // 방문배열
        // 4방향 체크
        public static int[] dx = {0, 0, 1, -1};
        public static int[] dy = {1, -1, 0, 0};

        public static void main(String[] args) throws Exception {
            StringTokenizer st = null;
            int maxHeight = -1;    // 최대 높이
            int maxResult = -1;    // 최대 안전 영역 개수

            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            n = Integer.parseInt(br.readLine());

            // 2. 배열, 방문배열 생성
            arr = new int[n][n];
            visited = new boolean[n][n];

            for (int i=0; i<n; i++) {
                st = new StringTokenizer(br.readLine());
                for (int j=0; j<n; j++) {
                    arr[i][j] = Integer.parseInt(st.nextToken());
                    maxHeight = Math.max(maxHeight, arr[i][j]);
                }
            }

            // 3. bfs
            // 0부터 최대 높이까지만 순회
            for (int h=0; h<=maxHeight; h++) {
                // 3-1. 방문배열, 안전영역개수 초기화
                visited = new boolean[n][n];
                int result = 0;

                // 3-2. 영역 순회
                for (int i=0; i<n; i++) {
                    for (int j=0; j<n; j++) {
                        // 3-3. 현재 높이가  h보다 크고(침수되지 않았고), 방문하지 않은 영역인 경우만 bfs 탐색
                        //     => 불필요한 탐색을 줄여준다.
                        if (arr[i][j] > h && !visited[i][j]) {
                            bfs(i, j, h);
                            result++;
                        }
                    }
                }

                maxResult = Math.max(maxResult, result);
            }

            // 4. 출력
            System.out.println(maxResult);
        }

        // bfs 탐색
        private static void bfs(int x, int y, int height) {
            Queue<int[]> queue = new LinkedList<>();
            queue.add(new int[]{x, y});

            visited[x][y] = true;

            // 큐가 빈값이 아닐때까지
            while (!queue.isEmpty()) {
                int[] cur = queue.poll();
                int posX = cur[0];
                int posY = cur[1];

                for (int i=0; i<4; i++) {
                    int nx = posX + dx[i];
                    int ny = posY + dy[i];

                    // 범위 체크
                    if (nx >= 0 && nx <n && ny >= 0 && ny < n) {
                        if (!visited[nx][ny] && height < arr[nx][ny]) {
                            // 방문 표시
                            visited[nx][ny] = true;
                            queue.add(new int[]{nx, ny});
                        }
                    }
                }
            }
        }
    }
    ```
## 3. 🔍 문제 회고
전형적인 BFS 문제였다. 몇 달 전에 한 번 풀었던 기억이 있지만 오랜만에 다시 보니 구현 방법이 정확하게 기억나지 않아 처음부터 차근차근 다시 접근했다. 특히 침수되지 않은 영역만 탐색해야 하는 조건인 `height < arr[nx][ny]` 부분을 처음에 빠뜨려서 디버깅에 꽤 시간을 허비했다. DFS를 이용해서도 풀었으나 BFS와 속도 차이는 크게 차이 나지 않았다.

## 📚 참조
