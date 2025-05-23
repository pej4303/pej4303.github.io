---
title: "[프로그래머스] 프로그래머스 [카카오 인턴] 키패드 누르기 Java"
description: "프로그래머스 [카카오 인턴] 키패드 누르기 Java"
date: "2025-05-04"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/67256](https://school.programmers.co.kr/learn/courses/30/lessons/67256)
+ 난이도 : Lv.1
+ 문제 내용 : 

## 2. 내 풀이 방법

+ 시도1
    + 접근 방법
        + 문제의 설명대로 구현하였으며 2, 5, 8, 0과 같은 번호에 대해 거리를 계산해야 한다는 점을 고려하였다.
        + 손의 위치를 갱신하며 각 번호의 거리 계산을 통해 더 가까운 손을 결정한다.
        + 4방향 이동이 가능한 격자형 문제이므로 **맨해튼 거리**를 사용하여 두 손의 거리를 비교하였다.
    
    > 맨해튼 거리(Manhattan Distance)란?
    > + 두 점 사이의 "직선 거리"가 아닌 격자 형태로 이동하는 거리를 나타내는 방식이다.
    > + 격자형 평면에서 두 점이 있을 때 각 점의 x 좌표와 y 좌표를 이용하여 이동하는 데 드는 최소 거리를 계산하는 방법을 말한다.
    > + 두 점 (x1, y1) , (x2, y2)가 있을때 맨해튼 거리는 다음과 같이 계산된다.
    >   + x1-x2 + y1-y2

    + 소스 코드
    ```java
    import java.util.*;
    class Solution {
        static Map<String, int[]> map = null;
        
        public String solution(int[] numbers, String hand) {
            StringBuilder answer = new StringBuilder();
            
            map = new HashMap<>();
            map.put("1", new int[]{0, 0});
            map.put("2", new int[]{0, 1});
            map.put("3", new int[]{0, 2});
            map.put("4", new int[]{1, 0});
            map.put("5", new int[]{1, 1});
            map.put("6", new int[]{1, 2});
            map.put("7", new int[]{2, 0});
            map.put("8", new int[]{2, 1});
            map.put("9", new int[]{2, 2});
            map.put("*", new int[]{3, 0});
            map.put("0", new int[]{3, 1});
            map.put("#", new int[]{3, 2});
            
            String preL = "*";
            String preR = "#";
            
            for (int num : numbers) {
            if (num == 1 || num == 4 || num == 7) {
                answer.append("L");
                preL = String.valueOf(num);
            } else if (num == 3 || num == 6 || num == 9) {
                answer.append("R");
                preR = String.valueOf(num);
            } else {
                // 거리 판단
                String tmp = calcDist(preL, preR, String.valueOf(num), hand);
                answer.append(tmp);
                // 왼손, 오른손 위치 갱신
                if (tmp.equals("L")) {
                        preL = String.valueOf(num);
                } else {
                    preR = String.valueOf(num);
                }
            }
            }
            
            return answer.toString();
        }
        
        // 거리 판단
        private String calcDist(String preL, String preR, String target, String hand) {
            int[] posTarget = map.get(target);
            int[] posLeft = map.get(preL);
            int[] posRight = map.get(preR);

            int distL = Math.abs(posTarget[0] - posLeft[0]) + Math.abs(posTarget[1] - posLeft[1]);
            int distR = Math.abs(posTarget[0] - posRight[0]) + Math.abs(posTarget[1] - posRight[1]);

            if (distL < distR) {
                return "L";
            } else if (distR < distL) {
                return "R";
            } else {
                return hand.equals("left") ? "L" : "R";
            }
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
문제를 읽고 해결을 위해 필요한 알고리즘을 떠올리기 어려웠다. 하지만 문제에서 요구하는 동작을 그대로 구현하자는 접근으로 시작했다.

+ 🛠 해결 과정
문제에서 주어진 키패드에 대한 정보와 거리를 계산하는 방법에 대해 고민하였다. 처음에는 BFS를 생각했으나 격자 형식이므로 맨해튼 거리로 해결 가능하다는 판단을 내렸다.
2, 5, 8, 0 등 중간에 있는 숫자에 대해 거리 계산을 하는 부분이 중요했으며 이를 위해 각 손의 현재 위치를 갱신하며 계산하였다.

+ ✅ 잘한 점
문제를 직관적으로 풀면서 문제의 핵심 구조를 빠르게 파악했다.

+ ⚠ 개선할 점
처음에는 40분 이내에 풀기 목표를 설정했으나 예상보다 시간이 걸렸다.

## 참조