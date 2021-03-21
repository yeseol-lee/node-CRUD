<h1> nodejs </h1>
## CRUD 기능이 있는 간단한 프로그램
## from 21/03/19 to 21/03/21 (작업기간: 3일)

app
  ├── app.js                            : 메인파일
  ├── bin
  │   └── www.js                        : 실행파일  
  │             
  ├── database                          : 데이터베이스 폴더
  │   ├── article-number.json             현재 id값, 글의 제목: id 값이 저장되어있음 (제목으로 id를 찾는 용도)
  │   ├── articles                        글의 제목은 파일이름, 내용은 파일안에 저장함
  │   │   ├── hello
  │   │   ├── three3
  │   │   └── two
  │   └── number-article.json             글의 id, 제목이 저장되어 있음 (id로 제목을 찾는 용도)
  ├── package-lock.json
  ├── package.json                       : 실행은 app폴더에서 npm start
  └── src
      ├── public
      │   ├── css
      │   │   ├── index.css
      │   │   └── update.css
      │   └── js
      │       └── index.js
      ├── routes
      │   └── home
      │       ├── ctrl-json.js           : json파일을 수정하는 함수들이 들어있음
      │       ├── home.ctrl.js           : 그 외의 함수들
      │       └── index.js               : 메인 라우팅 파일
      └── views
          ├── index.ejs                       
          └── update.ejs
