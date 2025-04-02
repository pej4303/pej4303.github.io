---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 3일차 TIL + 시뮬레이션"
description: "99클럽 코테 스터디 3일차 TIL + 시뮬레이션"
date: "2025-04-02"
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
+ 시뮬레이션
+ 문제 URL : https://school.programmers.co.kr/learn/courses/30/lessons/161990

## 2. 공부한 내용 본인의 언어로 정리하기
+ 시뮬레이션
    + **문제에서 주어진 조건을 그대로 구현하여 해결하는 방법**을 말한다.
    + 보통 격자 이동, 회전 같은 문제에서 많이 사용된다.
+ 소스 코드
    + 시도1
    ````java
    public static int[] solution(String[] wallpaper) {
        int[] answer = new int[4];
        
        int lux = Integer.MAX_VALUE;  // 상단 왼쪽
        int luy = Integer.MAX_VALUE;  // 상단 오른쪽
        int rdx = 0;                  // 하단 왼쪽
        int rdy = 0;                  // 하단 오른쪽
        
        for (int i=0; i<wallpaper.length; i++) {
            char[] arr = wallpaper[i].toCharArray();
            for (int j=0; j<arr.length; j++) {
                if (arr[j] == '#') {
                    // System.out.println(String.format("x = %d / y = %d", i, j));
                    lux = Math.min(lux, i);
                    luy = Math.min(luy, j);
                    rdx = Math.max(rdx, i + 1);  // 끝점까지 포함시키기 위해서 +1
                    rdy = Math.max(rdy, j + 1);  // 끝점까지 포함시키기 위해서 +1
                }
            }
        }
        
        answer[0] = lux;
        answer[1] = luy;
        answer[2] = rdx;
        answer[3] = rdy;
        
        // System.out.println(Arrays.toString(answer));
        
        return answer;
    }
    ````

## 3. 오늘의 회고
+ 문제 상황과 시도
문제를 읽고 최단 거리를 구해야 한다고 판단하여 DFS나 BFS 알고리즘을 고려했다. 
그러나 검색을 통해 이러한 접근이 필요하지 않다는 것을 알게 되었다.

+ 해결 과정
머릿속에 떠오르는 방식대로 2차원 배열을 만들어 필요한 변수들을 계산하며 문제를 해결했다.

+ 배운 점
지문에서 요구하는 사항을 정확하게 파악하는 습관을 기르자.