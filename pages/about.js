import Link from 'next/link';
import dynamic from 'next/dynamic';
import Go from './Go';
// const Go = dynamic(
// 	import('./Go'),
// 	{
// 		loading: () => (<p>...</p>)
// 	}
// );

export default ({ href, name }) => (
	<div>
	  <p>Welcome to About!</p>
	  <Link href={ href } passHref>
	    <Go />
	  </Link>
	</div>
)