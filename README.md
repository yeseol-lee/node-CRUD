<h1> nodejs </h1>
## CRUD 기능이 있는 간단한 프로그램
## from 21/03/19 to 21/03/21 (작업기간: 3일)

## 폴더구조
<img width="713" alt="Screen Shot 2021-03-21 at 19 03 04" src="https://user-images.githubusercontent.com/66362967/111900873-41d32f80-8a78-11eb-9bac-91e82fd0a099.png">

## 프로그램 구조
### 파일목록 읽어서 list로 글목록 나타내기
<ol>
  <li>index.ejs 파일에는 list, title, contents 등의 변수가 있다</li>
  <li>home.ctrl.js파일의 getList 함수가 '글의 제목-id값'이 들어있는 파일(article-number.json)을 불러온다</li>
  <li>articles 폴더에서 글목록을 불러온다</li>
  <li>전에 가져온 '글의 제목-id값'데이터를 바탕으로 각 li태그안 a의 query id값을 부여한다</li>
  <li>list변수를 반환한다</li>
</ol>

### 글목록 클릭 시 해당 글 표시하기
<ol>
  <li>글목록을 클릭하면 해당글의 id값이 url의 쿼리스트링에 들어간다</li>
  <li>그 id값으로 ctrl-json폴더의 getTitle함수를 실행한다</li>
  <li>getTitle함수는 number-article.json파일을 분석해서 글의 제목을 반환한다</li>
  <li>가져온 제목을 이용해서 articles폴더에서 해당 파일을 찾아 표시한다</li>
</ol>

### CREATE 기능
<ol>
  <li>CREATE버튼을 누르면 CSS로 숨겨져있던 form이 나타난다</li>
  <li>내용을 입력하고 버튼을 누르면 routes/home/index.js에서 제목과 내용을 받는다</li>
  <li>articles 폴더에 새로운 파일을 만든다</li>
  <li>article-number파일의 article-num속성(현재까지 만들어진 글 수를 나타냄)에 +1 한 후 '제목: article-num에 해당하는 숫자'를 추가한다</li>
  <li>number-aticle 파일에도 '숫자: 제목'을 추가한다</li>
</ol>

### UPDATE 기능
<ol>
  <li>UPDATE버튼을 누르면 /update경로로 이동한다</li>
  <li>input, textarea태그의 value값으로 현재 제목과 내용을 표시한다</li>
  <li>저장하기 버튼을 누르면 form을 통해 현재 쿼리스트링의 id값, 새로운 제목, 내용을 전송한다</li>
  <li>routes/index.js의 /update-process에서 정보를 받는다</li>
  <li>ctrl-json파일의 update(qID, newTitle)함수를 실행한다</li>
  <li>이 함수는 article-number.json과 number-article.json파일의 제목부분을 업데이트 한다</li>
  <li>articles폴더에 있는 메인파일의 이름을 수정하고, 내용도 수정한다<li>
</ol>

### DELETE 기능
<ol>
  <li>delete는 쿼리스트링에 id값을가지는 링크이다</li>
  <li>누르면 라우터의 /delete-process로 이동한다</li>
  <li>ctrl-json파일의 delete함수가 article-number.json, number-article.json파일의 해당 정보를 삭제한다</li>
  <li>articles폴더에서 해당 파일을 </li>
</ol>ㄹㄹ
</ol>
</ol>
