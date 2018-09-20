import * as m from 'mithril'

export interface IPoll {
    id?: number;
    linkString?: string;
    question?: string;
    answerOne?: string;
    answerTwo?: string;
    answerThree?: string;
    answerOneScore?: number;
    answerTwoScore?: number;
    answerThreeScore?: number;
}

const PollModel = {
    current: {} as IPoll,
    async fetch(linkedString?: string) {
        return m.request({
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
            PollModel.saved = result
        });
    },

    updated: {} as IPoll,
    patch(poll) {
        return m.request<IPoll>( {
            method: "PATCH",
            url: "http://localhost:3250/poll",
            data: poll,
            withCredentials: false
        }).then(result => {
            PollModel.updated = result
        });
    }
}
type PollModel = typeof PollModel
export default PollModel