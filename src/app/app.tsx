import * as m from 'mithril';
import '../scss/main.scss';
import 'bootstrap';
import { Layout } from './views/Layout';
import { Create } from './views/Create';
import { PollView } from './views/PollView';

// m.route.prefix("");

m.route(document.body, "/", {
	"/": {
		view: () => (
			<Layout>
				<Create />
			</Layout>
		)
	},
	"/poll/:linkString": {
		view: (vnode) => (
			<Layout>
				<PollView /> 
			</Layout>
		)
	}
});

// linkString={vnode.attrs.linkString}