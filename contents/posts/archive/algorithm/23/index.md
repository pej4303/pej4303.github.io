---
title: "[프로그래머스] 실패율 Java"
description: "실패율 Java"
date: "2025-06-11"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/42889](https://school.programmers.co.kr/learn/courses/30/lessons/42889)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + Stage 클래스 선언, Stage 타입의 List 선언
    + 스테이지 개수 만큼 for문 수행
    + 실패율 로직 처리
        + 해당 index와 동일한 번호가 있으면 실패율 계산
        + 없다면 도달한 유저가 없는것으로 실패율을 0으로 정의
        + list에 담기
    + list 정렬
        + 실패율 내림차순 같으면 스테이지 오름차순
    + list -> int[] 변환
    + answer 반환
+ 소스 코드
    ```java
    import java.util.*;
    class Solution {
        class Stage {
            int index;
            double rate;

            Stage(int index, double rate) {
                this.index = index;
                this.rate = rate;
            }
        }

        public int[] solution(int N, int[] stages) {
            int[] answer = {};
                
            List<Stage> list = new ArrayList<>();
            // 1. 스테이지 개수 만큼 for문 수행
            for (int i=1; i<=N; i++) {
                // 실패율 계산
                double rate = calc(stages, i);
                // list에 담기
                list.add(new Stage(i, rate));
            }
                
            // 3. list 정렬
            // 실패율 내림차순, 같으면 스테이지 오름차순
            Collections.sort(list, (a, b) -> {
                    if (Double.compare(b.rate, a.rate) == 0) {
                        return a.index - b.index;   // 스테이지 번호 오름차순
                    } else {
                        return Double.compare(b.rate, a.rate);  // 실패율 내림차순
                    }
            });
            
                
            // 4. list -> int[] 변환
            answer = list.stream().mapToInt(stage -> stage.index).toArray();
                
            return answer;
        }
        
        private double calc(int[] stages, int stage) {
            int fail = 0;
            int sucess = 0;

            for (int i=0; i<stages.length; i++) {
                if (stages[i] >= stage) { // 해당 스테이지에 도달한 사용자
                    sucess++;
                }
                if (stages[i] == stage) { // 해당 스테이지에서 실패한 사용자
                    fail++;
                }
            }

            if (sucess == 0) {
                return 0.0;
            } else {
                return (double) fail / sucess;
            }
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
문제를 처음 읽고 대략적인 구현 방법은 금방 떠올랐다. 하지만 실패율 계산 로직과 정렬 기준 구현에서 조금 막혔다. 특히 실패율을 정확히 계산하고 이를 기준으로 스테이지 번호까지 고려하여 정렬하는 부분이 생각보다 까다로웠다.

+ 🛠 해결 과정
실패율은 각 스테이지에 도달한 사용자 수를 기준으로 해당 스테이지를 클리어하지 못한 사용자 수의 비율로 계산하면 됐다. 이때 도달한 유저가 0명인 경우 실패율은 0으로 처리해야 한다는 조건도 주의 깊게 반영했다. 정렬은 처음에는 TreeMap을 사용하면 자동 정렬이 되지 않을까 생각했지만 TreeMap은 key 기준으로만 정렬되기 때문에 실패율이 같은 경우 스테이지 번호 기준으로 정렬하는 조건을 만족시키기 어려웠다. 그래서 실패율과 스테이지 번호를 함께 담는 Stage 클래스를 만들고 Collections.sort()를 사용해 커스텀 정렬 로직을 적용했다.
이 방법이 훨씬 직관적이고 조건을 세부적으로 제어할 수 있어서 적합하다는 것을 알게 되었다.

+ ⚠ 개선할 점
정렬 로직은 여전히 자주 헷갈리는 부분이다. 특히 다중 조건(실패율 내림차순, 스테이지 번호 오름차순) 정렬을 구현할 때 매번 혼란이 생기곤 한다.
앞으로는 Comparator.comparing(), thenComparing() 같은 메서드를 활용해 가독성을 높이고 명확한 정렬 기준을 설정하는 연습이 더 필요하다고 느꼈다.
```java
-- Comparator 체이닝 방식
-- 참고로 해당 메서드를 쓰려면 Stage 클래스에 getter가 필요하다.
list.sort(
    Comparator
        // 실패율을 기준으로 내림차순 정렬
        .comparingDouble(Stage::getRate).reversed()
        // 실패율이 같을 경우 스테이지 번호 기준으로 오름차순 정렬
        .thenComparingInt(Stage::getIndex)
);
```
## 참조