---
title: "[Java] String 클래스"
description: "String 클래스"
date: "2024-11-10"
tags:
  - Java
  - Study
series: "Java"
previewImage: 'java_logo.png'
isPrivate: false
---

## 1. String클래스란?

String 클래스는 **자바에서 문자열을 다루기 위해 제공하는 클래스**입니다. 자바에서 가장 많이 사용되는 클래스 중 하나죠.   
문자열을 다루기 위해 기본형인 char 타입을 사용할 수도 있지만, 이 방법은 불편하기 때문에 자바에서는 문자열을 보다 편리하게 처리할 수 있도록 String 클래스를 제공합니다.

String 클래스의 주요 특징 중 하나는 **불변(Immutable) 객체**라는 점입니다. 불변 객체란 값을 변경할 수 없는 객체를 의미하며, String 클래스는 내부적으로 문자열 데이터를 수정할 수 없게 설계되어 있습니다.

![String클래스](/img1.png)

위 이미지에서 볼 수 있듯이 value라는 변수는 실제로 String 클래스에서 문자열 데이터를 담는 역할을 합니다. 이 변수는 **final로 선언되어 있어 값 변경이 불가능**합니다.

String 클래스의 소스 코드를 통해 이 구조를 좀 더 자세히 알아보겠습니다.

```java
public final class String {
    private final char[] value;    // 자바 9 이전
    private final byte[] value;    // 자바 9 이후
}
```
자바 9 이전에는 char 배열을 이용해 문자열 데이터를 저장했지만, 자바 9 이후부터는 메모리 효율성을 높이기 위해 byte 배열을 사용하도록 변경되었습니다.

> **byte를 사용하는 이유**   
> 예전에는 모든 String 객체가 UTF-16 인코딩을 사용하여 2Byte로 저장되었으나,   
> 자바 9에서는 저장된 문자가 ASCII 문자일때 더 적은 메모리를 사용하도록 byte[] 배열을 사용하여 저장하는 방식으로 변경되었으며
> 이러한 방식을 압축문자열(Compact Strings)이라고 합니다.

## 2. String 선언 방법

String을 선언하는 방법에는 리터럴 방식과 new 연산자를 이용한 방식 두 가지가 있습니다.

![리터럴 방식](/img2.png)
+ 리터럴 방식
    + JVM는 먼저 String Pool에 "hello"라는 문자열이 존재하는지 확인합니다.
    + 이미 "hello"가 존재한다면, 그 문자열의 참조값을 사용합니다.
    + 존재하지 않으면 String Pool에 "hello"를 추가하고 그 참조값을 사용합니다.
    + 메모리를 절약할 수 있으며, 동일 문자열 비교시 "==" 비교가 가능합니다.

![new 연산자 이용 방식](/img3.png)
+ new 연산자 이용 방식
    + **String Pool을 거치지 않고 무조건 새로운 String 객체가 Heap 영역에 생성**됩니다.

![선언방법 도식화](/img4.png)

"hello"란 문자열은 같지만 리터럴 방식의 str1과 new 연산자를 사용한 str2는 서로 다른 참조값을 가지게 됩니다.

![불변설계이유](/img5.png)

> **String 클래스가 불변으로 설계된 이유**   
> 만약 String 클래스가 값을 변경할 수 있다면, String Pool에 있는 객체의 값이 변경되면 같은 문자열을 참조하고 있는 다른 변수의 값도 함께 변경되는 문제가 발생합니다.
> 그래서 불변으로 설계된 것입니다.

## 3. 가변 String

String은 불변 객체이기 때문에 문자열을 조작할 때마다 새로운 객체가 생성됩니다. 이로 인해 메모리 낭비와 속도 저하가 발생할 수 있습니다. 이러한 단점을 보완하기 위해 가변 String 클래스들이 도입되었습니다. 자바에서는 StringBuffer와 StringBuilder 클래스를 제공하여 String과 달리 문자열을 쉽게 수정할 수 있도록 하고 성능 개선에 도움을 줍니다.

+ StringBuilder
    + 동기화 처리가 없기 때문에 단일 스레드에서의 성능이 좋습니다.
+ StringBuffer
    + 멀티스레드 환경에서 안전하도록 동기화(synchronized) 처리가 되어있어 스레드 안전성을 보장합니다.

그럼 가변 String을 사용하는게 더 좋은 경우는 언제일까요?

+ 반복문(만건이상)이나 조건문에서 문자열을 조작할 때
+ 복잡한 문자열의 특정 부분을 수정해야 할 때
+ 대용량 문자열을 다룰 때


이런 경우에는 String보다 가변 String을 사용하는것이 성능 측면에서 더 좋습니다.

## 4. String 최적화

+ 문자열 리터럴 최적화
    ```java
    // 컴파일 전
    String str = "A" + "B";
    // 컴파일 후
    String str = "AB";
    ```
    자바 컴파일러는 **컴파일 시점에 문자열 리터럴을 자동으로 결합하여 최적화**합니다. 이로 인해 런타임 시 문자열 결합 연산을 수행할 필요가 없어 성능이 향상됩니다.

+ String 변수 최적화
    ```java
    // 런타임 전
    String str = "A";
    String str2 = "A" + str;
    // 런타임 후
    String str = "A";
    String str2 = new StringBuilder().append("A").append(str).toString();
    ```
    변수가 포함된 문자열 결합은 컴파일 시점에 미리 결합할 수 없으므로, **런타임에 StringBuilder를 이용해 최적화**합니다. 자바 9부터는 `StringConcatFactory`를 사용하여 최적화가 더욱 개선되었습니다.

> **StringConcatFactory**   
> 자바 9에서 도입된 문자열 결합 최적화 기능으로 다양한 문자열 결합 방식을 효율적으로 처리하기 위해 동적 바이트코드를 생성하는 역할을 합니다. 
> 기존에는 StringBuilder를 이용해 문자열을 결합했으나 StringConcatFactory는 invokedynamic 명령어와 함께 동작하여 런타임에 가장 효율적인 방식으로 문자열을 결합할 수 있도록 최적화합니다. StringConcatFactory는 문자열 결합 패턴에 따라 적합한 결합 전략을 선택할 수 있게 해주므로 메모리 사용과 처리 속도를 개선하는 데 중요한 역할을 합니다.

## 5. 정리
+ String 클래스
    + 자바에서 문자열을 다루기 위한 클래스입니다. String은 불변(Immutable) 객체로 값을 변경할 수 없도록 설계되었습니다. 
    + 자바 9부터는 메모리 효율성을 위해 byte[] 배열을 사용하는 압축 문자열(Compact Strings) 방식을 도입했습니다.
+ String 선언 방식
    + 리터럴 방식: 동일한 문자열을 String Pool에 저장해 메모리를 절약하며, `"=="`로 비교할 수 있습니다.
    + new 연산자 방식: Heap 영역에 항상 새로운 String 객체를 생성합니다.
+ 가변 String 클래스
    + 문자열 변경 시 메모리와 성능을 개선하기 위해 StringBuffer(스레드 안전)와 StringBuilder(단일 스레드에서 효율적) 클래스를 사용합니다.
+ String 최적화
    + 문자열 리터럴 최적화: 컴파일 시점에 문자열 리터럴을 결합해 성능을 향상시킵니다.
    + String 변수 최적화: 런타임 시점에 StringBuilder를 이용하거나, StringConcatFactory를 이용하여 성능을 최적화합니다.
    
## 참조
+ https://velog.io/@gates/JAVA-String-%ED%81%B4%EB%9E%98%EC%8A%A4%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90
+ https://www.baeldung.com/java-string-immutable
+ https://bugs.openjdk.org/browse/JDK-8054307
+ https://www.inflearn.com/community/questions/1423424/string%ED%81%B4%EB%9E%98%EC%8A%A4-%EB%A6%AC%ED%84%B0%EB%9F%B4-%EB%B0%A9%EC%8B%9D-%EA%B4%80%EB%A0%A8-%EC%A7%88%EB%AC%B8
+ https://www.inflearn.com/course/%EA%B9%80%EC%98%81%ED%95%9C%EC%9D%98-%EC%8B%A4%EC%A0%84-%EC%9E%90%EB%B0%94-%EC%A4%91%EA%B8%89-1