import React from 'react';
const Items = [
	{href: '/', title: 'Homepage'},
	{href: '/abouts-us.html', title:'Abouts us'},
	{href: '/portfolio.html', title:'Portfolio'},
	{href: '/projects.html', title:'Projects'},
	{href: '/solutions.html', title:'Solutions'},
	{href: '/contact.html', title:'Contact'}
];
function MainMenu(props) {
	const Item = props.Items;
	const ListItems = Items.map((Item) =>
		<li key={(Item.href, Item.title)}>
			<a href={Item.href} title={Item.title}> {Item.title} </a>
		</li>
	);
	return (
		<ul>
			{ListItems}
		</ul>
	);
}
export default class Navigation extends React.Component {
	render() {
		return (
			<nav className="main-menu">
				<div className="container">
						<MainMenu />
				</div>
			</nav>
		);
	}
}
