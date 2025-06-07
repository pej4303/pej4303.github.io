---
title: "[프로그래머스] 기능 개발 Java"
description: "기능 개발 Java"
date: "2025-06-07"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/42586](https://school.programmers.co.kr/learn/courses/30/lessons/42586)
+ 난이도 : 레벨2

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + process 라는 클래스를 생성, List<Integer> 타입도 하나 생성
    + Stack<Process> 타입으로 생성하여 작업 진도와 개발 속도를 함께 체크
    + progresses 배열을 스택으로 변환 
    + 스택을 순회하면서 해당값이 100이 되면 pop()
        + 그 다음값도 100이 되는지 체크
    + answer 반환
+ 문제점
    + 문제의 진행 순서는 앞에서부터 순서대로 처리되어야 하며 `Stack`(후입선출)은 부적절하다.
    + 선입선출(FIFO)에 해당하는 Queue 또는 일반 for 순회가 더 적절하다.
    + 작업 완료 순서를 정확히 유지하기 어렵다.
    + 불필요한 클래스 생성 및 자료구조 사용으로 복잡도 증가한다.

### 시도2
+ 접근 방법
    + 각 기능이 완료되기까지 걸리는 날짜 계산 - for문
    + 로직 처리
        + 첫 번째 작업의 완료일을 기준 - pivot
        + 순회하며 pivot보다 작거나 같으면 같은 날 배포
        + 더 크면 새로운 배포 시작
    + answer 반환
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        public int[] solution(int[] progresses, int[] speeds) {
            int[] answer = {};
            
            int[] days = new int[progresses.length];
            List<Integer> list = new ArrayList<>();
            
            // 1. 각 기능이 완료되기까지 걸리는 날짜 계산 - for문
            for (int i=0; i<days.length; i++) {
                days[i] = (int) Math.ceil( (100.0 - progresses[i]) / speeds[i]);

            }
            // System.out.println( Arrays.toString(days) );
            
            // 2. 로직 처리
            int pivot = days[0];
            int cnt = 1;

            for (int i=1; i<days.length; i++) {
                if (days[i] <= pivot) {
                    // 순회하며 pivot보다 작거나 같으면 같은 날 배포
                    cnt++;
                } else {
                    // 더 크면 새로운 배포 시작
                    list.add(cnt);

                    // 기준점 변경, cnt 초기화
                    pivot = days[i];
                    cnt = 1;
                }
            }
            
            // 마지막 배포 그룹 담기
            list.add(cnt);
            
            // List -> 배열로 변환
            answer = list.stream().mapToInt(Integer::intValue).toArray();
            
            // 3. answer 반환
            return answer;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
초기에는 Process 클래스를 만들고 Stack을 활용하는 구조로 설계했지만 기능이 앞에서부터 순차적으로 배포된다는 문제 조건을 간과해 적절하지 않은 선택이었다. 이후 각 작업의 완료까지 남은 일수를 미리 계산하고 앞선 작업을 기준으로 같은 날 배포할 수 있는 작업들을 묶는 방식으로 접근해 문제를 해결했다.

+ 🛠 해결 과정
Math.ceil()을 사용해 각 기능의 완료일을 정확하게 계산하고 기준일(pivot)보다 빠르거나 같은 작업은 함께 배포했다. 이후 더 늦게 완료되는 작업이 나오면 배포를 나누고 해당 작업을 새로운 기준일로 설정했다. 각 배포 그룹의 개수를 리스트에 저장한 후 최종적으로 배열로 변환해 반환했다.

+ ⚠ 개선할 점
문제의 **처리 순서(선입선출인지 후입선출인지)**를 명확히 파악한 뒤, 이에 맞는 자료구조를 선택해야 한다. 또한, 꼭 자료구조를 사용할 필요가 있는지, 단순한 반복문으로 해결 가능한지도 먼저 고려해보는 습관을 들이자. 정수 나눗셈에서는 double형으로 형 변환 후 Math.ceil()을 사용하는 방식이 정확한 계산을 위해 필요하다는 점도 주의해야 한다.

## 참조