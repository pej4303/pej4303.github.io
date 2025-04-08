---
title: "[99클럽 코테 스터디] 99클럽 코테 스터디 7일차 TIL + 스택/큐"
description: "99클럽 코테 스터디 7일차 TIL + 스택/큐"
date: "2025-04-08"
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
+ 스택/큐
+ 문제 URL : https://www.acmicpc.net/problem/10799

## 2. 공부한 내용 본인의 언어로 정리하기
+ 소스 코드
    + 시도1
    ````java
    import java.io.*;
    import java.util.Stack;

    public class Main {
        public static void main(String[] args) throws Exception {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            String input = br.readLine();

            Stack<Character> stack = new Stack<>();
            int result = 0;

            for (int i=0; i<input.length(); i++) {
                char c = input.charAt(i);
    //            System.out.println("## 문자: " + c);
                if (c == '(') {
                    stack.push(c);
                } else {
                    stack.pop();
                    if (input.charAt(i-1) == '(') {
                        result += stack.size();
    //                    System.out.println("## 레이저: 현재 스택 크기만큼 자름 (" + stack.size() + ") ##");
                    } else {
                        result += 1;
    //                    System.out.println("## 쇠막대기 끝 ##");
                    }
                }
    //            System.out.println("현재 스택 상태: " + stack);
    //            System.out.println("result: " + result);
    //            System.out.println("------------");
            }
            System.out.println(result);
        }
    }
    ````

## 3. 오늘의 회고
+ 문제 상황과 시도
문제를 처음 보고 `()`가 생길 때마다 개수를 세면 될 것 같다고 생각했지만 결과가 맞지 않았다.
괄호의 모양과 위치에 따라 쇠막대기의 잘림 횟수를 정확히 계산해야 하는 문제였기 때문이다.
괄호가 생길 때마다 단순히 카운트하는 방식으로는 레이저인지 막대기의 끝인지 구분할 수 없어서 올바른 풀이 방법이 될 수 없었다.

+ 해결 과정
다양한 접근 방식을 검색해보며 스택을 활용한 풀이를 참고했다.

+ 배운 점
힌트를 보지 않고 문제를 읽고 스택을 떠올린 점은 좋았다. 다만 문제를 더 꼼꼼히 읽고 조건을 정확히 파악한 후에 접근하는 연습이 필요하다고 느꼈다.
앞으로 다양한 문제를 접하며 사고력을 더 키워야겠다.