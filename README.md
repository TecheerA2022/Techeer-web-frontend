# Techeer-web-frontend

## Getting Started

*만약 npm이 설치되어있지 않다면 먼저 npm을 설치해주세요*
<br/>
<br/>

### Run with docker

1. docker build

```bash
docker build -f Dockerfile.dev -t techeer-a .
```

-f : Dockerfile.dev가 따로 있기때문에 build 할 대상을 지정해주어야 함   
-t : docker image 태그   

2. docker images

```bash
docker images
```

위 명령어를 입력하여 techeer-a라는 이미지가 생성되었는지 확인 필요

3. docker run

```bash
docker run -p 3000:3000 techeer-a
```

3000 port를 이미 사용 중이라면 3001:3000 이런식으로 바꾸어 실행하면 localhost:3001로 접속할 수 있음
<br/>
<br/>
### Run with npm

도커를 사용하지 않고 로컬로 실행하는 법

```bash
npm install
#여기서 시간이 많이 걸릴 수 있음
```

```bash
npm start
```
