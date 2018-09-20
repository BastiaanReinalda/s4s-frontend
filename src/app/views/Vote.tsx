import * as m from 'mithril'
import PollModel from '../models/Poll'

export class Vote implements m.Component {
    private data: any;
    private temp: Number;

    constructor(vnode) {
        this.data = vnode.attrs.data;
    }

    view(vnode) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                    <h1> {PollModel.saved.question}</h1><br />
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="answerOne"/>
                                <label class="form-check-label" for="answerOne">
                                    {PollModel.saved.answerOne}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="answerTwo"/>
                                <label class="form-check-label" for="answerTwo">
                                    {PollModel.saved.answerTwo}
                                </label>
                            </div>
                            <div class="form-check disabled">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="answerThree"/>
                                <label class="form-check-label" for="answerThree">
                                    {PollModel.saved.answerThree}
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}