---
title: "[BOJ] 백준 11720 숫자의 합 Java"
description: "백준 11720 숫자의 합 Java"
date: "2025-05-07"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 문제 요약
+ 문제 URL : [https://www.acmicpc.net/problem/11720](https://www.acmicpc.net/problem/11720)
+ 난이도 : 브론즈4
+ 문제 내용 : N개의 숫자가 공백 없이 문자열 형태로 주어질 때 이 숫자들의 합을 구하는 문제이다.

## 2. 내 풀이 방법

### 시도1
+ 접근 방법
    + `split("") + Integer.parseInt()`
    + 문자열을 한 글자씩 분리한 후 각 문자를 정수로 변환하여 합산한다.
+ 문제점
    + 정답은 맞지만 split()은 내부적으로 정규식을 사용하기 때문에 속도가 느리다.
+ 소스 코드
    ```java
    import java.io.*;
    public class Main {
        public static void main(String[] args) throws IOException {
            // 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int n = Integer.parseInt(br.readLine());
            
            String[] input = br.readLine().split("");
            
            int sum = 0;
            for (int i=0; i<n; i++) {
                sum += Integer.parseInt(input[i]);
            }
            
            // 출력
            // : 입력으로 주어진 숫자 N개의 합
            System.out.println(sum);
        }
    }
    ```
### 시도2
+ 접근 방법
    + `toCharArray() + 아스키 코드`
    + String.toCharArray()로 문자 배열을 만든 뒤 각 문자를 '0'과의 차이로 정수로 변환하여 합산한다.
+ 문제점
    + char 배열을 복사해서 반환하기 때문에 String.charAt() 보다 속도가 느리다.
### 시도3
+ 접근 방법
    + `charAt(i) + 아스키 코드`
    + charAt(i)을 사용하여 각 문자를 직접 접근하고 '0'을 빼서 정수로 변환한다.
    + 별도의 배열을 만들지 않기 때문에 가장 빠른 방식이다.


### 각 방법들 성능 비교

위에 시도한 방법들은 모두 제출시 정답이다. 하지만 실제 코딩테스트에서 시간복잡도뿐만 아니라 메모리, 실행시간 또한 고려해야 한다. 문제를 완벽하게 이해하고 구현을 해야 하기 때문에 이러한 요소들도 같이 생각해서 코딩하는 것이 좋다.

3가지 방법을 100만 자리 숫자 문자열에 대해 비교한 결과이다.
```java
public static void main(String[] args) throws IOException {
    int n = 1_000_000; // 100만 자짜리 숫자 문자열 생성
    StringBuilder sb = new StringBuilder(n);
    Random rand = new Random();

    for (int i = 0; i < n; i++) {
        sb.append(rand.nextInt(10));
    }
    String numberString = sb.toString();

    // 1. split("") + Integer.parseInt()
    long start1 = System.currentTimeMillis();
    String[] arr = numberString.split("");
    int sum1 = 0;
    for (int i = 0; i < arr.length; i++) {
        sum1 += Integer.parseInt(arr[i]);
    }
    long end1 = System.currentTimeMillis();
    System.out.println("1. split + parseInt 방식: " + (end1 - start1) + "ms, sum = " + sum1);

    // 2. toCharArray() + (c - '0')
    // 방법 2: toCharArray() + (c - '0')
    long start2 = System.currentTimeMillis();
    char[] chars = numberString.toCharArray();
    int sum2 = 0;
    for (char c : chars) {
        // char 타입끼리 연산을 하면 내부적으로 숫자로 처리되어 int형 타입으로 결과가 나온다.
        sum2 += c - '0';
    }
    long end2 = System.currentTimeMillis();
    System.out.println("2. toCharArray + 아스키코드 방식: " + (end2 - start2) + "ms, 합계 = " + sum2);

    // 3. charAt(i) + (c - '0')
    long start3 = System.currentTimeMillis();
    int sum3 = 0;
    for (int i = 0; i < n; i++) {
        // char 타입끼리 연산을 하면 내부적으로 숫자로 처리되어 int형 타입으로 결과가 나온다.
        sum3 += numberString.charAt(i) - '0';
    }
    long end3 = System.currentTimeMillis();
    System.out.println("3. charAt + 아스키코드 방식: " + (end3 - start3) + "ms, sum = " + sum3);
}
[결과]
1. split + parseInt 방식: 165ms, sum = 4497022
2. toCharArray + 아스키코드 방식: 18ms, 합계 = 4497022
3. charAt + 아스키코드 방식: 5ms, sum = 4497022
```

| 방법               | 설명             | 실행 시간       |
| ---------------- | -------------- | ----------- |
| split + parseInt | 문자열 분리 후 정수 변환 | 느림 (정규식 사용) |
| toCharArray      | 문자 배열로 변환 후 계산 | 중간          |
| charAt           | 직접 문자 접근 후 계산  | 가장 빠름       |

## 3. 문제 회고
+ 🔍 시도
브론즈 문제로 난이도가 낮아 바로 구현할 수 있었다.

+ 🛠 해결 과정
아스키 코드를 이용한 방식도 있다는걸 알게되었다. 그래서 각 방법의 실행시간을 비교해보았다.

+ ✅ 잘한 점
다양한 접근 방식(총 3가지)을 직접 구현하고 비교 분석하였고 그로 인해 아스키코드 기반 처리 방식이 성능상 더 우수하다는 점을 직접 검증하였다. 

+ ⚠ 개선할 점
아스키 코드 방식에서 `charAt()`과 `toCharArray()` 차이에 대한 근거를 조금 더 구체화하면 설득력이 높아질 것 같다.

## 참조
+ [String.split()](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#split-java.lang.String-)
+ [String.toCharArray()](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#toCharArray--)
