# wanted-pre-onboarding-challenge-fe-2

## 소개

Todo 앱의 데이터 모델 및 간단한 기능들을 구현한 함수들을 JSDoc을 사용하여 자동으로 문서를 생성시키고 VS Code의 도움을 받아 [type checking 및 자동 완성](https://code.visualstudio.com/docs/nodejs/working-with-javascript) 기능을 제공 받는다.

실제 todo 웹 앱의 백엔드 구현이라기 보다는 많이 간소화하여 JSDoc 어노테이션 사용에 중점을 두었다.

## 📝 Requirements

### 필수 요구사항

- 필요한 데이터를 모두 모델링한다.
- 사용되는 모든 함수를 `선언부만`만든다.
  - 함수 및 클래스의 내부는 구현하지 않는다.
- `JSDoc`을 활용해 문서화한다.
- `GitHub Page`를 활용해 `JSDoc` 정적 페이지를 배포한다.

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  테그들(optional),
}
```

#### CREATE

- [x] 할 일을 추가할 수 있다.
- [x] 내용없이 추가할 수 없다.

#### READ

- [x] 모든 할 일을 조회할 수 있다.
- [x] ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- [x] ID를 제외한 모든 속성을 수정할 수 있다.
- [x] 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- [x] ID를 기반으로 특정 할 일을 삭제할 수 있다.
- [x] 모든 할 일을 제거할 수 있다.
- [x] 특정 할 일의 특정 태그를 삭제할 수 있다.
- [x] 특정 할 일의 모든 태그를 제거할 수 있다.

## Usage

### Install

```bash
npm install
```

### Build

```bash
npm run docs
```

#### Reference

- [jsdoc.app](https://jsdoc.app)