export const data = [
    {
        key: 1,
        sido:'서울시교육청',
        code:'B10',
        titles:
        [
            {
                key:1,
                name:'제목1',
                fileName: '카카오톡 설치파일.exe'
            },
            {
                key:2,
                name:'제목2',
            },
            {
                key:3,
                name:'제목3',
            },
            {
                key:4,
                name:'제목4',
            }
        ]
    },
    {
        key: 2,
        sido:'인천시교육청',
        code:'E10',
        titles:
        [
            {
                key:1,
                name:'제목1',
            },
            {
                key:2,
                name:'제목2',
            },
            {
                key:3,
                name:'제목3',
            },
            {
                key:4,
                name:'제목4',
            },
            {
                key:5,
                name:'제목5',
            },
            {
                key:6,
                name:'제목6',
            }
        ]
    },
    {
        key: 3,
        sido:'부산시교육청',
        code:'C10',
        titles:
        [
            {
                key:1,
                name:'제목1',
            },
            {
                key:2,
                name:'제목2',
            },
            {
                key:3,
                name:'제목3',
            },
            {
                key:4,
                name:'제목4',
            },
            {
                key:5,
                name:'제목5',
            }
        ]
    },
]
export const userInfo = {
    //roles
     roles :[
       {role_no : 1, role_name: '관리자', code:'A00'},
       {role_no : 2, role_name: '서울시교육청', code:'B10'},
       {role_no : 3, role_name: '인천광역시교육청', code:'E10'},
       {role_no : 4, role_name: '부산광역시교육청', code:'C10'},
     ],
     //users
      users:[
       {user_no : 1, id: 'admin', pw: '1234', user_name : '홍길동', role_no : 1},
       {user_no : 2, id: 'susers', pw: '1234', user_name : '홍길동2', role_no : 2},
       {user_no : 3, id: 'iusers', pw: '1234', user_name : '홍길동3', role_no : 3},
       {user_no : 4, id: 'busers', pw: '1234', user_name : '홍길동4', role_no : 4},
     ]
}
