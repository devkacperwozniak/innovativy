
// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy2'

import about from '../../../styles/scss/sections/index/about.module.scss';
import React from "react";

export default function Home() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About"
					preTitle=""
					subTitle="At Innovativy, we believe that innovation is a collective effort. Your unique insights and ideas are the fuel that powers groundbreaking solutions. By sharing your thoughts with us, you're not just contributing an idea — you're shaping the future!"
				/>
				<section className={about.content}>
					<div className={about.copy}>
						<CopyBlock
							title="Kacper Woźniak"
							containerClass={about.container}
							imgSource="/img/kacper-wozniak.png"
							icon={['fas', 'user']}
							copy="Fullstack Developer, DevOps Engineer"
						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}
const methods = [
	{ key: 'machinelearning', name: 'Machine Learning', type: 'fad', icon: 'devicon' },
	{ key: 'artificialintelligence', name: 'Artificial Intelligence', type: 'fad', icon: 'devicon' },
	{ key: 'deeplearning', name: 'Deep Learning', type: 'fad', icon: 'devicon' },
	{ key: 'neuralnetworks', name: 'Neural Networks', type: 'fad', icon: 'devicon' },

];