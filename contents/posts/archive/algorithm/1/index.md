---
title: "[BOJ] 백준 1012 유기농 배추 Java"
description: "백준 1012 유기농 배추 Java"
date: "2025-04-26"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : https://www.acmicpc.net/problem/1012
+ 난이도 : 실버2 
+ 문제 내용 : 배추가 심어진 곳끼리 연결되어 있으면 하나의 "덩어리"로 보고 총 몇 개의 덩어리가 있는지 세는 문제이다.
## 2. 내 풀이 방법
+ BFS 알고리즘을 이용하였다.
+ 소스 코드
```java
import java.io.*;
import java.util.*;

public class Main {
    static int[][] arr = null;
    static boolean[][] visited = null;
    static int result = 0;

    static int m = 0;
    static int n = 0;

    // 상하좌우 이동
    static int[] dx = {-1, 1, 0, 0};
    static int[] dy = {0, 0, -1, 1};

    public static void main(String[] args) throws IOException {
        String[] tmpArr = null;

        // 1. 입력
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // 테스트케이스
        int t = Integer.parseInt(br.readLine());

        for (int index=0; index<t; index++) {
            tmpArr = br.readLine().split(" ");
            // 배추밭의 가로길이 M
            m = Integer.parseInt(tmpArr[0]);
            // 배추밭의 세로길이 N
            n = Integer.parseInt(tmpArr[1]);
            // 배추가 심어져 있는 위치의 개수 K
            int k = Integer.parseInt(tmpArr[2]);

            // 2. 인접행렬 만들기
            arr = new int[m][n];

            for (int i=0; i<k; i++) {
                tmpArr = br.readLine().split(" ");
                int a = Integer.parseInt(tmpArr[0]);
                int b = Integer.parseInt(tmpArr[1]);

//                System.out.println(a + " / " + b);

                arr[a][b] = 1;
            }

            // 3. 방문배열 만들기
            visited = new boolean[m][n];

            result = 0;

            // 4. 탐색
            for (int i=0; i<m; i++) {
                for (int j=0; j<n; j++) {
                    if (arr[i][j] == 1 && !visited[i][j]) {
                        bfs(i, j);
                        result++;
                    }
                }
            }

            // 5. 출력
            System.out.println(result);
        }
    }

    static void bfs (int x, int y) {
        visited[x][y] = true;

        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[] {x, y});

        while(!queue.isEmpty()) {
            int[] node = queue.poll();

            int nowX = node[0];
            int nowY = node[1];

            for (int i=0; i<4; i++) {
                int nx = nowX + dx[i];
                int ny = nowY + dy[i];

                if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
                    if (arr[nx][ny] == 1 && !visited[nx][ny]) {
                        queue.add(new int[] {nx, ny});
                        visited[nx][ny] = true;
                    }
                }
            }
        }
    }
}
``` 

## 3. 문제 회고
+ 시도
문제를 읽고 BFS 알고리즘과 4방향 탐색(상하좌우)이 필요하다고 빠르게 판단했다.
`(0,0)` 위치에서만 BFS 탐색을 시도했다.

+ 해결 과정
`(0,0)`만 탐색하면 전체 영역을 탐색하지 못하는 문제를 발견했다.
이후 배열 전체를 순회하며 방문하지 않은 영역마다 BFS를 수행하는 방식으로 접근을 수정했다.

+ 잘한 점
문제를 읽자마자 BFS로 해결해야 한다는 판단을 빠르게 내렸다.
DFS/BFS 문제를 여러 번 풀어본 경험이 도움이 되었다.

+ 개선할 점
BFS + 4방향 탐색까진 좋았지만 "전체 배열을 순회하며 시작점을 찾아야 한다"는 기본적인 접근을 처음부터 놓쳤다.

## 참조