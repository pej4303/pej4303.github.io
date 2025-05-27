---
title: "[프로그래머스] 추억점수 Java"
description: "추억점수 Java"
date: "2025-05-26"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/176963](https://school.programmers.co.kr/learn/courses/30/lessons/176963)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + name 배열과 yearning 배열을 기반으로 이름별 그리움 점수를 조회할 수 있도록 Map 형태로 변환
    + photo 배열을 순회 - for문 이용
    + 이름이 map에 존재하는 경우 해당 점수를 더하고 존재하지 않으면 0을 더한다 - getOrDefault()
    + answer 반환
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        public int[] solution(String[] name, int[] yearning, String[][] photo) {
            int[] answer = new int[photo.length];
            
            // 1. name 배열과 yearning 배열을 기반으로 이름별 그리움 점수를 조회할 수 있도록 Map 형태로 변환
            Map<String, Integer> map = new HashMap<>();
            for (int i=0; i<name.length; i++) {
                map.put(name[i], yearning[i]);
            }
            // 2. photo 배열을 순회 - for문 이용
            for (int i=0; i<photo.length; i++) {
                for (int j=0; j<photo[i].length; j++) {
                    // 3. 이름이 map에 존재하는 경우 해당 점수를 더하고 존재하지 않으면 0을 더한다 - getOrDefault
                    answer[i] += map.getOrDefault(photo[i][j], 0);
                }
                // System.out.println("answer = " + answer[i]);
            }
            
            // 4. answer 반환
            return answer;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
문제를 처음 접했을 때  name 배열과 yearning 배열을 Map으로 변환하는 방식으로 하면 빠르게 풀 수 있을것같았다.

+ 🛠 해결 과정
name과 yearning 배열을 순회하며 이름별 점수를 `Map<String, Integer>` 형태로 구성하였다. 각 photo마다 등장하는 이름들을 순회하면서 getOrDefault()로 점수를 누적하였고 사진별 총 점수를 answer 배열에 저장 후 반환하였다.

+ ✅ 잘한 점
문제의 조건이 복잡하지 않아 빠르게 구현이 가능했고 자료구조 선택만 잘하면 효율적으로 해결할 수 있는 문제였다.

## 참조