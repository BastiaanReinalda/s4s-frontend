import * as m from 'mithril'

export interface IPoll {
    linkString?: string;
    question?: string;
    answerOne?: string;
    answerTwo?: string;
    answerThree?: string;
    answerOneScore?: Number;
    answerTwoScore?: Number;
    answerThreeScore?: Number;
}

const PollModel = {
    current: {} as IPoll,
    fetch(linkedString: string) {
        m.request({
            method: "GET",
            url: "http://localhost:3250/poll/" + linkedString,
            withCredentials: false
        }).then(result=> {
            PollModel.current = result
        });
    },

    saved: {} as IPoll,
    save(poll) {
        return m.request<IPoll>( {
            method: "POST",
            url: "http://localhost:3250/poll",
            data: poll,
            withCredentials: false
        }).then(result => {
            console.log("the then result:")
            console.log(result)
            PollModel.saved = result
        });
    }
}
type PollModel = typeof PollModel
export default PollModel