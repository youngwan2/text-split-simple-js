## 소개
이 패키지는 GSAP의 SplitText에서 영감을 받아 제작된 가벼운 및 사용하기 쉬운 텍스트 분리 유틸리티입니다. 이 도구를 사용하면 텍스트를 각각의 개별 요소로 손쉽게 나눌 수 있어 애니메이션 및 스타일링에 대한 더 큰 제어가 가능합니다. 초보자든 경험이 풍부한 개발자든간에  프로젝트에서 텍스트 애니메이션을 다루는 과정을 간소화합니다.

## 특징
쉬운 통합: 최소한의 설정으로 빠르게 프로젝트에 SimpleTextSplitter를 통합하세요.

사용자 정의 가능: 각 분리된 텍스트 요소의 모양과 애니메이션을 사용자 정의하여 디자인에 맞게 조절할 수 있습니다.

가벼움: 텍스트 분리 기능에 중점을 둔 가벼운 라이브러리로 프로젝트를 가볍게 유지하세요.

## 설치
npm을 통해 SimpleTextSplitter를 설치합니다.

```
npm install text-split-simple-js
```

## 사용법
#### HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SimpleTextSplitter 데모</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1 id="diet_title">안녕, 세상아!</h1>
  <script src="main.js"></script>
</body>
</html>
```

#### Javascript
```

/** 참고) 만약에 아래 경로로 접근 시 ./, ../ 에러가 뜬다면 아래 경로로 직접 접근하면 해결 됩니다.
* from "./node_modules/text-split-simple-js/dist/TextSplit.js";
* (Reference) If you encounter an error when accessing the path using ./ or ../, try accessing the path directly as shown below to resolve the issue.
*/
import { SplitText } from "text-split-simple-js";

// Split the text by spaces.
// 공백에 따라 텍스트 분리.
const words = new SplitText
('#diet_title').words() // ["안녕,","세상아!"]

//Separated by one syllable
// 한 음절씩 분리
const chars = new SplitText().('#diet_title').chars() //["안","녕",",","세","상","아"]

```
## 버그
- 엄청 단순한 코드라 버그가 있을까 싶지만, 혹여나 버그가 발생한다면 이에 대한 보고는 언제나 환영합니다.


## 라이선스
이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
