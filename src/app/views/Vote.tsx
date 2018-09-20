import * as m from 'mithril'
import PollModel from '../models/Poll'

export class Vote implements m.Component {
    private temp?: number;

    constructor() { }

    async updateScoreOne() {
        await PollModel.fetch(PollModel.saved.linkString)
        this.temp = PollModel.current.answerOneScore;
        this.temp != undefined ? PollModel.current.answerOneScore = this.temp + 1 : this.temp = 1;
        await PollModel.patch(PollModel.current);
    }

    async updateScoreTwo() {
        await PollModel.fetch(PollModel.saved.linkString);
        this.temp = PollModel.current.answerTwoScore;
        this.temp != undefined ? PollModel.current.answerTwoScore = this.temp + 1 : this.temp = 1;
        await PollModel.patch(PollModel.current);
    }

    async updateScoreThree() {
        await PollModel.fetch(PollModel.saved.linkString);
        this.temp = PollModel.current.answerThreeScore;
        this.temp != undefined ? PollModel.current.answerThreeScore = this.temp + 1 : this.temp = 1;
        await PollModel.patch(PollModel.current);
    }

    view() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1> {PollModel.saved.question}</h1><br />
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="answerOne"
                                    onclick={this.updateScoreOne} />
                                <label class="form-check-label" for="answerOne">
                                    {PollModel.saved.answerOne}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="answerTwo"
                                    onclick={this.updateScoreTwo} />
                                <label class="form-check-label" for="answerTwo">
                                    {PollModel.saved.answerTwo}
                                </label>
                            </div>
                            <div class="form-check disabled">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="answerThree"
                                    onclick={this.updateScoreThree} />
                                <label class="form-check-label" for="answerThree">
                                    {PollModel.saved.answerThree}
                                </label>
                            </div>
                        </form>
                    </div>
                    <br />
                    <div className="col-md-8 mx-auto top-margin">
                        <h1>Score:</h1><br />
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">{PollModel.saved.answerOne}</th>
                                    <th scope="col">{PollModel.saved.answerTwo}</th>
                                    <th scope="col">{PollModel.saved.answerThree}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{PollModel.current.answerOneScore != undefined ? PollModel.current.answerOneScore : ''}</td>
                                    <td>{PollModel.current.answerTwoScore != undefined ? PollModel.current.answerTwoScore : ''}</td>
                                    <td>{PollModel.current.answerThreeScore != undefined ? PollModel.current.answerThreeScore : ''}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}