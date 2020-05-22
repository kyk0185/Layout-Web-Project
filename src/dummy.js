export const data = [
    {
        key: 1, //고유번호
        sido:'서울시교육청',    //시도명
        titles:  //소제목 목록
        [
            {
                key:1,
                name:'제목1',
                code:'B10',
                fileName: 'test1.exe',
            },
            {
                key:2,
                name:'제목2',
                code:'B10',
                fileName: 'test2234.exe',
            },
            {
                key:3,
                name:'제목3',
                code:'B10',
                fileName: 'test3.exe',
            },
            {
                key:4,
                name:'제목4',
                code:'B10',
                fileName: 'test4.exe',
            }
        ]
    },
    {
        key: 2,
        sido:'인천시교육청',
        titles:
        [
            {
                key:11,
                name:'제목1',
                code:'E10'
            },
            {
                key:21,
                name:'제목2',
                code:'E10'
            },
            {
                key:31,
                name:'제목3',
                code:'E10'
            },
            {
                key:41,
                name:'제목4',
                code:'E10'
            },
            {
                key:51,
                name:'제목5',
                code:'E10'
            },
            {
                key:61,
                name:'제목6',
                code:'E10'
            }
        ]
    },
    {
        key: 3,
        sido:'부산시교육청',
        titles:
        [
            {
                key:12,
                name:'제목1',
                code:'C10'
            },
            {
                key:22,
                name:'제목2',
                code:'C10'
            },
            {
                key:32,
                name:'제목3',
                code:'C10'
            },
            {
                key:42,
                name:'제목4',
                code:'C10'
            },
            {
                key:52,
                name:'제목5',
                code:'C10'
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
