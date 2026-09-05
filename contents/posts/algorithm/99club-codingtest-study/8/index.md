---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 8일차 TIL + 정규표현식"
description: "99클럽 코테 스터디 8일차 TIL + 정규표현식"
date: "2025-04-09"
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
+ 정규표현식
+ 문제 URL : https://www.acmicpc.net/problem/9996

## 2. 공부한 내용 본인의 언어로 정리하기

+ 시도1(틀림)
    + 접근 방법 
        + `*`를 기준으로 나눠서 regex[0]으로 시작하면서 regex[1]로 끝나는지 체크하였다.
    + 문제점 
        + 중간에 들어갈 내용까지 포함해서 전체가 일치하는지 확인해야한다.
    + 소스 코드
    ```java
    import java.io.*;
    public class Main {
        public static void main(String[] args) throws Exception {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int n = Integer.parseInt(br.readLine());
            // \\* 이렇게 해야 "*" 문자열로 인식함
            String[] regex = br.readLine().split("\\*"); 
            
            for (int i=0; i<n; i++) {
                String inputStr = br.readLine();
                if (inputStr.startsWith(regex[0]) && inputStr.endsWith(regex[1])) {
                    System.out.println("DA");
                } else {
                    System.out.println("NE");
                }
            }
        }
    }
    ```
+ 시도2(맞음)
    + 접근 방법 
        + 정규표현식을 이용하였다.
    + 소스 코드
    ```java
    import java.io.*;

    public class Main {
        public static void main(String[] args) throws Exception {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int n = Integer.parseInt(br.readLine());
            String pattern = br.readLine().replace("*", ".*");  // 정규표현식으로 변경
            
            // a.*b => a로 시작해서 b로 끝나는 문자열 (중간은 아무 문자든 가능)
            // ^ab => ab로 시작하는 문자열
            // ab$ => ab로 끝나는 문자열
            // [abc] => a, b, c 중 하나
            // [a-z] => 소문자 a~z 중 하나
            
            for (int i = 0; i < n; i++) {
                String input = br.readLine();
                if (input.matches(pattern)) {
                    System.out.println("DA");
                } else {
                    System.out.println("NE");
                }
            }
        }
    }
    ```
## 3. 오늘의 회고
+ 문제 상황과 시도   
단순히 `*`을 기준으로 앞과 뒤를 나눠 비교하는 방식으로 접근했으나 한 번에 통과하지 못했다.   

+ 해결 과정   
2번째 시도에 바로 정규표현식을 떠올린 점은 좋았다.    

+ 배운 점   
정규표현식과 String.matches() 메서드를 활용한 점은 긍정적이었다.   
하지만 권장 시간인 30분 내에 문제를 해결하지 못한 것은 아쉬운 부분이다.   
다음에는 시간 안에 해결할 수 있도록 더 집중해서 풀어보자.   
