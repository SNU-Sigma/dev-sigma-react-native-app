# 시그마 개발팀 앱 프로젝트
## 실행 방법
<details>
  <summary>✋ 아래 실행 전 Yarn, expo-cli 설치 필수</summary>
  
  - 이 프로젝트는 패키지 관리 툴로 Yarn(Classic)을 사용하기 때문에, Yarn 설치가 되어있음을 필요로 합니다. <a href="https://classic.yarnpkg.com/lang/en/docs/install">설치 방법</a></li>
  - 이 프로젝트는 Expo를 사용하기 때문에, `npm` 혹은 `yarn`으로 `expo-cli`가 글로벌하게 설치되어있어야 합니다.
      ```sh
      # 아래 둘 중 하나 선택
      npm install -g expo-cli   # npm 써서 글로벌하게 설치
      yarn global add expo-cli  # yarn 써서 글로벌하게 설치
      ```

</details>

```sh
cd (클론된 경로)/dev-sigma-react-native-app  # 폴더 위치로 이동
yarn                                      # 의존성 있는 npm 패키지들 로컬로 다운로드
yarn start                                # 접속할 수 있는 Expo QR코드 생성
```
같은 네트워크에 연결된 실제 모바일 디바이스에서 Expo 앱을 다운받고, 앱을 켜서 QR코드를 찍으면 실행되는 것을 확인할 수 있습니다. (앱 다운로드 링크: [안드로이드](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) / [iOS](https://itunes.apple.com/app/apple-store/id982107779))
<details>
  <summary>다른 네트워크에 연결된 모바일 디바이스에서의 실행?</summary>
  
  `yarn start`가 실행되고 있는 터미널에서 `d`를 눌러서 developer tools 사이트가 뜨도록 하고, 이 사이트에서 QR코드 위에서 Tunnel/LAN/Local 중 Tunnel을 선택해줍니다. 그러면 같은 네트워크에 연결되어있지 않은 디바이스에서도 실행해볼 수 있는데, 앱이 로드되는 데까지 걸리는 시간이 길어질 수는 있습니다.
  
</details>

## 협업을 위한 지식 (ESLint, Prettier, GitHub, ...)
현재는 [이 Notion 문서](https://sjhoon.notion.site/549d0ccf72584fabaafbf9a5ee4b9e83)에 정리되어 있습니다. 추후에 `README.md`로의 migration이 이뤄지면 좋을 것 같습니다.
