---
title: "[프로그래머스] [1차] 다트게임 Java"
description: "[1차] 다트게임 Java"
date: "2025-06-13"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/17682](https://school.programmers.co.kr/learn/courses/30/lessons/17682)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + 점수 List 선언
    + 횟수마다 자르기 - 정규표현식 이용
    + 각 횟수 점수 계산
    + answer 반환
+ 소스 코드
    ```java
    import java.util.*;
    import java.util.regex.*;
    class Solution {
        public int solution(String dartResult) {
            int answer = 0;
            
            // 0. 점수 List 선언
            List<Integer> list = new ArrayList<>();
            
            // 1. 정규표현식 이용해서 자르기
            Pattern pattern = Pattern.compile(
                                "(\\d{1,2})" +     // 1~2자리 숫자: 점수 (예: 1, 10)
                                "([SDT])" +        // 보너스: S(1제곱), D(2제곱), T(3제곱)
                                "([*#]?)"          // 옵션(있을 수도, 없을 수도 있음): * 또는 # 또는 없음
                            );
            
            Matcher matcher = pattern.matcher(dartResult);

            while (matcher.find()) {
                // System.out.println(matcher.group());
                String score = matcher.group(1);  // 점수
                String bonus = matcher.group(2);  // 보너스
                String option = matcher.group(3); // 옵션
                
                int current = calc(score, bonus);
                
                // 옵션 계산
                if ("*".equals(option)) {
                    if (!list.isEmpty()) {
                        // 첫번째 값이 아니라면 이전점수를 2배로 만듬
                        list.set( list.size() - 1, list.get( list.size() - 1) * 2);
                    }   
                    // 현재 점수를 2배로 만듬
                    current *= 2;
                } else if ("#".equals(option)) {
                    current *= -1;
                }
                
                // System.out.println(current);
                

                list.add(current);
            }
            
            // 3. answer 반환
            answer = list.stream().mapToInt(Integer::intValue).sum();
            
            return answer;
        }
        
        private int calc(String score, String bonus) {
            int pow = 0;
            switch (bonus) {
                case "S":
                    pow = 1;
                    break;
                case "D":
                    pow = 2;
                    break;
                case "T":
                    pow = 3;
                    break;
            }
    
            return (int) Math.pow(Integer.parseInt(score), pow);
        }
    }

    ```
## 3. 문제 회고
+ 🔍 시도
문제의 기본 로직은 점수와 보너스를 분리하여 계산하는 것이었기에 큰 어려움은 없었지만 점수 구간(특히 10점) 처리와 옵션(*, #) 적용 부분에서 로직 구현에 시간이 걸렸다. 특히 * 옵션이 바로 전 점수뿐만 아니라 현재 점수에도 영향을 미치는 점을 어떻게 구현해야 될지 생각이 잘 나지 않았다.

+ 🛠 해결 과정
정규표현식을 활용해 점수, 보너스, 옵션을 한 번에 추출하는 방식을 택하여 깔끔하게 처리할 수 있었다. 정규식 그룹별로 정확히 값을 뽑아내고 옵션에 따라 점수를 수정하는 로직을 순차적으로 작성하면서 구현했다. 특히 리스트에 이전 점수가 있을 경우 `*` 옵션 적용 시 이전 점수를 수정하는 부분에서 list.set 메서드를 활용해 값을 변경하였다.

+ ✅ 잘한 점
처음에는 배열을 사용해 구현하려 했지만 효율성과 가독성을 고려해 List로 전환한 판단은 좋았다. 특히 이전 점수에 접근하고 수정하는 데 있어 List의 장점을 잘 활용했다.

+ ⚠ 개선할 점
정규표현식을 자주 사용하지 않다 보니 문법을 정확히 기억하지 못해 검색에 의존해야 했다. 향후 자주 등장하는 정규식 패턴에 익숙해지도록 연습이 필요하다고 느꼈다.
```
## 참조