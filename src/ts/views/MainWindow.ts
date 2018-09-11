import m from 'mithril';
import { Create } from '../views/Create';

export class MainWindow {

    view() {
        return m("div",{class:"main-window"}, 
            [
                m("main",
                    m("div", {}, 
                        m(Create)
                    )
                )
            ]
        );
    }
}