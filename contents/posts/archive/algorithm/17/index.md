---
title: "[프로그래머스] 프로세스 Java"
description: "프로세스 Java"
date: "2025-06-03"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/42587](https://school.programmers.co.kr/learn/courses/30/lessons/42587)
+ 난이도 : 레벨2

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + 우선순위 큐 생성, index 변수 생성
    + 우선순위 큐에 priorities 배열 담기
    + 우선순위 큐를 순회하면서 index가 location과 같으면 break 다르면 answer 증가
    + answer 반환 
+ 문제점
    + 우선순위 큐를 넣으면 순서가 달라진다.

### 시도2
+ 접근 방법
    + 큐 생성
    + 큐에 priorities 배열 담기
    + 로직 처리
        + 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
        + 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
        + 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
        + 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
    + answer 반환 
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        class Process {
            int index;
            int priority;

            public Process(int index, int priority) {
                this.index = index;
                this.priority = priority;
            }
        }
        
        public int solution(int[] priorities, int location) {
            int answer = 0;
        
            // 1. 큐 생성 - Process를 담는 큐
            Queue<Process> queue = new LinkedList<>();
            
            // 2. 큐에 priorities 배열 담기
            for (int i=0; i<priorities.length; i++) {
                queue.offer(new Process(i, priorities[i]));
            }

            // 3. 로직 처리
            while (!queue.isEmpty()) {
                // - 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
                Process process = queue.poll();
                
                boolean isFlag = false;
                for (Process p : queue) {
                    if (p.priority > process.priority) {
                        isFlag = true;
                        break;
                    }
                }
                
                if (isFlag) {
                    // - 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
                    queue.offer(process);
                } else {
                    // - 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
                    answer++;
                    if (process.index == location) {
                        return answer;
                    }
                }
                
                // - 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
            }
        
            
            // 해당 프로세스가 몇 번째로 실행되는지 return
            return answer;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
문제를 읽고 우선순위 큐를 떠올렸으나 우선순위 큐는 내부적으로 정렬이 되어 원래 프로세스들의 순서가 바뀌기 때문에 위치 정보를 추적하는 데 어려움이 있었다. 이로 인해 정확한 실행 순서를 알기 어려웠다.

+ 🛠 해결 과정
원래 순서와 우선순위를 모두 고려하기 위해 Process라는 클래스를 만들어 인덱스와 우선순위를 멤버변수로 추가하였다. 그리고 큐를 사용해 프로세스들을 순서대로 처리하면서 큐 안에 더 높은 우선순위를 가진 프로세스가 있는지 매번 확인하는 방법을 적용하였다. 이렇게 하니 문제에서 요구하는 실행 순서대로 프로세스를 처리할 수 있었다.

+ ⚠ 개선할 점
현재 구현은 매번 큐를 순회하면서 우선순위가 더 높은 프로세스가 있는지 확인하는데 시간복잡도에 문제가 있는지 확인해보면 좋을 것 같다.

## 참조