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

## 1. 📝 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/17682](https://school.programmers.co.kr/learn/courses/30/lessons/17682)
+ 난이도 : 레벨1

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> 1. 점수 List 선언
> 2. 횟수마다 자르기 - 정규표현식 이용
> 3. 각 횟수 점수 계산
> 4. answer 반환
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
## 3. 🔍 문제 회고
문제의 기본 로직은 점수와 보너스를 분리해서 계산하는 구조였기 때문에 전반적으로 어렵지 않았다.
하지만 **점수 구간(특히 10점 처리)과 옵션(*, #) 적용 로직 구현에서 시간이 다소 소요되었고 특히 * 옵션이 이전 점수뿐 아니라 현재 점수에도 영향을 미친다는 점이 구현 포인트였다.**

**각 회차별 점수와 옵션을 파싱하고 그에 따라 점수를 계산해 최종 합계를 구하는 것이 과제였다.**

**정규표현식을 활용해 점수, 보너스, 옵션을 한 번에 추출하는 방식을 택했고 정규식 그룹별로 값을 나눠 뽑은 뒤 옵션에 따라 점수를 수정하는 로직을 순차적으로 구현했다. 특히 `*` 옵션이 적용될 경우 리스트에 저장된 이전 점수를 `list.set()`을 통해 직접 수정하면서 문제를 해결했다.** 처음에는 배열을 사용하려 했지만 이전 값을 유연하게 수정하기 위해 List로 전환한 판단이 특히 효과적이었다.

결국 문제는 잘 해결했지만 **정규표현식 문법을 잘 기억하지 못해 검색을 여러 번 참고해야 했던 점은 아쉬웠다.**
자주 등장하는 정규식 패턴들을 숙지하고 실전에서 바로 떠올릴 수 있도록 연습이 더 필요하다고 느꼈다.

## 📚 참조