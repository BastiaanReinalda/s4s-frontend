import m from 'mithril';

export class Poll {
    
    public question = ""
    public answerOne = ""
    public answerTwo = ""
    public answerThree = ""

    constructor(){ 
        m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/polls",
            data: this.question + this.answerOne + this.answerTwo + this.answerThree ,
            withCredentials: true,
        })
        .then((result : any) => {
           this.question = result.data
        })
    }
}


// var Poll = {
//     question: "",
//     answerOne: "",
//     answerTwo: "",
//     answerThree: "",
//     setQuestion: function(value) {
//         Poll.question = value
//     },
//     setAnswerOne: function(value) {
//         Poll.answerOne = value
//     },
//     setAnswerTow: function(value) {
//         Poll.answerTwo = value
//     },
//     setAnswerThree: function(value) {
//         Poll.answerThree = value
//     },
//     canSubmit: function() {
//         return Poll.question !== "" && Poll.answerOne !== "" && Poll.answerTwo !== ""
//     },
//     create: function() {/*...*/},
// }

// module.exports = Poll