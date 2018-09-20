import * as m from 'mithril';
import { Vote } from './Vote'

export class PollView implements m.Component {
    view() {
        return (
            <div className="container-fluid">
                <Vote />
            </div>
        )
    }
}