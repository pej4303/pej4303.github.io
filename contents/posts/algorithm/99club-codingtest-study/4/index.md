---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 4일차 TIL + DFS/BFS"
description: "99클럽 코테 스터디 4일차 TIL + DFS/BFS"
date: "2025-04-03"
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
+ 문제 URL : https://www.acmicpc.net/problem/2468

## 2. 공부한 내용 본인의 언어로 정리하기
+ DFS(깊이 우선 탐색, Depth-First Search)
    + 그래프를 탐색할 때 한 방향으로 갈 수 있을 만큼 깊이 들어가고 더 이상 갈 곳이 없으면 뒤로 돌아와 다른 경로를 탐색하는 방식이다.
    + 스택(Stack) 또는 재귀를 사용해서 구현한다.
    + 사용 사례: 백트래킹, 퍼즐(미로 찾기, 체스 나이트 이동 등), 위상 정렬
+ BFS(너비 우선 탐색, Breadth-First Search)
    + 그래프를 탐색할 때 가까운 노드부터 차례대로 방문하는 방식이다.
    + 큐(Queue)를 이용해 구현한다.
    + 사용 사례: 최단 경로 찾기(미로, GPS), 네트워크 탐색, 웹 크롤링

+ 소스 코드
    + 시도1
    ````java
    import java.io.*;
    import java.util.StringTokenizer;

    public class Main {

        static boolean[][] visited = null;
        // 방향 벡터 (상, 하, 좌, 우)
        static int[] dx = {-1, 1, 0, 0};
        static int[] dy = {0, 0, -1, 1};

        static int n = 0;
        static int[][] arr = null;

        public static void main(String[] args) throws Exception {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            n = Integer.parseInt(br.readLine());

            StringTokenizer st = null;
            arr = new int[n][n];
            int maxHeight = 0;
            int minHeight = 101;

            // 2차원배열 생성
            for (int i=0; i<n; i++) {
                st = new StringTokenizer(br.readLine());
                for (int j=0; j<n; j++) {
                    arr[i][j] = Integer.parseInt(st.nextToken());
                    maxHeight = Math.max(maxHeight, arr[i][j]);
                    minHeight = Math.min(minHeight, arr[i][j]);
                }
            }

            int maxCnt = 1;
            for (int h=minHeight; h<=maxHeight; h++) {
                visited = new boolean[n][n];
                int cnt = 0;

                for (int x=0; x<n; x++) {
                    for (int y=0; y<n; y++) {
                        if (arr[x][y] > h && !visited[x][y]) {
                            dfs(x, y, h);
                            cnt++;
                        }
                    }
                }

                maxCnt = Math.max(maxCnt, cnt);
            }

            // 출력
            System.out.println(maxCnt);
        }

        public static void dfs(int x, int y , int h) {
            visited[x][y] = true;

            for (int i=0; i<4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];

                if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                    if (!visited[nx][ny] && arr[nx][ny] > h) {
                        dfs(nx, ny, h);
                    }
                }
            }
        }
    }
    ````

## 3. 오늘의 회고
+ 문제 상황과 시도
문제를 이해하는 것조차 쉽지 않았다. 특히 물에 잠기지 않는 높이가 왜 존재하지 않는지 의문이 들었지만 결국 모든 경우의 수를 구하는 방식이라는 것을 깨달았다. 
또한 DFS와 BFS 알고리즘을 적용하는 과정도 어려움을 겪었다.

+ 해결 과정
이번 문제는 구현 방법이 쉽게 떠오르지 않아서 검색을 통해 다양한 접근 방식을 참고했다.

+ 배운 점
문제를 정확히 이해하는 것이 중요하며 직관적으로 해결 방법이 떠오르지 않을 때는 검색을 통해 다른 사람들의 접근 방식을 참고하는 것도 좋은 학습 방법이다.
검색을 통해 알게된 방식을 스스로 이해하고 정리하여 구현해보는 과정을 해보자.