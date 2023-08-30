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
]

export default QuizList;