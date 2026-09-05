---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 17일차 TIL + DFS/BFS"
description: "99클럽 코테 스터디 17일차 TIL + DFS/BFS"
date: "2025-04-22"
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
+ 문제 URL : https://www.acmicpc.net/problem/18126

## 2. 공부한 내용 본인의 언어로 정리하기
+ 시도1(틀림)
    + 접근 방법 
        + 인접행렬을 이용해서 가장 먼 거리를 구했으나 틀렸다.
+ 시도2(틀림)
    + 접근 방법
        + 인접 리스트를 이용해서 풀어보았다.
+ 시도3(맞음)
    + 접근 방법
        + 구글링도 해보고 GPT한테도 반례를 찾아보았으나 무엇때문에 틀린지 몰랐으나.. 자료형의 문제였다.
    + 소스코드
    ```java
    import java.io.*;
    public class Main {
        static int[][] arr = null;  // 인접행렬
        static boolean[] visited = null;    // 방문배열

        static long result = 0;

        public static void main(String[] args) throws IOException {
            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int n = Integer.parseInt(br.readLine());

            // 2. 인접행렬 만들기
            arr = new int[n+1][n+1];
            for (int i=0; i<n-1; i++) {
                String[] tmp = br.readLine().split(" ");
                int a = Integer.parseInt(tmp[0]);
                int b = Integer.parseInt(tmp[1]);
                int c = Integer.parseInt(tmp[2]);
                // A번 방과 B번 방 사이를 양방향으로 연결하는 길의 길이가 C임을 의미한다.
                arr[a][b] = c;
                arr[b][a] = c;
            }
            // 3. 방문배열 만들기
            visited = new boolean[n+1];
            // 4. 탐색
            dfs(1, 0);

            // 5. 출력
            System.out.println(result);
        }

        private static void dfs(int node, long dist) {
            // 방문여부 표시
            visited[node] = true;

            // 최대 거리 갱신
            if (dist > result) {
                result = dist;
            }
            // System.out.println("dist = " +dist);

            // 재귀
            for (int i=1; i<arr.length; i++) {
                if (arr[node][i] != 0 && !visited[i]) {
                    // System.out.println("출력 = " + (dist + arr[node][i]));
                    dfs(i, dist + arr[node][i]);
                }
            }
        }
    }
    ```
    
## 3. 오늘의 회고
+ 문제 상황과 시도   
"양방향"이라는 단어와 가장 먼 거리를 구하는 문제로 판단했다. DFS 또는 BFS를 활용하면 풀 수 있겠다고 생각했고 그 방향으로 접근했다.

+ 해결 과정   
문제 자체는 잘 파악했지만 int형 오버플로우는 전혀 예상하지 못했다. long형으로 변경하니 정답이 나와서 허무한 느낌이 들었다. ㅠㅠ

+ 배운 점   
문제를 읽고 적절한 알고리즘을 떠올린 점은 잘했다. 하지만 큰 수가 나올 수 있는 경우를 항상 염두에 두고 웬만하면 int보다는 long을 사용하는 습관을 들이자.