---
title: "[프로그래머스] 바탕화면 정리 Java"
description: "바탕화면 정리 Java"
date: "2025-05-23"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/161990](https://school.programmers.co.kr/learn/courses/30/lessons/161990)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + wallpaper 순회 - for문 이용
    + lux, luy, rdx, rdy 값 갱신
    + answer 배열에 lux, luy, rdx, rdy 값 저장
+ 소스 코드
    ```java
    class Solution {
        public int[] solution(String[] wallpaper) {
        int lux = Integer.MAX_VALUE;
            int luy = Integer.MAX_VALUE;
            int rdx = Integer.MIN_VALUE;
            int rdy = Integer.MIN_VALUE;
            int[] answer = new int[4];
            
            // 1. wallpaper 순회 - for문 이용
            for (int i=0; i<wallpaper.length; i++) {
                char[] arr = wallpaper[i].toCharArray();
                for (int j=0; j<arr.length; j++) {
                    if ( '#' == arr[j] ) {
                        //System.out.println("i = " + i);
                        //System.out.println("j = " + j);
                        
                        // 2. lux, luy, rdx, rdy 값 갱신 - Math.min(), Math.max() 이용
                        lux = Math.min(lux, i);
                        luy = Math.min(luy, j);
                        
                        rdx = Math.max(rdx, i+1);
                        rdy = Math.max(rdy, j+1);
                        
                        /*
                        System.out.println("lux = " + lux);
                        System.out.println("luy = " + luy);
                        System.out.println("rdx = " + rdx);
                        System.out.println("rdy = " + rdy);
                        */
                    }
                }
            }
            
            /*
            System.out.println("lux = " + lux);
            System.out.println("luy = " + luy);
            System.out.println("rdx = " + rdx);
            System.out.println("rdy = " + rdy);
            */
            
            answer[0] = lux;
            answer[1] = luy;
            answer[2] = rdx;
            answer[3] = rdy;
            
            return answer;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
처음에는 단순히 이차원 배열을 순회하면서 #의 위치를 파악하고자 했다. 좌표의 최소값, 최대값을 추적하는 방식으로 접근하면 된다는 생각이이 바로 떠올랐다.

+ 🛠 해결 과정
각 줄을 char[]로 변환해 이중 반복문으로 탐색하며 # 문자의 좌표를 확인하고 그에 따라 lux, luy, rdx, rdy 값을 실시간으로 갱신했다. Math.min()과 Math.max()를 이용해 깔끔하게 최소,최대 좌표를 계산할 수 있었다.

+ ✅ 잘한 점
불필요한 자료구조 없이 최소,최대 좌표만 추적하는 방식으로 효율적으로 구현했다. 좌표 계산 시 오른쪽 아래 끝 점을 +1 처리한 것도 문제 조건을 정확히 반영한 부분이다.

+ ⚠ 개선할 점
단순 구현 문제였지만 조건 중 "드래그 시 (rdx, rdy)는 파일이 포함되는 좌표의 다음 칸까지 포함해야 함"을 처음에 놓칠 뻔했다. 문제 설명을 끝까지 꼼꼼히 읽는 습관을 유지해야겠다.

## 참조