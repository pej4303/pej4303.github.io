---
title: "[오류] 톰캣 프로세스 여러개 뜨는 경우"
description: "톰캣 프로세스 여러개 뜨는 경우"
date: "2023-08-12"
tags:
  - Error
  - Tomcat
series: 오류 모음집
previewImage: 'how.png'
isPrivate: false
---

> 환경설정
> + 개발툴 : 이클립스
> + Spring : 4.3.3
> + Quartz : 2.3.0
> + Tomcat : 8.5
> + Java : 8
> + 서버 :CentOS

## 1. 현상 
개발서버에서 톰캣 프로세스가 여러개가 뜨면서 메모리 너무 많이 잡아먹는 현상이 발생하였다.
**netstate -tnlp 하면 8080포트는 하나만 나오고, ps -ef | grep tomcat 하면 여러개 나왔다.**

## 2. 원인
검색을 하다가 아래의 글을 보고 quartz 스케쥴러의 문제라고 생각이 들었다. 
톰캣 서버가 종료되어도 이미 실행된 job 스레드는 종료되지 않고 계속 남는다.   
👉🏻[톰켓 프로세스 종료 이슈](https://log4day.tistory.com/m/59 "톰켓 프로세스 종료 이슈")

## 3. 해결
destroy-method 속성을 이용해서 SchedulerFactoryBean 클래스에 있는 destroy() 메소드를 추가해줬다.
```xml
<bean id="qcrmJobScheduler" class="org.springframework.scheduling.quartz.SchedulerFactoryBean" destroy-method="destroy">
    <property name="triggers">
        <list>
            <ref bean="testJobTrigger" />
        </list>
    </property>
</bean>
```

## + 추가(2023.10.13)
위 방법으로 적용 후에도 계속 발생하여 젠킨스 배포시 실행중인 톰캣 프로세스 모두 종료시키는 쉘 스크립트를 추가하였다.
```shell
#!/bin/bash

tomcat_pids=$(ps aux | grep tomcat | grep java | grep -v grep | awk '{print $2}')

if [ -n "$tomcat_pids" ]; then
    for pid in $tomcat_pids; do
        echo "PID: $pid"
        kill -9 $pid
    done
fi
```

+ 참조
    + https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/quartz/SchedulerFactoryBean.htmlhttps://log4day.tistory.com/m/59
    + https://log4day.tistory.com/m/59
