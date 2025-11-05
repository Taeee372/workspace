readme 파일을 생성(git 레포 꾸미기)
Spring
0. 만약 개인브랜치에서 작업중이었다면 개인브랜치에서 작업한 내용을 add, commit
1. 개인브랜치 생성(readme 작성 전용 브랜치)
     -> git branch fea/readme
2. 프로젝트의 루트 폴더 안에 README.md 생성(README 파일은 마크다운 형식의 파일)
3. README. md 파일에 '#프로젝트' 입력
4. 작성한 파일을 원격저장소에 올리기
    ADD -> COMMIT -> PUSH
5. pull requrst 발생하면 pull request 하지 않음!!!!!
    readme 파일이 별로의 브랜치에 저장되어 있기 떄문에 dev 브랜치에서는 확인 불가
    프로젝트가 완성되기 전까지는 개인브랜치에서만 확인 가능!
6. 프로젝트가 완료되면 나의 개인브랜치를 나의 dev 브랜치와 병합
     dev 브랜치에서 'git merge 개인브랜치명'
7. 6번을 실행되도 pull reqesut 발생 -> pull request 하지 마세요!!

react + react Native (spring과 차이점은 react는 README.md 파일이 자동으로 만들어져 있음)
0. 만약 개인브랜치에서 작업중이었다면 개인브랜치에서 작업한 내용을 add, commit
1. 개인브랜치 생성(readme 작성 전용 브랜치)
     -> git branch fea/readme
2. 개인브랜치에서 readme 파일 수정
3. README. md 파일에 '#프로젝트' 입력
4. 작성한 파일을 원격저장소에 올리기
    ADD -> COMMIT -> PUSH
5. pull requrst 발생하면 pull request 하지 않음!!!!!
    readme 파일이 별로의 브랜치에 저장되어 있기 떄문에 dev 브랜치에서는 확인 불가
    프로젝트가 완성되기 전까지는 개인브랜치에서만 확인 가능!
6. 프로젝트가 완료되면 나의 개인브랜치를 나의 dev 브랜치와 병합
     dev 브랜치에서 'git merge 개인브랜치명'
7. 6번을 실행되도 pull reqesut 발생 -> pull request 하지 마세요!!







