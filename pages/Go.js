import Router from 'next/router';
import dynamic from 'next/dynamic';

const handler = () => Router.push({
	pathname: '/',
	query: { name: 'Zeit'}
});

// const Go = ({ url }) => (
// 	<div>
// 		<div>
// 			Click <span onClick={handler}>here</span> to Index
// 		</div>
// 	</div>
// );

const Go = dynamic({
	modules: (props) => {
		const components = {
			Hello: import('./hello')
		};

		return components;
	},
	render: (props, {Hello}) => (
		<div>
			<Hello/>
			Click <span onClick={handler}>here</span> to Index
		</div>
	)
})

export default Go;