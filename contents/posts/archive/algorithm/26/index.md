---
title: "[백준] 창고 다각형 Java"
description: "창고 다각형 Java"
date: "2025-06-14"
tags:
  - Algorithm
  - 백준
  - 코딩테스트
series: "백준"
previewImage: 'writing.png'
isPrivate: false
---

## 1. 📝 문제 요약
+ 문제 URL : [https://www.acmicpc.net/problem/2304](https://www.acmicpc.net/problem/2304)
+ 난이도 : 실버2
+ 소요시간 : 50분

## 2. 💡 내 풀이 방법
### 시도1
+ 접근 방법
> + 입력
> + L, H를 클래스로 리스트에 저장
> + L 기준 정렬
>    + 최대 높이의 인덱스 찾기
>    + 로직 처리
>        + 왼쪽 → 중앙까지 현재 높이가 최대높이보다 크면 면적구하기
>        + 오른쪽 → 중앙까지 면적 계산
> + 최대 높이 기둥 면적 추가
> + 출력
+ 소스 코드
    ```java
    import java.io.*;
    import java.util.*;
    public class Main {
        static class Store {
            int L;
            int H;

            int getH() {
                return this.H;
            }

            int getL() {
                return this.L;
            }

            Store(int L, int H) {
                this.L = L;
                this.H = H;
            }
        }

        public static void main(String[] args) throws Exception {
            StringTokenizer st = null;
            int result = 0;

            // 1. 입력
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            // 기둥의 개수
            int n = Integer.parseInt(br.readLine());

            // 2. L, H를 클래스로 List에 저장
            List<Store> list = new ArrayList<>();

            int maxH = -1;
            int index = -1;

            for (int i=0; i<n; i++) {
                st = new StringTokenizer(br.readLine());

                int tmpL = Integer.parseInt(st.nextToken());
                int tmpH = Integer.parseInt(st.nextToken());

                maxH = Math.max(maxH, tmpH);

                list.add(new Store(tmpL, tmpH));
            }

            // 3. L 기준 정렬
            list.sort((a,b) -> Integer.compare(a.L, b.L));

            // 4. 최대 높이의 인덱스 찾기
            for (int i=0; i<list.size(); i++) {
                if (list.get(i).getH() == maxH) {
                    index = i;
                    break;
                }
            }

            // 5. 로직 처리
            // - 현재 높이가 최대높이보다 크면 면적구하기
            // 왼쪽 ~ 최대높이
            int leftH = list.get(0).getH();
            int leftL = list.get(0).getL();

            for (int i=1; i<= index; i++) {
                if (list.get(i).getH() >= leftH) {
                    result += (list.get(i).getL() - leftL) * leftH;
                    // 기준점 갱신
                    leftH = list.get(i).getH();
                    leftL = list.get(i).getL();
                }
            }
            // 최대높이 ~ 오른쪽
            int rightH = list.get(list.size() -1).getH();
            int rightL = list.get(list.size() -1).getL();

            for (int i=list.size() -2; i>= index; i--) {
                if (list.get(i).getH() >= rightH) {
                    result += (rightL - list.get(i).getL()) * rightH;
                    // 기준점 갱신
                    rightH = list.get(i).getH();
                    rightL = list.get(i).getL();
                }
            }
            // 6. 최대 높이 기둥 면적 추가
            result += maxH;

            // 7. 출력
            System.out.println(result);
        }
    }
    ```
## 3. 🔍 문제 회고
문제를 처음 접했을 때 막대들이 이루는 전체 면적을 단순히 나누어 계산하는 방식으로 접근했다. 하지만 그렇게 하기보다는 **가장 높은 막대를 기준으로 왼쪽과 오른쪽을 나눠서 면적을 계산하는 것이 더 효율적이라는 점을 파악할 수 있었다.**

이 문제는 주어진 좌표(L)와 높이(H)를 이용해 복잡하지 않게 전체 면적을 계산해야 하는 과제였다.

**먼저 L과 H를 `Stroe`라는 클래스로 별도로 분리하여 리스트 타입으로 입력을 받았다. 계산하기 쉽게 L 기준으로 정렬을 해준 기준점이 되는 다음 최대 높이의 위치를 찾았다. 왼쪽 → 최대 높이까지, 최대 높이 → 오른쪽까지 이렇게 2번 면적을 계산해준다. 마지막으로 최대 높이 부분까지 면적에 추가해주면 된다.**

문제 해결을 위한 전체적인 설계 방향은 적절했지만 제한시간 30분 안에 풀지는 못했다.
특히 `현재 높이가 이전보다 크면 면적을 구한다`는 세부 조건을 코드로 구현하는 데 많은 시간을 소모하였다.

## 참조