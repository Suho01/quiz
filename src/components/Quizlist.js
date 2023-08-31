const QuizList = [
    {
        id : 1,
        question : "HTML의 의미를 보기에서 고르세요.",
        answer : "Hyper Text Markup Language",
        view : {
            number1 : "Hyper Text Markup Language",
            number2 : "Hyperlinks and Text Markup Language",
            number3 : "Home Tool Markup Language",
            number4 : "Hyperlinks Tool Markup Language"
        },
        hint : "하이퍼텍스트 마크업 언어입니다.",
        type : "html"
    },
    {
        id : 2,
        question : "html에서 링크를 걸고 싶을 때 사용하는 태그는?",
        answer : "<a>",
        view : {
            number1 : "<input>",
            number2 : "<img>",
            number3 : "<ul>",
            number4 : "<a>"
        },
        hint : "anchor",
        type : "html"
    },
    {
        id : 3,
        question : "html에서 사용하는 주석 처리 방법은?",
        answer : "<!-- -->",
        view : {
            number1 : "//",
            number2 : "<!-- -->",
            number3 : "/* */",
            number4 : "<* *>"
        },
        hint : "",
        type : "html"
    },
    {
        id : 4,
        question : "다음 중 CSS가 아닌 것은?",
        answer : "css components",
        view : {
            number1 : "sass",
            number2 : "tailwindcss",
            number3 : "styled components",
            number4 : "css components"
        },
        hint : "",
        type : "css"
    },
    {
        id : 5,
        question : "tailwindcss의 특징으로 바른 것은?",
        answer : "html문서 내에서 class이름 작명 없이 사용 가능하다.",
        view : {
            number1 : "html문서 내에서 class이름 작명 없이 사용 가능하다.",
            number2 : "Watch Sass가 항상 켜져 있어야 동작한다.",
            number3 : "유료 사용이다.",
            number4 : "google chrome에서 제작했다."
        },
        hint : "",
        type : "css"
    },
    {
        id : 6,
        question : "css에서 x축 기준으로 가운데 정렬하는 방법이 아닌 것은?",
        answer : "display : flex;",
        view : {
            number1 : "text-align : center;",
            number2 : "display : flex;",
            number3 : "left : 50%;, transform : translatex(-50%);",
            number4 : "margin : 0 auto;"
        },
        hint : "",
        type : "css"
    },
    {
        id : 7,
        question : "Java script가 아닌 것은?",
        answer : "mysql",
        view : {
            number1 : "mysql",
            number2 : "react",
            number3 : "vue",
            number4 : "type script"
        },
        hint : "",
        type : "js"
    },
    {
        id : 8,
        question : "반복문이 아닌 것은?",
        answer : "filter",
        view : {
            number1 : "for",
            number2 : "filter",
            number3 : "map",
                number4 : "forEach"
        },
        hint : "",
        type : "js"
    },
    {
        id : 9,
        question : "css에서 hover와 같은 동작을 하는 java script는?",
        answer : "mouseover",
        view : {
            number1 : "click",
            number2 : "mouseout",
            number3 : "mouseover",
            number4 : "keydown"
        },
        hint : "",
        type : "js"
    },
    {
        id:10,
        question:"태그 요소 중 div 태그는 어떤 이름의 약어인가요?", 
        answer: "Division", 
        view: {
            number1 : "Division ", 
            number2 : "Discount", 
            number3 : "Direct", 
            number4 : "Div"
        },
        hint: "생각해봐",
        type: "html"
    },
    {
        id:11,
        question:"태그 요소 중 p 태그는 어떤 이름의 약어인가요?", 
        answer: "Paragraph", 
        view: {
            number1 : "Parapara", 
            number2 : "Picture", 
            number3 : "Paragraph", 
            number4 : "Page"
        },
        hint: "생각해봐",
        type: "html"
    },
    {
        id:12,
        question:"다음 속성에 대한 설명 중 틀린 것을 고르세요.", 
        answer: "alt 속성은 요소에 대한 설명으로 마우스를 호버하면 툴팁을 표시", 
        view: {
            number1 : "src 속성은 필요한 소스의 경로", 
            number2 : "href 속성은 하이퍼링크가 가리키는 URL", 
            number3 : "alt 속성은 요소에 대한 설명으로 마우스를 호버하면 툴팁을 표시", 
            number4 : "lang 속성은 요소 내에 사용된 언어를 정의"
        },
        hint: "생각해봐",
        type: "css"
    },
    {
        id:13,
        question:"박스 안의 간격을 지정할 때 사용할 수 있는 속성", 
        answer: "padding", 
        view: {
            number1 : "border-style", 
            number2 : "border-width", 
            number3 : "margin", 
            number4 : "padding"
        },
        hint: "생각해봐",
        type: "css"
    },
    {
        id:14,
        question:"css 선택자 우선순위(가중치)가 올바른 것", 
        answer: "!important > ID 선택자 > class 선택자 > 가상 요소 선택자", 
        view: {
            number1 : "!important > ID 선택자 > class 선택자 > 가상 요소 선택자", 
            number2 : "Inline 스타일 > !important > 가상클래스 선택자 > class 선택자", 
            number3 : "가상 요소 선택자 > class 선택자 > 가상클래스 선택자 > 요소선택자", 
            number4 : "ID 선택자 > 가상클래스 선택자 > 요소 선택자 > 가상 요소 선택자"
        },
        hint: "생각해봐",
        type: "css"
    },
    {
        id:15,
        question:"파일이나 디렉터리의 권한을 부여하는 명령으로 알맞은 것", 
        answer: "chmod", 
        view: {
            number1 : "chgrp", 
            number2 : "chmod", 
            number3 : "umask", 
            number4 : "quota"
        },
        hint: "생각해봐",
        type: "js"
    },
    {
        id:16,
        question:"Array 메서드 중 return 값이 undefined인 것은?", 
        answer: "forEach", 
        view: {
            number1 : "find", 
            number2 : "filter", 
            number3 : "map", 
            number4 : "forEach"
        },
        hint: "생각해봐",
        type: "js"
    },
    {
        id:17,
        question:"SASS에서 Extend를 사용하기 위한 키워드로 알맞은 것은?", 
        answer: "%", 
        view: {
            number1 : "@", 
            number2 : "%", 
            number3 : "$", 
            number4 : "&"
        },
        hint: "생각해봐",
        type: "js"
    }
]

export default QuizList;