# ThanksMeal Art Asset Manifest

원본 콘셉트의 검은 손그림 선, 흰 면, 단순한 표정과 식탁 모티프를 기준으로 생성한 투명 PNG 리소스다.

## 파일 목록

| 파일 | 크기 | 용도 |
|---|---:|---|
| `title-family-table.png` | 1536×1024 | 타이틀·메인 화면의 가족 식사 일러스트 |
| `family-portraits.png` | 2172×724 | 단톡방 프로필용 가족 4인 가로 스프라이트 |
| `table-empty.png` | 1624×969 | 참석자 UI용 4인 빈 식탁 베이스 |
| `ui-icons.png` | 1448×1086 | 하트·별·채팅·시간·음식·외식 등 12개 아이콘 |
| `event-family-outing.png` | 1624×969 | 8회차 이후 가족 외식 이벤트 카드 |
| `event-dad-cooking.png` | 1536×1024 | 아빠 요리 이벤트 카드 |
| `event-interruptions.png` | 1536×1024 | 반복 플레이 돌발 상황 6종 스프라이트 |

모든 PNG는 알파 채널을 포함한다.

## UI v2 — 얼굴 중심 채팅 화면

현재 게임 화면에 맞춰 전체 가족 장면 대신 얼굴 프로필과 작은 UI 아이콘만 사용하는 세트다. 기존 리소스를 덮어쓰지 않고 `ui-v2/`에 분리했다.

| 파일 | 크기 | 용도 |
|---|---:|---|
| `ui-v2/family-face-avatars.png` | 2172×724 | 아빠·엄마·나·동생의 4열 얼굴 스프라이트 |
| `ui-v2/avatar-dad.png` | 543×724 | 아빠 개별 프로필 |
| `ui-v2/avatar-mom.png` | 543×724 | 엄마 개별 프로필 |
| `ui-v2/avatar-me.png` | 543×724 | 나 — 20대 후반, 성별 중립 |
| `ui-v2/avatar-sibling.png` | 543×724 | 동생 — 10대 후반, 성별 중립 |
| `ui-v2/core-ui-icons.png` | 1448×1086 | 채팅 화면용 핵심 아이콘 12종 |
| `ui-v2/title-logo-cute.png` | 2024×777 | 투명 배경의 메인 게임 타이틀 로고 |
| `ui-v2/title-logo-cutlery-exclamation.png` | 2087×754 | 식기 느낌표가 적용된 권장 타이틀 로고 |
| `ui-v2/title-logo-cutlery-only.png` | 2086×754 | 밥그릇 장식을 제거한 최종 타이틀 로고 |
| `ui-v2/start-decoration-rice-bowl-hearts.png` | 1020×595 | 시작 화면용 웃는 밥그릇·하트·증기 장식 |
| `ui-v2/screen-start.png` | 972×1619 | 첫 게임 시작 화면 시안 |
| `ui-v2/screen-ending-love-filled.png` | 972×1619 | 사랑이 채워지는 성공 엔딩 화면 시안 |

가족 얼굴 스프라이트는 왼쪽부터 `아빠 / 엄마 / 나 / 동생` 순서이며 한 셀은 543×724다. 개별 PNG를 `<img>`로 사용하는 것을 기본으로 하고, 요청 수를 줄여야 할 때만 스프라이트를 사용한다.

```css
.family-avatar {
  width: 44px;
  height: 44px;
  object-fit: contain;
}

.family-avatar--large {
  width: 64px;
  height: 64px;
}
```

`core-ui-icons.png`는 4열 × 3행이며 한 셀은 362×362다.

```text
1행: 하트 / 별 / 시계 / 밥그릇
2행: 냄비 / 의자 / 달력 / 휴대폰
3행: 말풍선 / 수저·젓가락 / 식당 / 반짝임
```

아이콘 스프라이트 사용 시 `background-size: 400% 300%`를 적용한다. 아이콘 선과 얼굴 선이 모두 검정이므로 밝은 크림색 또는 흰색 배경에서 사용한다. 하트·별의 강조색은 이미지에 직접 칠하지 않고 CSS 배경이나 배지 색상으로 더한다.

### 시작·엔딩 화면

- 시작 화면은 게임 제목, 가족 4인 얼굴, `일주일 시작하기` 버튼의 세 단계 위계로 구성한다.
- 엔딩 화면은 감점보다 축적을 강조하며, 채워진 하트 5개와 `가족의 마음이 따뜻하게 채워졌어요`를 핵심 결말 문구로 사용한다.
- 주간 결과 수치는 플레이 데이터에 따라 HTML 텍스트로 교체할 수 있다. 현재 시안의 `5회 / +4 / 7`은 예시 값이다.
- 두 이미지는 완성 화면의 시각 기준이며, 실제 구현에서는 카드·문구·버튼을 HTML/CSS로 재구성하고 가족 얼굴 PNG를 재사용한다.

### 타이틀 로고

`title-logo-cutlery-only.png`를 기본 타이틀로 사용한다. `잘 먹었습니다` 글자 뒤의 느낌표는 숟가락·젓가락을 세로획으로, 노란 밥알을 아래 점으로 표현했다. 밥그릇·하트·증기 장식은 제거해 제목의 가독성을 높였다. 시작 화면에서는 카드 너비의 약 78~84%로 배치하고 원본 비율을 유지한다. 로고 내부에 이미 노란 강조색이 있으므로 별도의 색상 필터는 적용하지 않는다. 이전 장식 버전은 `title-logo-cutlery-exclamation.png`로 보관한다.

`start-decoration-rice-bowl-hearts.png`는 로고에 합성하지 않고 별도 요소로 사용한다. 시작 화면에서 타이틀 바로 아래에 카드 너비의 약 36~44% 크기로 배치하고, 타이틀과 장식 사이에는 모바일 기준 12~20px의 간격을 둔다. 투명 PNG이므로 `object-fit: contain`을 사용한다.

## 게임 방법 안내 (tutorial/)

원본 1000×1500(2:3)의 세로 카드 4장이다. 제목과 설명이 이미지 안에 포함되어 있으므로 화면에 같은 문구를 다시 적지 않는다. `object-fit: contain`으로 비율을 유지하고, 크림색 카드(`--paper`) 위에 올린다.

| 파일 | 내용 |
|---|---|
| `tutorial/game-rule-01-food-1000x1500.png` | 1/4 음식 취향 (좋아하는 2 · 별로인 1 · 못 먹는 재료 1) |
| `tutorial/game-rule-02-schedule-1000x1500.png` | 2/4 일주일 약속 배치 |
| `tutorial/game-rule-03-reply-1000x1500.png` | 3/4 5초 답장 |
| `tutorial/game-rule-04-warmth-1000x1500.png` | 4/4 식탁 온기와 나의 충전 |

## 엔딩 일러스트 (endings/)

1024×1024 정사각형 8종. 엔딩 ID와 1:1로 대응한다.

| 파일 | 엔딩 ID | 엔딩 이름 |
|---|---|---|
| `endings/ending-01-warm-week-1024.png` | `warm-week` | 함께라서 따뜻한 한 주 |
| `endings/ending-02-balanced-distance-1024.png` | `balanced-distance` | 딱 좋은 거리 |
| `endings/ending-03-waiting-table-1024.png` | `waiting-table` | 기다려준 식탁 |
| `endings/ending-04-my-week-1024.png` | `my-week` | 나를 위한 일주일 |
| `endings/ending-05-missed-week-1024.png` | `missed-week` | 조금 엇갈린 한 주 |
| `endings/ending-06-dads-table-1024.png` | `dads-table` | 아빠의 저녁 식탁 |
| `endings/ending-07-family-outing-1024.png` | `family-outing` | 모두 함께 외식하는 날 |
| `endings/ending-08-remembered-bowl-1024.png` | `remembered-bowl` | 나를 기억한 한 그릇 |

## 스프라이트 순서

### family-portraits.png

4열 × 1행이며 한 셀은 약 543×724다.

1. 아빠
2. 엄마
3. 나 — 20대 후반, 성별 중립적 외형
4. 동생 — 10대 후반, 성별 중립적 외형

CSS 사용 예시:

```css
.portrait {
  width: 72px;
  height: 96px;
  background-image: url('./family-portraits.png');
  background-size: 400% 100%;
  background-repeat: no-repeat;
}

.portrait.dad     { background-position: 0% 0%; }
.portrait.mom     { background-position: 33.333% 0%; }
.portrait.me      { background-position: 66.667% 0%; }
.portrait.sibling { background-position: 100% 0%; }
```

### ui-icons.png

4열 × 3행이며 한 셀은 362×362다.

```text
1행: 빈 하트 / 채운 하트 / 별 / 말풍선
2행: 시계 / 휴대폰 / 밥그릇 / 국그릇
3행: 수저·젓가락 / 앞치마 / 식당 / 4인 식탁
```

CSS 사용 시 `background-size: 400% 300%`를 사용한다.

### event-interruptions.png

3열 × 2행이며 한 셀은 512×512다.

```text
1행: 갑작스러운 회의 / 친구 전화 / 배터리 부족
2행: 지하철 터널 / 와이파이 끊김 / 휴대폰 위 고양이
```

CSS 사용 시 `background-size: 300% 200%`를 사용한다.

## 게임 적용 권장안

- 밝은 크림색 카드 위에 배치한다.
- 원본 비율을 유지하고 `object-fit: contain`을 사용한다.
- 검은 선 주변의 투명 여백을 임의로 흰색 처리하지 않는다.
- 타이틀 문구와 메뉴명은 이미지에 합성하지 않고 HTML 텍스트로 올린다.
- 단톡방 프로필은 원형 마스크보다 원본의 불규칙한 얼굴 윤곽을 그대로 노출한다.
- 빈 식탁 위에 가족 초상화를 좌석별로 겹쳐 참석 상태를 표현한다.
- 불참자는 초상화를 숨기고 빈 의자만 표시한다.
- 늦게 합류한 사람은 초상화의 불투명도를 낮추고 `늦게 합류` 텍스트를 함께 표시한다.

## 생성 프롬프트 세트

모든 이미지는 사용자가 제공한 콘셉트 이미지를 스타일·캐릭터 참고 이미지로 사용했다.

- 타이틀: 엄마는 왼쪽 측면, 아빠는 오른쪽 전경의 등·측면, 두 자녀는 식탁 맞은편 중앙에 앉는 사선 구도의 가족 식사 장면. 양옆 화분과 상단 제목 여백을 포함한 검은 마커 손그림, 투명 배경.
- 가족 초상화: 아빠·엄마·나·동생을 동일한 크기의 가로 4칸 프로필 시트로 구성.
- 자녀 연령: `나`는 20대 후반의 성인 비율, `동생`은 10대 후반의 후기 청소년 비율로 표현하며 두 캐릭터 모두 성별을 특정하지 않는다.
- 빈 식탁: 위·아래·왼쪽·오른쪽 좌석이 비어 있는 낮은 4인 식탁과 기본 식기.
- UI 아이콘: 하트, 별, 말풍선, 시계, 휴대폰, 밥, 국, 수저, 앞치마, 식당, 식탁을 4×3 시트로 구성.
- 가족 외식: 같은 가족 네 명이 동네 식당에서 즐겁게 식사하는 이벤트 장면.
- 아빠 요리: 안경 쓴 아빠가 앞치마를 두르고 냄비를 능숙하게 저으며 국자를 든 장면.
- 돌발 상황: 회의, 전화, 배터리, 지하철, 와이파이, 고양이를 3×2 아이콘 시트로 구성.

공통 제약은 `검정·흰색만 사용`, `두껍고 조금 흔들리는 손그림 선`, `텍스트·로고·워터마크 없음`, `투명 배경`이다.

## 원본 백업

자녀 연령 수정 전 이미지는 `originals/` 폴더에 `*-v1.png` 이름으로 보관한다.
