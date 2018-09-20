import * as m from 'mithril'

export interface IPoll {
    id?: number;
    linkString?: string;
    question?: string;
    answerOne?: string;
    answerTwo?: string;
    answerThree?: string;
}

export class PollModel {
    private polls: IPoll[] = [];

    constructor() {
        
    }

    fetch() {
        m.request({
            method: "GET",
            url: "http://localhost:3250/poll",
            withCredentials: false
        }).then((result: any) => {
            result
        });
    }
    
    save(poll: IPoll) {
        console.log(poll)
         m.request<string>({
            method: "POST",
            url: "http://localhost:3250/poll",
            data: poll,
            withCredentials: false
        }).then((result) => {
            return result
        });
    }
}