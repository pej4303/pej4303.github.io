---
title: "[백준] 단지번호붙이기 Java"
description: "단지번호붙이기 Java"
date: "2025-06-23"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png' 
isPrivate: false
---

## 1. 📝 문제 요약
+ 문제 URL : [https://www.acmicpc.net/problem/2667](https://www.acmicpc.net/problem/2667)
+ 난이도 : 실버1
+ 소요시간 : 40분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 입력
> 2. BFS 탐색
> 3. 오름차순으로 정렬
> 4. 출력

+ 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        static int n;
        static int[][] arr;
        static boolean[][] visited; 

        static List<Integer> list = new ArrayList<>();

        static int[] dx = {-1, 1, 0, 0};
        static int[] dy = {0, 0, -1, 1};

        public static void main(String[] args) throws Exception {
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            n = Integer.parseInt(br.readLine());

            arr = new int[n][n];
            // 방문 배열 만들기
            visited = new boolean[n][n];

            for (int i=0; i<n; i++) {
                String line = br.readLine();
                for (int j=0; j<n; j++) {
                    arr[i][j] = line.charAt(j) - '0';
                }
            }

            // 2. 전체를 탐색하면서 BFS 실행
            for (int i=0; i<n; i++) {
                for (int j=0; j<n; j++) {
                    if (arr[i][j] == 1 && !visited[i][j]) {
                        int result = bfs(i, j);
                        list.add(result);
                    }
                }
            }

            // 3. 오름차순으로 정렬
            list.sort(null);

            // 4. 출력
            System.out.println(list.size());
            list.stream().forEach(System.out::println);
        }

        private static int bfs(int x, int y) {
            int cnt = 1;

            Queue<int[]> queue = new LinkedList<>();
            queue.offer(new int[]{x, y});
            // 방문 표시
            visited[x][y] = true;

            while (!queue.isEmpty()) {
                int[] nowPos = queue.poll();
                int posX = nowPos[0];
                int posY = nowPos[1];
                // 상하좌우(4방향) 확인
                for (int i=0; i<4; i++) {
                    int nx = posX + dx[i];
                    int ny = posY + dy[i];

                    // 범위 체크
                    if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
                        continue;
                    }
                    // 방문 가능한지 확인
                    if (arr[nx][ny] == 1 && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                        cnt++;
                        queue.add(new int[]{nx, ny});
                    }
                }
            }

            return cnt;
        }
    }

    ```
## 3. 🔍 문제 회고
문제에서 '1'로 연결된 영역의 개수와 각 영역의 크기를 구하는 전형적인 탐색 문제였다. BFS를 사용하여 지도 상의 연결된 단지를 탐색하고 각 단지에 포함된 집의 수를 구해 오름차순으로 출력하는 것이 목표였다.

`Queue`를 사용한 `BFS 알고리즘`을 구현하려고 했다. 하지만 평소에 자주 사용하지 않았던 BFS 코드가 잘 기억나지 않아 구현에 시간이 오래 걸렸다. 탐색한 집의 수를 list에 담아 정렬 후 출력하였다.

전형적인 BFS 유형의 문제였지만 익숙하지 않아 구현에 시간이 많이 소요되었고 결국 제한 시간을 초과해 아쉬운 결과를 얻게 되었다. BFS 로직에 대한 기억이 흐릿했던 점이 원인이었고 BFS 기본 패턴을 다시 복습할 필요성을 느꼈다. 그리고 입력을 받을때도 `StringTokenizer` 사용하여 오류가 났었다. 공백이 있을때만 사용 할 수 있는데 실수 하였다.

## 📚 참조