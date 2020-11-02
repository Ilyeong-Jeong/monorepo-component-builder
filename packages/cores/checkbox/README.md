# checkbox

체크박스 컴포넌트

## Props

| Name       | Type      | Description                                                                                         | Default     |
| ---------- | --------- | --------------------------------------------------------------------------------------------------- | ----------- |
| `checked`  | `Boolean` | 체크박스 선택 상태 여부                                                                                       | `false`     |
| `disabled` | `Boolean` | 체크박스 비활성화 여부                                                                                        | `false`     |
| `theme`    | `String`  | 사용자 지정 테마. .component-checkbox.theme-{테마이름} 과 같이 스타일시트에 클래스를 지정하고 프로퍼티에는 theme: {테마이름} 과 같이 넣고 사용한다 |             |
| `color`    | `String`  | 체크박스 색상 (theme가 지정되어 있으면 무시된다)                                                                      | `"#2196F3"` |
| `size`     | `Number`  | 체크박스 사이즈 (px, theme가 지정되어 있으면 무시된다)                                                                 | `22`        |

## Computed Properties

| Name    | Description                                                         |
| ------- | ------------------------------------------------------------------- |
| `style` | style 오브젝트<br>**Dependencies:** `theme`, `size`, `color`, `checked` |
| `check` | **Dependencies:** `checked`                                         |

## Events

| Name     | Description                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------- |
| `change` | 채크박스 토글 이벤트 value true : 체크박스 활성화 false: 체크박스 비활성화<br>**Arguments**<br><ul><li>**`value: any`**</li></ul> |

