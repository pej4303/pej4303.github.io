---
title: "[프로그래머스] 프로그래머스 문자열 내 마음대로 정렬하기 Java"
description: "문자열 내 마음대로 정렬하기 Java"
date: "2025-05-19"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/12915](https://school.programmers.co.kr/learn/courses/30/lessons/12915)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + strings 순회 - for문 이용
    + strings 정렬시 n번째 글자순으로 - Arrays.sort() 
+ 문제점
    + 이렇게 하면 for문을 할 필요가 없어진다.

### 시도2
+ 접근 방법
    + n번재 글자순으로 정렬되게 - Arrays.sort() 이용
    + Comparator를 재정의하여 n번재 글자를 비교 같으면 글자를 비교 => 시간복잡도 O(n log n)
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        public String[] solution(String[] strings, int n) {
            /*
            방법2)
            1. n번재 글자순으로 정렬되게 - Arrays.sort() 이용
            2. Comparator를 재정의하여 n번재 글자를 비교 같으면 글자를 비교
            => 시간복잡도 O(n log n)
            */
            
            Arrays.sort(strings, (s1, s2) -> {
                // 음수 s1 < s2
                // 같다(0) s1 = s2
                // 양수 s1 > s2
                // 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
                if (s1.charAt(n) == s2.charAt(n)) {
                    return s1.compareTo(s2);
                } else {
                    return Character.compare(s1.charAt(n), s2.charAt(n));
                }
            });
            
            // 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬
            return strings;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
처음에는 for문으로 순회하며 정렬을 직접 구현하려 했지만 Java의 Arrays.sort()와 Comparator를 활용하면 훨씬 간단하고 효율적으로 문제를 해결할 수 있음을 알게 되었다.

+ 🛠 해결 과정
Comparator를 람다식을 이용해서 재정의하여 n번째 문자를 기준으로 정렬하고 만약 두 문자의 값이 같을 경우 전체 문자열을 compareTo()로 비교하여 사전순 정렬을 구현하였다.

+ ✅ 잘한 점
불필요한 반복문 없이 Java의 내장 정렬 기능을 적극 활용하여 깔끔하고 가독성 있는 코드로 작성하였다. 문제 조건을 정확히 반영해 정렬 기준을 적절히 적용하였다.

+ ⚠ 개선할 점
Comparator에 대한 이해가 부족한 부분이 있었으므로 직접 여러 케이스를 만들어 보며 다양한 정렬 기준을 구현해보는 연습이 필요하다.

## 참조