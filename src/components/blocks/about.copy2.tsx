
// Util packages
import Image from 'next/image';
import Icon from '../utils/icon';

// Define the props for the CopyBlock component
interface CopyBlockProps {
	containerClass: string;
	imgSource: string;
	icon: any;
	title: string;
	copy: string;
}

// This will return the copy block component
export default function CopyBlock({
	containerClass,
	imgSource,
	title,
	copy,
}: CopyBlockProps) {
	// Return the copy block component
	return (
		<div className={`${containerClass}`}>
			<div className="flex items-center">
				<div className="w-40 h-40 overflow-hidden rounded-full">
					<Image src={imgSource} width={200} height={200} alt="Kacper Woźniak" loading="eager" />
				</div>
				<h2 className="ml-4">{title}</h2>
			</div>
			<p>{copy}</p>
		</div>
	);
}
