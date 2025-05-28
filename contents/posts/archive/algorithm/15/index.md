---
title: "[프로그래머스] 크레인 인형뽑기 게임 Java"
description: "크레인 인형뽑기 게임 Java"
date: "2025-05-28"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/64061](https://school.programmers.co.kr/learn/courses/30/lessons/64061)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + 바구니 생성 - 스택 이용
    + moves 배열을 순회 - for문 이용
    + 각 항목을 순회하면서 해당 열에 맨 첫번째 값을 찾기
    + 찾은값이 스택의 첫번째값이랑 같으면 pop() 아니면 push()
    + answer return
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        public int solution(int[][] board, int[] moves) {
            int answer = 0;
            // 0. 바구니 생성 - 스택 이용
            Stack<Integer> stack = new Stack<>();
            // 1. moves 배열을 순회 - for문 이용
            for (int i=0; i<moves.length; i++) {
                int col = moves[i] - 1;
                // 2. 각 행을 순회하면서 해당 열에 맨 첫번째 값을 찾기
                for (int row=0; row<board.length; row++) {
                    int now = board[row][col];
                    if (now != 0) {
                        // 3. 찾은값이 스택의 첫번째값이랑 같으면 pop() 아니면 push()
                        if (!stack.isEmpty() && stack.peek() == now) {
                            stack.pop();  // 기존 인형 제거 
                            answer += 2;  // 두 인형이 없어짐 (2개 터짐)
                        } else {
                            stack.push(now);
                        }
                        // 인형 뽑았다는 표시
                        board[row][col] = 0;
                        break;
                    } 
                }
            }
            
            return answer;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
처음 문제를 보고 인형을 하나씩 꺼내 바구니에 담는 구조가 스택과 유사하다고 판단했다. 그래서 바구니를 Stack으로 구현하고 인형이 두 개 연속으로 겹칠 경우 제거되는 로직을 중심으로 설계를 시작했다.

+ 🛠 해결 과정
moves 배열을 순회하면서 각 열에서 인형을 하나씩 꺼낸다. 꺼낸 인형이 바구니의 맨 위 인형과 같으면 두 인형을 제거하고 answer를 추가한다. 그렇지 않으면 바구니에 인형을 넣는다.

+ ✅ 잘한 점
문제를 보고 스택을 활용해야겠다는 구조적 접근이 적절하였고 생각한대로 코드로 구현했을때 별다른 오류없이 바로 테스트 케이스를 통과하였다.

+ ⚠ 개선할 점
설계 흐름을 생각하는데 시간을 많이 지체하여 제한 시간 30분 안에 풀지 못하였다.

## 참조