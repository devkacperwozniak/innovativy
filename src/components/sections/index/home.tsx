
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
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				{/* <SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="From an early age, my passion for creating new things has been a driving force. Immersed in the world of design and coding, I honed my skills and explored innovative solutions. This love for creation has shaped my career, fueling my desire to bring impactful and visually stunning projects to life. With meticulous attention to detail and a keen eye for aesthetics, I strive to craft exceptional and memorable experiences."
				/> */}
				<section className={about.content}>
					<div className={about.copy}>
						<BadgesBlock
							title="Custom Software Development"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="fingerprint"
							copy="One of the most common question asked by companies: how can we streamline our procedures? No matter if you already have plan or you just encountered a problem that must be solved - we'll discuss possible options with you and deliver a solution. Innovativy is focused on innovative solutions that helps your company grow faster. Automating repetitive tasks can save time and reduce errors. There are various approaches for automating tasks depending on the nature of the tasks and the context."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`} invertedColor={undefined} />
						<CopyBlock
							title="Development and Projects"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'code']}
							copy="Development and project execution are my passion. I thrive on the challenges of bringing ideas to life through coding and turning concepts into functional, robust solutions. With meticulous planning, efficient workflows, and a keen eye for detail, I ensure successful project delivery, meeting objectives and exceeding expectations."
						/>
					</div>
				</section>
				<section className={about.content}>
					<div className={about.copy}>
						<CopyBlock
							title="Security and Privacy"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'shield-alt']}
							copy="Security and privacy are paramount in my approach to development. I prioritize the protection of sensitive data and implement robust security measures. By adhering to industry best practices and staying updated on emerging threats, I ensure that users' information is safeguarded. Trust and confidentiality are the cornerstones of my work, fostering secure and private experiences for all."
						/>
						<CopyBlock
							title="Constant Learning and Improvements"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'book']}
							copy="I have an insatiable thirst for knowledge and a passion for continuous learning and development. Keeping up with the latest industry trends and emerging technologies allows me to stay ahead of the curve. By actively seeking new challenges and expanding my skill set, I constantly push the boundaries of my abilities, ensuring that I deliver cutting-edge solutions and provide valuable insights to clients."
						/>



						<BadgesBlock
							title="Research and planning"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="fingerprint"
							copy="One of the most exhilarating aspects of my creative process is conducting in-depth research and meticulous planning for development projects. From Design Systems to Brand Strategy, I relish the opportunity to explore various touchpoints of user experience. Constantly seeking to expand my knowledge and skills, I immerse myself in research to stay ahead of industry trends. By strategically planning and executing projects, I aim to create exceptional digital experiences that exceed expectations and deliver measurable results."
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
