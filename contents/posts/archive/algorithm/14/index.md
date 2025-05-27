---
title: "[프로그래머스] 개인정보 수집 유효기간 Java"
description: "개인정보 수집 유효기간 Java"
date: "2025-05-27"
tags:
  - Algorithm
  - 프로그래머스
  - 코딩테스트
series: "프로그래머스"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://school.programmers.co.kr/learn/courses/30/lessons/150370](https://school.programmers.co.kr/learn/courses/30/lessons/150370)
+ 난이도 : 레벨1

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + 약관 정보(terms) 배열을 Map 형태로 변환
        + 각 약관명을 key로 유효기간을 일단위로 환산한 값을 value로 하여 형태로 변환한다.   
          예) "A 6" => map.put("A", 6 * 28);
    + 개인정보 수집 내역(privacies) 배열 순회 - for문 이용
    + 파기 대상 여부 판단
        + 개인정보 수집일자를 LocalDate로 변환한다.
        + 해당 항목의 약관 유형을 기준으로 유효기간을 더해 파기 예정일을 계산한다.
        + 파기 예정일 = 개인정보 수집일 + 유효기간(일) - 1
        + 오늘 날짜와 파기 예정일을 비교한다. - isBefore() 이용
    + answer return
+ 문제점
    + 테스트 케이스를 통과하지 못해서 파기예정일을 출력해보았더니 예제와 맞지 않았다.
    + **문제처럼 "모든 달이 28일" 이라는 가상의 조건에서는 `LocalDate`를 쓰면 오히려 파기 예정일이 달라지는 버그가 발생한다.**
+ 소스 코드
    ```java
    import java.time.*;
    import java.time.format.*;
    import java.util.*;

    class Solution {
        public int[] solution(String today, String[] terms, String[] privacies) {
            int[] answer = {};
            List<Integer> result = new ArrayList<>();
            
            String[] tmpArr = null;
            int day = 0;
            
            LocalDate todayDate = parseDate(today);
            
            // 0. 약관 정보(terms) 배열을 Map 형태로 변환
            Map<String, Integer> termsMap = new HashMap<>();
            for (String str : terms) {
                tmpArr = str.split(" ");
                day = Integer.parseInt(tmpArr[1]) * 28; // 모든 달은 28일까지 있다고 가정합니다.
                // 각 약관명을 key로 유효기간을 일단위로 환산한 값을 value로 하여 형태로 변환한다.
                termsMap.put(tmpArr[0], day);
            }
            
            // 1. 개인정보 수집 내역(privacies) 배열 순회 - for문 이용
            for (int i=0; i<privacies.length; i++) {
                // 2. 파기 대상 여부 판단
                tmpArr = privacies[i].split(" ");
            
                // 개인정보 수집일자를 LocalDate로 변환한다.
                LocalDate tmpDate = parseDate(tmpArr[0]);
                // 유효기간(일)
                day = termsMap.get(tmpArr[1]);          
                
                // 해당 항목의 약관 유형을 기준으로 유효기간을 더해 파기 예정일을 계산한다.
                // 파기 예정일 = 개인정보 수집일 + 유효기간(일) - 1
                LocalDate expiredDate = tmpDate.plusDays(day).minusDays(1);

                //System.out.println("개인정보 수집일: " + tmpDate);
                //System.out.println("파기 예정일: " + expiredDate);
                //System.out.println("오늘: " + todayDate);
                
                // 오늘 날짜와 파기 예정일을 비교한다.
                if (expiredDate.isBefore(todayDate)) {
                    // 파기 대상
                    result.add(i);
                }
            }
            
            // result.forEach(System.out::println);
            
            // List -> 배열로 변환
            answer = result.stream().mapToInt(i -> i + 1).toArray();
            
            return answer;
        }
        
        private LocalDate parseDate(String date) {
            return LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy.MM.dd")); 
        }
    }
    ```
### 시도2
+ 접근 방법
    + 약관 정보(terms) 배열을 Map 형태로 변환
    + 오늘 날짜를 모든 달이 28일인 가상의 달력을 기준으로 변환
    + 개인정보 수집 내역(privacies) 배열 순회 - for문 이용
    + 파기 대상 여부 판단
        + 개인정보 수집일자를 모든 달이 28일인 가상의 달력을 기준으로 변환한다.
        + 해당 항목의 약관 유형을 기준으로 유효기간을 더해 파기 예정일을 계산한다.
        + 파기 예정일 = 개인정보 수집일 + 유효기간(일) - 1
        + 오늘 날짜와 파기 예정일을 비교한다. 
    + List -> 배열로 변환하여 return - mapToInt() 이용
+ 소스 코드
    ```java
    import java.time.*;
    import java.time.format.*;
    import java.util.*;

    class Solution {
        public int[] solution(String today, String[] terms, String[] privacies) {
            int[] answer = {};
            List<Integer> result = new ArrayList<>();
            
            String[] tmpArr = null;
            
            // 0. 약관 정보(terms) 배열을 Map 형태로 변환
            Map<String, Integer> termsMap = new HashMap<>();
            for (String str : terms) {
                tmpArr = str.split(" ");
                termsMap.put(tmpArr[0], Integer.parseInt(tmpArr[1]));
            }
            
            // 1. 오늘 날짜를 모든 달이 28일인 가상의 달력을 기준으로 변환
            int convertToDay = convertDate(today);
            
            // 2. 개인정보 수집 내역(privacies) 배열 순회 - for문 이용
            for (int i=0; i<privacies.length; i++) {
                // 3. 파기 대상 여부 판단
                tmpArr = privacies[i].split(" ");
            
                // 개인정보 수집일자를 모든 달이 28일인 가상의 달력을 기준으로 변환한다.
                int tmpDate = convertDate(tmpArr[0]);
                // 유효기간(월)
                int month = termsMap.get(tmpArr[1]);
                
                // 해당 항목의 약관 유형을 기준으로 유효기간을 더해 파기 예정일을 계산한다.
                // 파기 예정일 = 개인정보 수집일자 + (해당 약관 유효기간 * 28) - 1 
                int calcDate = tmpDate + (month * 28) - 1;
                
                // 오늘 날짜와 파기 예정일을 비교한다. 
                if (convertToDay > calcDate) {
                    // 파기 대상
                    result.add(i+1);
                }
            }
            
            // result.forEach(System.out::println);
            
            // 4. answer return - List -> 배열로 변환
            answer = result.stream().mapToInt(i -> i).toArray();
            
            return answer;
        }
        
        // 모든 달이 28일인 가상의 달력 형태로 변환
        private int convertDate(String date) {
            String[] tmp = date.split("\\.");
            int year = Integer.parseInt(tmp[0]) * 12 * 28;
            int month = Integer.parseInt(tmp[1]) * 28;
            int day = Integer.parseInt(tmp[2]);
            
            return year + month + day;
        }
    }
    ```
## 3. 문제 회고
+ 🔍 시도
처음에는 Java의 LocalDate 클래스를 사용해 날짜 계산을 시도했지만 문제에서 주어진 "모든 달은 28일까지 존재한다"는 가상 조건으로 인해 테스트 케이스를 통과하지 못하였다. 이로 인해 날짜 계산 방식 자체를 변경하였다.

+ 🛠 해결 과정
모든 날짜를 일단위로 변환하여 처리하는 방식으로 구현하였다. yyyy.MM.dd 형식의 날짜를 (연 * 12 * 28) + (월 * 28) + 일의 총 일수로 변환하여 계산함으로써 문제에서 요구하는 28일 달력을 완벽하게 반영할 수 있었다. 이 방식으로 파기 예정일을 정확히 계산할 수 있었고 모든 테스트 케이스를 통과할 수 있었다.

+ ⚠ 개선할 점
LocalDate 사용이 적절하다고 판단했지만 문제 조건과 맞지 않아 테스트를 통과하지 못했고 제한 시간 30분을 초과했다. 수동으로 날짜를 계산하는 방법이 떠오르지 않아 GPT의 도움을 받았다.

## 참조