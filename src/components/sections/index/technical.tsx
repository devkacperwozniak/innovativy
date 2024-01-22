
// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

// Section scss
import technical from '../../../styles/scss/sections/index/about.module.scss'
import Career from './optional/career';


export default function Technical() {
	return (<>
		<Section classProp={`${technical.section} borderBottom`}>
			<Container spacing={['verticalLrg']}>
				<SectionTitle
					title="How we do it"
					preTitle=""
					subTitle=""
				/>
				<section className={`${technical.content} ${technical.container}`}>
					<div className={technical.copy}>
						<BadgesBlock
							title="Technologies that we use"
							copy="As a passionates problem solvers, we thrive on creating innovative solutions through coding. From front-end development to back-end systems and APIs on DevOps engineering, we embrace challenges and enjoy pushing the boundaries of what's possible."
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined} />

					</div>

				</section>
			</Container>
			</Section>
			<Section classProp={`${technical.section} borderBottom`}>
			<div id="contact">
				<SectionTitle
					title="Contact"
					preTitle=""
					subTitle=""
				/>
				<Career />
			</div>
		</Section>

	</>
	)
}
{/*Badge Block*/ }

const tech = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'nestjs', name: 'NestJS', type: 'devicon' },
	{ key: 'graphql', name: 'GraphQL', type: 'devicon' },
	{ key: 'postgresql', name: 'PostGreSQL', type: 'devicon' },
	{ key: 'kubernetes', name: 'Kubernetes', type: 'devicon' },
	{ key: 'docker', name: 'Docker', type: 'devicon' },
	{ key: 'ci/cd', name: 'CI/CD', type: 'devicon' },
	{ key: 'jenkins', name: 'Jenkins', type: 'devicon' },
	{ key: 'prometheus', name: 'Prometheus', type: 'devicon' },
	{ key: 'grafana', name: 'Grafana', type: 'devicon' },
	{ key: 'gcp', name: 'Google Cloud Platform', type: 'devicon' },
	{ key: 'argo', name: 'Argo', type: 'devicon' },
];