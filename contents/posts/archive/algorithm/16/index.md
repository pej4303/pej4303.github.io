---
title: "[프로그래머스] 택배 상자 Java"
description: "택배 상자 Java"
date: "2025-05-31"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/131704](https://school.programmers.co.kr/learn/courses/30/lessons/131704)
+ 난이도 : 레벨2

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + 현재 박스 번호를 나타내는 nowBoxNum 변수, 보조 컨테이너 벨트 생성 - stack 이용
    + while문 이용
    + 로직 처리
        + case1) 메인 컨테이너 벨트에서 박스를 꺼낼 수 있고 그 박스가 order[i]보다 작거나 같을 때 
            + order와 현재 박스 번호가 같으면 트럭에 바로 싣고 다음 order로 이동
            + 그렇지 않으면 보조 컨테이너 벨트에 보관하고 다음 박스로 이동
        + case2) 메인 벨트에서 꺼낼 수 없거나 order[i]가 현재보다 작은 경우  
            + 보조 컨테이너 벨트의 맨 위 박스가 실어야 할 박스면 트럭에 싣기
            + 아니면 더 이상 실을 수 없으므로 종료 - break
    + 위의 과정을 반복하며 order 배열의 끝까지 처리
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        public int solution(int[] order) {
            int answer = 0;
            
            // 1. 현재 박스 번호를 나타내는 nowBoxNum 변수, 보조 컨테이너 벨트 생성 - stack 이용
            // 보조 컨테이너 벨트
            Stack<Integer> stack = new Stack<>();
            
            int nowBoxNum = 1; // 현재 박스 번호
            int i = 0;     // order 배열 인덱스

            // 2. while문 이용
            while (true) {
                // case1) 메인 컨테이너 벨트에서 박스를 꺼낼 수 있고 그 박스가 order[i]보다 작거나 같을 때 
                if (nowBoxNum <= order.length && order[i] >= nowBoxNum) {
                    if (order[i] == nowBoxNum) {
                        // order와 현재 박스 번호가 같으면 트럭에 바로 싣고 다음 order로 이동
                        answer++;
                        i++;
                        nowBoxNum++;
                    } else {
                        // 그렇지 않으면 보조 컨테이너 벨트에 보관하고 다음 박스로 이동
                        stack.push(nowBoxNum++);
                    }
                }
                // case2) 메인 벨트에서 꺼낼 수 없거나 order[i]가 현재보다 작은 경우  
                else {
                    if (!stack.isEmpty() && stack.peek() == order[i]) {
                        // 보조 컨테이너 벨트의 맨 위 박스가 실어야 할 박스면 트럭에 싣기
                        stack.pop();
                        answer++;
                        i++;
                    } else {
                        // 위의 어떤 조건에도 해당하지 않으면 더 이상 실을 수 없음 
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
보조 컨테이너 벨트을 보고 자연스럽게 스택 자료구조를 떠올랐다. 메인 벨트에서는 1번부터 순서대로 박스를 꺼낼 수 있다는 점에서 nowBoxNum 변수를 도입해 접근하였다.

+ 🛠 해결 과정
order 배열의 현재 인덱스 값과 nowBoxNum을 비교하면서 일치하면 바로 트럭에 싣고, 더 크면 보조 벨트에 쌓고,
더 작거나 꺼낼 수 없을 경우에는 보조 벨트에서 확인하는 흐름으로 처리하였다.

+ ⚠ 개선할 점
처음 설계 흐름을 파악하고 코드 구조를 잡는 데 시간이 오래 걸려 제한 시간 내에 문제를 해결하지 못했다. 특히 조건 분기를 세밀하게 구현하는 과정에서 매끄럽지 못한 부분이 있었다. 다른 사람의 풀이를 참고하니 메인 벨트를 큐, 보조 벨트를 스택으로 구현하여 더 직관적이고 깔끔하게 표현한 코드를 확인할 수 있었다. 이러한 구현 방식도 익혀두면 유사 문제에서 보다 유연하게 접근할 수 있을 것으로 생각된다.

## 참조