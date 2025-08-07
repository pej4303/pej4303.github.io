---
title: "[작심큰일] 작심큰일 4일차 TIL"
description: "[작심큰일] 작심큰일 4일차 TIL"
date: "2025-08-07"
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
+ 문제 URL : [https://www.acmicpc.net/problem/18126](https://www.acmicpc.net/problem/18126)
+ 난이도 : 백준 실버2
+ 소요시간 : 32분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 입력
> 2. 인접행렬 만들기, 방문배열 생성
> 3. BFS 탐색을 통해 최대 거리 갱신
> 4. 출력

+ 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        private static int n;               // 노드의 수
        private static int[][] arr;         // 인접행렬
        private static boolean[] visited;   // 방문배열
        private static int result;          // 최대거리

        public static void main(String[] args) throws Exception {
            StringTokenizer st = null;

            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            n = Integer.parseInt(br.readLine());

            // 1번부터 시작이니까 n+1로 설정
            arr = new int[n+1][n+1];

            // 방문배열 생성 => 인접행렬을 방문했다고만 표시하기 위해서 1차원 배열로 선언
            visited = new boolean[n+1];

            // 배열 입력 받기
            for (int i=0; i<n-1; i++) {
                st = new StringTokenizer(br.readLine());

                int a = Integer.parseInt(st.nextToken());
                int b = Integer.parseInt(st.nextToken());
                int c = Integer.parseInt(st.nextToken());

                // A번 방과 B번 방 사이를 양방향으로 연결하는 길의 길이가 C를 의미하니까 이렇게 함
                arr[a][b] = c;
                arr[b][a] = c;
            }

            // 2. bfs => 입구는 1번이라고 해서
            bfs(1, 0);

            // 3. 출력
            System.out.println(result);
        }
        // bfs
        private static void bfs(int node, int dist) {
            Queue<int[]> queue = new LinkedList<>();
            queue.add(new int[]{node, dist});

            visited[node] =  true;

            while (!queue.isEmpty()) {
                int[] cur = queue.poll();
                int pos = cur[0];
                int curDist = cur[1];

                for (int i=1; i<=n; i++) {
                    if (!visited[i] && arr[pos][i] > 0) {
                        // 방문표시
                        visited[i] = true;

                        // 거리 구하기
                        int nextDist = curDist + arr[pos][i];

                        result = Math.max(result, nextDist);

                        queue.add(new int[]{i, nextDist});
                    }
                }
            }
        }
    }
    ```
### 시도2
+ 접근 방법
> 1. 입력
> 2. 인접행렬 만들기, 방문배열 생성
> 3. DFS 탐색을 통해 최대 거리 갱신
> 4. 출력

+ 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        private static int n;               // 노드의 수
        private static int[][] arr;         // 인접행렬
        private static boolean[] visited;   // 방문배열
        private static long result;          // 최대거리

        public static void main(String[] args) throws Exception {
            StringTokenizer st = null;

            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            n = Integer.parseInt(br.readLine());

            // 1번부터 시작이니까 n+1로 설정
            arr = new int[n+1][n+1];

            // 방문배열 생성 => 인접행렬을 방문했다고만 표시하기 위해서 1차원 배열로 선언
            visited = new boolean[n+1];

            // 배열 입력 받기
            for (int i=0; i<n-1; i++) {
                st = new StringTokenizer(br.readLine());

                int a = Integer.parseInt(st.nextToken());
                int b = Integer.parseInt(st.nextToken());
                int c = Integer.parseInt(st.nextToken());

                // A번 방과 B번 방 사이를 양방향으로 연결하는 길의 길이가 C를 의미하니까 이렇게 함
                arr[a][b] = c;
                arr[b][a] = c;
            }

            // 2. dfs => 입구는 1번이라고 해서
            dfs(1, 0);

            // 3. 출력
            System.out.println(result);
        }

        // dfs
        private static void dfs(int node, long dist) {
            // 방문표시
            visited[node] = true;
            // 거리 구하기
            result = Math.max(result, dist);

            for (int i=1; i<=n; i++) {
                if (!visited[i] && arr[node][i] != 0) {
                    dfs(i, arr[node][i] + dist);
                }
            }
        }
    }
    ```

## 3. 🔍 문제 회고
이 문제는 트리 형태의 그래프에서 입구(1번 노드)로부터 가장 멀리 떨어진 노드까지의 거리를 구하는 전형적인 그래프 탐색 문제였다. 모든 노드를 탐색하여 가장 멀리 떨어진 노드까지의 거리를 계산해야 했다. 노드 수가 최대 10만 개까지 주어지므로 시간 복잡도와 메모리 효율성을 고려한 풀이가 필요했다. 또한 거리의 총합이 클 수 있기 때문에 오버플로우 방지도 고려해야 했다.    

먼저 BFS 방식을 사용하여 1번 노드를 시작점으로 탐색을 수행했다. 이후 DFS 방식으로도 같은 로직을 구현하여 두 방식 모두를 비교해봤다. 방문 여부를 확인하기 위해 1차원 방문 배열을 활용했고 그래프는 인접 행렬로 표현했다.
제출 후 오답 처리되어 원인을 분석한 결과 거리 누적 값이 int의 범위를 초과할 수 있다는 것을 확인하고 long 타입으로 변경하여 문제를 해결했다.

## 📚 참조
