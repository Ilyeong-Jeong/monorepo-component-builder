# `component-builder`

**Monorepo 구조에서 각각의 Component를 Bundling하고 자동으로 README upsert하는 Component Builder**

Bundling은 `webpack`을 사용, scripts/build.js 참고.

README 작성은 `@vuedoc/md`를 사용, scripts/doc.js 참고.

commander를 사용하여 CLI로 만들어 명령어를 통해 패키지 Bundling과 Markdown을 처리. 