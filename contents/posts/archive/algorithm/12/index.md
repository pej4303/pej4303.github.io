---
title: "[프로그래머스] 카드뭉치 Java"
description: "카드뭉치 Java"
date: "2025-05-25"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/159994](https://school.programmers.co.kr/learn/courses/30/lessons/159994)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + cards1, cards2 배열을 큐로 변환
    + goal 배열 순회 - for문 이용
    + 현재 단어가 queue1.peek()이면 queue1.poll() 아니고 queue2.peek()이면 queue2.poll() 둘 다 아니면 return "No"
    + 끝까지 다 순회했다면 return "Yes"
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        public String solution(String[] cards1, String[] cards2, String[] goal) {
            String answer = "Yes";
            
            // 한 번 사용한 카드는 다시 사용할 수 없습니다. => 먼저 들어온 순서대로 꺼내야함(FIFO) => 큐
            // 1. cards1, cards2 배열을 큐로 변환
            Queue<String> queue1 = new LinkedList<>();
            for (String str : cards1) {
                queue1.add(str);
            }
            
            Queue<String> queue2 = new LinkedList<>();
            for (String str : cards2) {
                queue2.add(str);
            }
            
            // 2. goal 배열 순회 - for문 이용
            for (String word : goal) {
                // cards1과 cards2에는 서로 다른 단어만 존재합니다. => 항상 둘 다 없거나, 둘중에 하나만 있다.
                // 3. 현재 단어가 queue1.peek()이면 queue1.poll() 아니고 queue2.peek()이면 queue2.poll() 둘 다 아니면 return "No"
                
                //System.out.println( "word =>" + word );
                //System.out.println( "queue1 =>" + queue1.peek() );
                //System.out.println( "queue2 =>" + queue2.peek() );
                
                if ( word.equals(queue1.peek()) ) {
                    queue1.poll();
                    //System.out.println( "queue1.poll" );
                } else if ( word.equals(queue2.peek()) ) {
                    // queue2.peek()이면 queue2.poll()
                    queue2.poll();
                    //System.out.println( "queue2.poll" );
                } else {
                    // 둘 다 아니면 return "No"
                    answer = "No";
                    break;
                }
            }
            
            return answer;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
문제를 읽고 `"한 번 사용한 카드는 다시 사용할 수 없다"`는 조건과 `"순서를 지켜야 한다"`는 조건에 주목했다. 이 조건을 보고 FIFO 구조인 Queue를 사용하면 적절하겠다고 판단했다.

+ 🛠 해결 과정
cards1과 cards2를 각각 Queue로 변환한 후 goal 배열을 순차적으로 순회하며 각 단어가 어떤 큐의 맨 앞에 있는지 확인했다.
queue1.peek()과 queue2.peek()를 비교해서 일치하면 poll()로 제거하고 둘 다 일치하지 않으면 목표 단어 순서를 만들 수 없으므로 "No"를 반환했다.

+ ✅ 잘한 점
문제 조건을 정확히 이해하고 적절한 자료구조를 떠올려 해결한 점이 좋았다.

+ ⚠ 개선할 점
cards1과 cards2를 큐로 변환할 때 반복문 대신 `Collections.addAll(queue, array)`를 사용하면 코드가 더 간결해진다.
```java
Queue<String> queue1 = new LinkedList<>();
for (String str : cards1) {
    queue1.add(str);
}
// Collections.addAll() 사용
Queue<String> queue1 = new LinkedList<>();
Collections.addAll(queue1, cards1);
```
또한, 다른 사람의 코드를 참고해 보니 큐 대신 배열의 인덱스를 사용하는 방법도 있었다. 이 방법이 큐를 사용하는 것보다 메모리와 성능 면에서 더 효율적일 수 있다.
앞으로는 상황에 따라 더 효율적인 방법을 선택하는 습관을 들여야겠다.
```java
// 인덱스 사용 방식
int i = 0, j = 0;
for (String word : goal) {
    if (i < cards1.length && word.equals(cards1[i])) {
        i++;
    } else if (j < cards2.length && word.equals(cards2[j])) {
        j++;
    } else {
        return "No";
    }
}
return "Yes";
```
## 참조