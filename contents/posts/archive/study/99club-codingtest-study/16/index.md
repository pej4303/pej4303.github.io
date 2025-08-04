---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 16일차 TIL + 시뮬레이션"
description: "99클럽 코테 스터디 16일차 TIL + 시뮬레이션"
date: "2025-04-21"
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
+ 문제 URL : https://school.programmers.co.kr/learn/courses/30/lessons/72410

## 2. 공부한 내용 본인의 언어로 정리하기
+ 시도1(맞음)
    + 접근 방법 
        + 문제를 읽고 단계별로 구현을 하였다.
    + 소스 코드
    ```java
    class Solution {
        public String solution(String new_id) {
            String answer = "";
            // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
            answer = new_id.toLowerCase(); 
            // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
            answer = answer.replaceAll("[^a-z0-9._-]", "");
            //System.out.println("[2] -> " + answer);
            // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
            answer = answer.replaceAll("\\.+", ".");
            // 4단계: new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
            if (answer.startsWith(".")) {
                answer = answer.substring(1);
            }
            if (answer.endsWith(".")) {
                answer = answer.substring(0, answer.length() - 1);
            }
            // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
            if ( answer.isEmpty() ) {
                answer = "a";
            }
            // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
            if ( answer.length() >= 16 ) {
                answer = answer.substring(0, 15);
                if (answer.endsWith(".")) {
                    answer = answer.substring(0, answer.length() - 1);
                }
            }
            System.out.println("[6] -> " + answer);
            // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
            // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
            if ( answer.length() <= 2 ) {
                //System.out.println("[7] -> " + answer);
                String last = String.valueOf(answer.charAt(answer.length() - 1));
                //System.out.println("[7] -> last : " + last);
                while (true) {
                    if (answer.length() == 3) {
                        break;
                    }
                    answer += last;

                // System.out.println("[7] -> answer : " + answer);
                }
            }
            return answer;
        }
    }
    ```
## 3. 오늘의 회고
+ 문제 상황과 시도   
문제를 읽고 단계별로 풀어보면 되겠다고 생각하였다.

+ 해결 과정   
문자열 관련 문제라고 생각했는데 풀고 나서 힌트를 보니 시뮬레이션 문제였다.

+ 배운 점   
문자열 함수와 정규표현식을 알고있다면 쉽게 풀 수 있는 문제였다.