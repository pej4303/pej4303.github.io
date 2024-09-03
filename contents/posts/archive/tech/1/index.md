---
title: "[기술면접] Git 브랜치 전략"
description: "Git 브랜치 전략"
date: "2024-09-04"
tags:
  - Tech
  - Git
series: "기술면접"
previewImage: 'writing-help.png'
isPrivate: false
---

## 0. 서론
최근 면접을 보러 다니면서  **Git 브랜치 전략**에 대해 설명해 달라는 기술 질문을 공통적으로 받게 되었습니다. 사실 Git으로 소스 commit만 했지, 깊이있게 공부 하지 않았기 때문에 해당 질문에 대답 할 수 없었습니다.

따라서, Git 브랜치 전략에 대해 정리해보고자 합니다.

## 1. Git 브랜치 전략이란?

Git은 브랜치라는 것을 사용하는데요. 브랜치는 특정 시점 스냅샷 같은 개념이라고 생각하시면 됩니다.   
브랜치를 사용하면 한 프로젝트에서 서로 여러 작업을 동시에 수행하면서도, 작업간의 영향을 최소화 할 수 있습니다.

이런 Git의 브랜치를 관리하는 전략을 Git 브랜치 전략이라고 말합니다.

## 2. Git 브랜치 전략 사용 목적

그렇다면 Git 브랜치 전략을 사용하는 목적이 뭘까요?   
Git 브랜치 전략을 사용하는 목적에는 여러가지가 있지만 **문제가 생겼을 때 빠르게 복구하기 위해서**라고 생각합니다. 앞서 설명한 것처럼 브랜치를 사용하면 여러 가지 작업을 동시에 안전하게 진행할 수 있고, 언제든지 문제가 생기면 원래 상태로 돌아갈 수 있습니다.   

## 3. Git 브랜치 전략 종류

대표적인 Git 브랜치 전략에 대해 알아보겠습니다.

+ Git Flow
  + 브랜치 설명
    + `main 브랜치`
      + main 또는 master 브랜치 의미.
      + 항상 배포 가능한 상태를 유지해야 합니다.
    + `develop 브랜치` 
      + 개발이 완료된 코드를 통합하는 브랜치.
      + 모든 기능은 develop 브랜치로 병합된 후 테스트 되어야 합니다.
    + `feature 브랜치` 
      + 개발을 위해 develop 브랜치에서 파생된 브랜치.
      + 개발이 완료되면 develop 브랜치로 병합됩니다.
    + `release 브랜치` 
      + 배포 준비가 된 코드를 관리하는 브랜치.
      + develop 브랜치에서 파생되어 테스트와 버그 수정을 거쳐 main 브랜치에 병합됩니다.
    + `hotfix 브랜치`
      + main 브랜치에서 직접 파생된 브랜치.
      + 긴급한 버그 수정을 위해 사용되며, 수정 후 main과 develop 브랜치에 병합됩니다.
  + 과정
  ![GitFlow](https://images.squarespace-cdn.com/content/v1/5cd29903aadd34273bef66f8/50f3fcb5-5798-481c-85f0-5a85f0886ed9/Gitflow.png?format=2500w)
  + 특징
    + 복잡한 프로젝트에서 브랜치를 체계적으로 관리하기 위한 전략입니다. **주로 여러 단계의 개발과 배포를 체계적으로 관리하고자 할 때 사용**됩니다.
    + **릴리즈와 관련된 버전을 체계적으로 관리하는 데 유리**합니다.
  + 장/단점
    + 개발과 릴리즈 준비를 분리하여 안정성을 유지할 수 있습니다.
    + 브랜치가 많아지면 복잡해질수 있습니다.
+ GitHub Flow
  + 브랜치 설명
    + `main 브랜치`:
      + Git Flow의 `main 브랜치`와 동일합니다.
    + `feature 브랜치`:
      + 기능 또는 버그 수정을 위해 main 브랜치에서 파생된 브랜치
      + 개발이 완료되면 `pull request`를 통해 코드 리뷰를 받고 main 브랜치로 병합됩니다.
  + 과정
  ![GitHubFlow](https://images.squarespace-cdn.com/content/v1/5cd29903aadd34273bef66f8/e05668eb-89fa-4ee0-8350-35c93d029fad/GitHub+Flow.png?format=2500w)
  + 특징
    + 소규모이거나 빠른 배포 주기를 가진 프로젝트를 위해 제안된 **간단하고 단순한 브랜치 전략**입니다.
    + 단일 main 브랜치에서 이루어지며, feature 브랜치를 통해 코드 변경을 관리합니다.
    + GitHub Flow는 PR 생성 시 자동으로 테스트가 실행되도록 설정할 수 있습니다. 이를 통해 코드가 main 브랜치에 병합되기 전에 버그가 없는지 기능이 정상적으로 동작하는지를 확인할 수 있습니다. 이를 통해 소스 코드의 품질까지 향상 시킬 수 있습니다.
  + 장/단점
    + 간단하고 직관적인 구조, 빠른 배포와 피드백 주기에 적합합니다.
    + 릴리즈와 핫픽스 관리가 다소 비효율적일 수 있습니다.
+ GitLab Flow
  + 브랜치 설명
    + `production 브랜치`
      + 운영 환경에 배포되는 브랜치.
    + `environment-specific 브랜치`
      + 다양한 환경(staging, pre-production 등)에 맞는 브랜치로, 각 환경에 맞게 코드가 준비됩니다.
    + `feature 브랜치`
      + 개발을 위한 브랜치로 특정 환경 브랜치에 병합됩니다.
  + 과정
  ![GitLabFlow](https://images.squarespace-cdn.com/content/v1/5cd29903aadd34273bef66f8/87ed52b9-cb2e-456a-b345-c04121fb49b2/Gitlab+flow.png?format=2500w)
  + 특징
    + **GitHub Flow와 Git Flow의 장점을 결합**한 브랜치 전략입니다.
    + 주로 main 브랜치와 feature 브랜치 외에도 환경 기반 브랜치를 사용합니다.
  + 장/단점
    + 환경에 맞는 브랜치 관리로 안정성 향상시킬 수 있으나, 환경 브랜치 관리가 복잡할 수 있습니다.
## 4. 결론
배포를 체계적으로 해야되는 경우에는 Git Flow를 사용하고, 배포를 자주 해야되는 경우에는 GitHub Flow를 사용하면 될 것 같습니다.
프로젝트의 규모와 배포 주기에 따라서 알맞은 Git 브랜치 전략을 세우는것이 중요합니다.

+ 참조
  + https://be-student.tistory.com/83
  + https://parkstate.tistory.com/33
  + https://www.eisquare.co.uk/blogs/how-to-choose-your-branching-strategy