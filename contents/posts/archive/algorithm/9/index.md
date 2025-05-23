---
title: "[프로그래머스] 프로그래머스 명예의 전당1 Java"
description: "명예의 전당1 Java"
date: "2025-05-20"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/138477](https://school.programmers.co.kr/learn/courses/30/lessons/138477)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + k길이 만큼 배열 생성
    + score 순회 - for문 이용
    + score값을 받아서 만든 배열 정렬
    + answer 배열에 k번째 값 저장
+ 문제점
    + 정렬을 매번 수행하면 시간복잡도가 올라간다.

### 시도2
+ 접근 방법
    + 우선순위 큐 생성
    + score 순회 - for문 이용
    + 현재 점수를 우선순위 큐에 추가
    + 큐의 길이가 k를 초과하면 가장 낮은 점수 제거 - poll()
    + 현재 우선순위 큐에서 가장 낮은 점수를 answer에 저장 - peek()
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        public int[] solution(int k, int[] score) {
            int[] answer = new int[score.length];
            
            // 1. 우선순위 큐 생성
            PriorityQueue<Integer> queue = new PriorityQueue<>();
            
            // 2. score 순회 - for문 이용
            for (int i=0; i<score.length; i++) {
                // 3. 현재 점수를 우선순위 큐에 추가
                queue.add(score[i]);
                
                // 4. 큐의 길이가 k를 초과하면 가장 낮은 점수 제거 - poll()
                if (queue.size() > k) {
                    queue.poll();
                }
                
                // 5. 현재 우선순위 큐에서 가장 낮은 점수를 answer에 저장 - peek()
                answer[i] = queue.peek();
            }
            
            // 매일 발표된 명예의 전당의 최하위 점수 
            return answer;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
처음에는 배열을 정렬하면 되지 않을까 생각하였으나 매번 정렬을 수행하면 시간복잡도에 문제가 있지 않을까 생각이 들었다.

+ 🛠 해결 과정
우선순위 큐를 사용하여 항상 가장 낮은 점수를 유지하는 방식으로 문제를 해결했다. 큐에 점수를 넣고 사이즈가 k를 초과할 경우 가장 낮은 점수를 제거하면 자연스럽게 상위 k개의 점수만 유지할 수 있다. 현재 큐의 최소값을 peek()으로 꺼내 answer에 저장하면 매일 발표된 명예의 전당의 최하위 점수를 쉽게 구할 수 있었다.

+ ✅ 잘한 점
단순 정렬 대신 우선순위 큐를 활용하여 효율적인 방식으로 문제를 해결하였다. Java에서 PriorityQueue의 특성을 이해하고 적절히 활용한 점이 좋았다.

+ ⚠ 개선할 점
이 문제는 본질적으로 최소 힙(min-heap) 을 활용하는 문제였다. 처음 지문을 읽었을 때 이를 바로 떠올리지 못했다. 백준 등에서 최소힙/최대힙 문제를 여러 번 풀어봤음에도 불구하고 우선순위 큐를 떠올리지 못한 점이 아쉬웠다. 지문을 읽고 빠르게 판단할 수 있도록 사고력을 더 키워야겠다.

## 참조