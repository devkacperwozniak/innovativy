
// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

import about from '../../../styles/scss/sections/index/about.module.scss';
import React from "react";

export default function Home() {
	return (
		<Section classProp={`${about.section} borderBottom`} >
			<Container spacing={['verticalLrg']}>
				<SectionTitle
					title="Services"
					preTitle=""
					subTitle="" />
				<section className={about.content}>
					<div className={about.copy}>
						<BadgesBlock
							title="Custom Software Development"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="computer"
							copy="One of the most common question asked by companies: how can we streamline our procedures? No matter if you already have plan or you just encountered a problem that must be solved - we'll discuss possible options with you and deliver a solution. inovativy is focused on innovative solutions that helps your company grow faster. Automating repetitive tasks can save time and reduce errors. There are various approaches for automating tasks depending on the nature of the tasks and the context."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`} invertedColor={undefined} />
					</div>
				</section>
				<section className={about.content}>
					<div className={about.copy}>
						<BadgesBlock
							title="AI Software Development"
							containerClass={about.container}
							list={aiMethods}
							fullContainer="fullContainer"
							block="methods"
							icon="fingerprint"
							copy="AI software services - applications and tools that leverage artificial intelligence (AI) technologies to perform various tasks and enhance user experiences. These services utilize machine learning, natural language processing, computer vision, and other AI techniques to analyze data, make predictions, automate processes, and provide valuable insights."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`} invertedColor={undefined} />
					</div>
				</section>
			</Container>
		</Section>
	)
}
const methods = [
	{ key: 'productivity', name: 'Productivity', type: 'fad', icon: 'devicon' },
	{ key: 'innovativeapproach', name: 'Innovative Approach', type: 'fad', icon: 'devicon' },
	{ key: 'automation', name: 'Automation', type: 'fad', icon: 'devicon' },
	{ key: 'lowercost', name: 'Lower Costs', type: 'fad', icon: 'devicon' },
];

const aiMethods = [
	{ key: 'automationandefficiency', name: 'Automation and Efficiency', type: 'fad', icon: 'devicon' },
	{ key: 'dataanalysis and insights', name: 'Data Analysis and Insights', type: 'fad', icon: 'devicon' },
	{ key: 'personalization', name: 'Personalization', type: 'fad', icon: 'devicon' },
	{ key: 'scalability', name: 'Scalability', type: 'fad', icon: 'devicon' },
]
