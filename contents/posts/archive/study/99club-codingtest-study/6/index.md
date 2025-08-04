---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 6일차 TIL + DFS/BFS"
description: "99클럽 코테 스터디 6일차 TIL + DFS/BFS"
date: "2025-04-07"
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
+ DFS/BFS
+ 문제 URL : https://www.acmicpc.net/problem/4963

## 2. 공부한 내용 본인의 언어로 정리하기
+ 소스 코드
    + 시도1
    ````java
    import java.io.*;
    import java.util.*;

    public class Main {
        /**
        * 8방향
        *(-1,-1)  (-1,0)  (-1,1)
        *( 0,-1)   x,y    ( 0,1)
        * ( 1,-1)  ( 1,0)  ( 1,1)
        */
        static int[] dx = {-1, -1, -1, 0, 0, 1, 1, 1};
        static int[] dy = {-1, 0, 1, -1, 1, -1, 0, 1};
        
        static int[][] arr = null;
        static boolean[][] visited = null;

        static int h = 0;
        static int w = 0;

        public static void main(String[] args) throws Exception {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            while (true) {
                String[] tmpArr = br.readLine().split(" ");
                
                w = Integer.parseInt(tmpArr[0]);
                h = Integer.parseInt(tmpArr[1]);

                if (w == 0 && h == 0) {
                    break;
                }

                arr = new int[h][w];
                visited = new boolean[h][w];
                
                // 입력 다 받기
                for (int i=0; i<h; i++) {
                    String[] strArr = br.readLine().split(" ");
                    for (int j=0; j<w; j++) {
                        arr[i][j] = Integer.parseInt(strArr[j]);
                    }
                }

                int cnt = 0;
                for (int i=0; i<h; i++) {
                    for (int j=0; j<w; j++) {
                        // 육지이면서 방문 안한 경우에만
                        if (arr[i][j] == 1 && !visited[i][j]) {
                            dfs(i, j);
                            // bfs(i, j);
                            cnt++;
                        }
                    }
                }

                System.out.println(cnt);
            }
        }

        public static void dfs(int x, int y) {
            // 방문 표시
            visited[x][y] = true;

            // 대각선까지 포함해서 8방향 탐색
            for (int i=0; i<8; i++) {
                int nx = x + dx[i];   // 다음 행
                int ny = y + dy[i];   // 다음 열
                // 배열 범위 안인지 체크
                if (nx >= 0 && ny >= 0 && nx < h && ny < w) {
                    // 육지이면서 방문하지 않았다면 DFS 재귀 호출
                    if (arr[nx][ny] == 1 && !visited[nx][ny]) {
                        dfs(nx, ny);
                    }
                }
            }
        }
        
        public static void bfs(int x, int y) {
            Queue<int[]> queue = new LinkedList<>();
            queue.offer(new int[]{x, y});
            visited[x][y] = true;

            while (!queue.isEmpty()) {
                int[] now = queue.poll();
                int curX = now[0];
                int curY = now[1];

                for (int i = 0; i < 8; i++) {
                    int nx = curX + dx[i];
                    int ny = curY + dy[i];

                    if (nx >= 0 && ny >= 0 && nx < h && ny < w) {
                        if (arr[nx][ny] == 1 && !visited[nx][ny]) {
                            visited[nx][ny] = true;  // 방문 처리
                            queue.offer(new int[]{nx, ny});
                        }
                    }
                }
            }
        }
    }

    ````

## 3. 오늘의 회고
+ 문제 상황과 시도
이전에 DFS 알고리즘 문제를 풀어본 경험이 있었지만 이번 문제 풀이에서는 제대로 적용하지 못했다.

+ 해결 과정
검색을 통해 다양한 접근 방식을 참고했다.

+ 배운 점
DFS/BFS 알고리즘에 대한 이해를 높이기 위해 더 많은 문제를 풀어봐야겠다.