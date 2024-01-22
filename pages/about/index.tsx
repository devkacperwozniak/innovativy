import dynamic from 'next/dynamic';
const About = dynamic(() => import('../../src/components/sections/index/about'));

interface HomePageProps {
	spacing: string[];
}

export default function HomePage({ spacing }: HomePageProps) {
	const renderContent = () => (
		<div>
			<About />
		</div>
	);

	return (
				renderContent()
	);
}