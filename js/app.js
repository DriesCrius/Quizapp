//Database settings
const dataURL = "https://api.jsonbin.io/b/5f00f1350bab551d2b6bfd42/1";
const fetchInitGet = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
        'secret-key': `$2b$10$mez7yhjYtq5JAg9TXgi3Yup5JQdL9lJqywUT2RNm9ka6Pl3D4TPWu`
    },
};

//variables and constants
const questionDiv = document.querySelector(".question");
const opt1 = document.querySelector("#answer1");
const opt2 = document.querySelector("#answer2");
const opt3 = document.querySelector("#answer3");
const opt4 = document.querySelector("#answer4");
const categoryDiv = document.querySelector(".category");
const questionNum = document.querySelector(".questionNum span");
let score = 0;
let questionsArray = [{
    id: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: "",
    category: "",
    selected: ""
}]

//event handlers


//functions
fetch(dataURL, fetchInitGet).then(
    res => res.json(),
    rej => console.error("error: " + rej)
).then(
    questions => {
        for (let k in questions) {
            questionsArray = questions[k];
            console.log(questionsArray)
        };
    }
)

let test = questionsArray[0];
console.log("hi");

