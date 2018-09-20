import * as m from 'mithril';
import { CreateForm } from './CreateForm';

export class Create implements m.Component {
    view() {
        return (
            <div className="container-fluid">
                <CreateForm />
            </div>
        )
    }
}
