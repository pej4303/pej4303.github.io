---
title: "[Java] 다형적 참조"
description: "다형적 참조"
date: "2024-09-28"
tags:
  - Java
  - Study
series: "Java"
previewImage: 'writing-help.png'
isPrivate: false
---

스터디에서 다형적참조에 대해 발표하게 되어 정리해보고자 합니다.

## 0. 서론

다형적 참조에 대해 설명하기 전에 먼저 다형성(Polymorphism)에 대해 알아보죠.   
다형성(Polymorphism)은 객체지향 프로그래밍의 중요한 개념중 하나로 **여러가지 형태를 가질 수 있는 능력을 의미**합니다. 예시를 들자면, 다형성(Polymorphism)은 부모 클래스 타입의 변수가 자식 클래스 타입의 객체를 참조할 수 있다는 것을 뜻합니다.

## 1. 다형적 참조란?

다시 돌아와서 다형적 참조(Polymorphic Reference)에 대해 알아보죠.   
다형적 참조(Polymorphic Reference)는 **부모 클래스 타입의 인스턴스로 자식 클래스 타입의 인스턴스를 참조 할 수 있는 기능**을 의미합니다. 이는 다형성을 실현하는 방법 중 하나입니다.

다형성과 비슷하다고 생각할 수 있지만 다형성과 다형적 참조는 보시다싶이 서로 다른 개념입니다. 
다형성이 더 포괄적인 개념이죠.
![다형성과다형적참조](/1.png)

## 2. 예제코드

Animal 클래스와 Jaelong 클래스가 있다고 가정해보죠. 
두 클래스는 부모(Animal)와 자식(Jaelong) 관계입니다.

```java
public class Animal {
    public void print() {
        System.out.println("Animal");
    }
}
```
```java
public class Jaelong extends Animal {
    public void print() {
        System.out.println("Jaelong");
    }

    public void sound() {
        System.out.println("멍멍");
    }
}
```

```java
public class PolyTest {
    public static void main(String[] args) {
        Animal animal = new Animal();
        Animal animal2 = new Jaelong();

        animal.print();
        animal2.print();
    }
}
```

이렇게 코드가 되어있다면 결과를 어떻게 될까요?

```
[결과]
Animal
Jaelong
```

`Animal animal2 = new Jaelong();` 부분에서 **다형적 참조를 통해 자식 클래스의 인스턴스로 변경되었기 때문에 "Jaelong"이라고 결과가 나오게 된 것입니다**.

그렇다며 소스코드가 이렇게 되었다면 결과가 어떻게 될까요?

```java
public class PolyTest {
    public static void main(String[] args) {
        Animal animal = new Animal();
        Animal animal2 = new Jaelong();

        animal.print();
        animal2.print();
        // 추가
        animal2.sound();
    }
}
```

소스를 실행시키면 컴파일 에러가 발생합니다. 왜 그런걸까요?   
다형적 참조로 자식 클래스의 인스턴스를 참조 했고 Jaelong 클래스에는 sound()가 있는데 말이죠.

![소스분석](/2.png)
`animal 변수`가 생성이 될때 메모리에 Animal 클래스만 로드가 됩니다. 반면에 `animal2 변수` 생성이 될때는 Jaelong 클래스와 부모 클래스인 Animal까지 같이 생성이 됩니다. 

![소스분석2](/3.png)
`animal2 변수`는 Animal 타입으로 선언했기 때문에 먼저 Animal 클래스에 sound() 메소드가 있는지 확인합니다. **메소드를 찾는 방향은 자식->부모순으로 Animal (부모)에서 내려가면서 찾을 수는 없습니다.** 따라서 컴파일 오류가 발생한 것입니다. Jaelong 클래스로 다운 캐스팅후 호출하면 오류 없이 호출 할 수 있습니다.

```java
public class PolyTest {
    public static void main(String[] args) {
        Animal animal = new Animal();
        Animal animal2 = new Jaelong();

        animal.print();
        animal2.print();
        // 추가
        // animal2.sound(); // 컴파일 에러
        ((Jaelong) animal2).sound(); // 다운 캐스팅후 호출
    }
}
```

## 3. 정리

+ 다형성(Polymorphism)
   + 객체지향 프로그래밍의 개념중 하나로 여러가지 형태를 가질 수 있는 능력을 의미합니다. 
+ 다형적 참조(Polymorphic Reference)
   + 부모 클래스 타입의 인스턴스로 자식 클래스 타입의 인스턴스를 참조 할 수 있는 기능을 의미합니다. 
+ 메소드를 찾는 방향은 자식->부모순으로, 부모에서 내려가면서 찾을 수는 없습니다.


## 참조
+ https://medium.com/@binmuxiz/java-polymorphism-%EB%8B%A4%ED%98%95%EC%84%B1-1-%EB%8B%A4%ED%98%95%EC%A0%81-%EC%B0%B8%EC%A1%B0-1ee2e5535268
+ https://yeoncoding.tistory.com/885
+ GPT