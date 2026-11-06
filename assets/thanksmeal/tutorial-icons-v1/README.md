# ThanksMeal Tutorial Icons v1

게임 방법 카드의 손그림 스타일을 그대로 맞춘 투명 PNG 아이콘 세트다.

## 구성

- `sprite-food-schedule-4x4.png`: 음식·일정 아이콘 16종, 1280×1280px
- `sprite-gameplay-4x4.png`: 게임 진행 아이콘 16종, 1280×1280px
- `food-schedule/`: 음식·일정 개별 아이콘, 각 256×256px
- `gameplay/`: 게임 진행 개별 아이콘, 각 256×256px
- `masters/`: 가족과 식탁 단독 고해상도 원본

## 스프라이트 순서

### 음식·일정

```text
1행: seafood-shrimp / meat-steak / noodle-bowl / soup-bowl
2행: spicy-chili / plain-leaf / oyster / peanut
3행: dairy-cheese / raw-fish-sushi / mushroom / friends
4행: hobby-controller / study-book / event-bunting / rest-cup
```

### 게임 진행

```text
1행: clock / countdown-five / chat-bubble / weekly-calendar
2행: down-arrow / family-four / rice-bowl / spoon-chopsticks
3행: side-dish / family-table / heart-empty / heart-filled
4행: sparkle / plus / meal-check / warning
```

## 사용 권장

개별 PNG는 기본 48~64px, 강조 아이콘은 72~96px로 표시한다. 원본 비율을 유지하고 `object-fit: contain`을 적용한다.

```css
.tutorial-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
}
```

스프라이트를 사용할 때는 요소 크기에 맞춰 `background-size: 400% 400%`를 적용한다.
