import * as m from 'mithril'
import PollModel, { IPoll } from '../models/Poll'

export class CreateForm implements m.Component {
	private poll: IPoll = {};

	constructor() { }

	addQuestion = (eventQuestion) => {
		this.poll.question = eventQuestion.target.value;
	}

	addAnswerOne = (eventAnswerOne) => {
		this.poll.answerOne = eventAnswerOne.target.value;
	}

	addAnswerTwo = (eventAnswerTwo) => {
		this.poll.answerTwo = eventAnswerTwo.target.value;
	}

	addAnswerThree = (eventAnswerThree) => {
		this.poll.answerThree = eventAnswerThree.target.value;
	}

	savePoll = () => {
		console.log("saving:")
		console.log(this.poll)
		PollModel.save(this.poll);
	}

	view() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 mx-auto">
						<form>
							<div className="form-group">
								<label for="question">Question</label>
								<input type="text" className="form-control" id="question"
									onchange={this.addQuestion} />
							</div>
							<div className="form-group">
								<label for="answerOne">Answer One</label>
								<input type="text" className="form-control" id="answerOne"
									onchange={this.addAnswerOne} />
							</div>
							<div className="form-group">
								<label for="answerTwo">Answer Two</label>
								<input type="text" class="form-control" id="answerOTwo"
									onchange={this.addAnswerTwo} />
							</div>
							<div className="form-group">
								<label for="answerThree">Answer Three</label>
								<input type="text" class="form-control" id="answerThree"
									onchange={this.addAnswerThree} />
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary"
									onclick={this.savePoll}>
									Create
							</button>
							</div>
							{this.poll != undefined}
							<div className="form-group">
								<a href={`/poll/${PollModel.saved != undefined ? PollModel.saved.linkString : "/" }`} className="link" oncreate={m.route.link}>Go to poll!</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}