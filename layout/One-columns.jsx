import React, {Component} from 'react';
import Header from '../module/Header.jsx';
import Footer from '../module/Footer.jsx';
import Content from '../module/Content.jsx';

class OneColumns extends Component {
	render() {
		return (
			<section>
				<Header />
				<Content />
				<Footer />
			</section>
		);
	}
}

export default OneColumns;