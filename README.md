# Alarm

**React와 Redux**를 복합적으로 이용한 Single Page Alarm web application

## UI example

#### 알람 등록 예시 UI

![Alarm](/readme-assets/ui_example.png)

#### 알림 예시 UI

![Alarm](/readme-assets/ui_example_alert.png)

## 기능
 - 현재 날짜, 요일과 시간이 화면에 표시되며, 1초 간격으로 업데이트
 - 알람 추가
 - 개별 알람 끄기 또는 삭제 가능
 - 알람 목록은 알람시간 기준 오름차순 표시
 - 알림 후 해당 알람은 삭제됨
 - Message 란에는 가장 직전에 울린 알람의 상세가 표시됨

### 시계 모드
- 일반: 소리 알림
- 진동: 진동 알림
- 야간: 긴급 알람만 소리 알림

### 알람 종류
- 일반 알람
- 긴급 알람

### 시계 모드와 알람 종류에 대한 동작

![Alarm](/readme-assets/clock_alarm_mode.png)


## Installation

```sh
npm install
```

## Usage

```sh
npm start
// localhost:3000
```

