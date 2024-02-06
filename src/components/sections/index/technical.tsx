
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
import ContactContent from './optional/contactcontent';


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
				<ContactContent />
			</div>
		</Section>

	</>
	)
}
{/*Badge Block*/ }

const tech = [
	{ key: 'javascript', name: 'JavaScript', type: '' },
	{ key: 'typescript', name: 'TypeScript', type: '' },
	{ key: 'nodejs', name: 'NodeJS', type: '' },
	{ key: 'react', name: 'React', type: '' },
	{ key: 'nextjs', name: 'NextJS', type: '' },
	{ key: 'nestjs', name: 'NestJS', type: '' },
	{ key: 'graphql', name: 'GraphQL', type: '' },
	{ key: 'postgresql', name: 'PostGreSQL', type: '' },
	{ key: 'kubernetes', name: 'Kubernetes', type: '' },
	{ key: 'docker', name: 'Docker', type: '' },
	{ key: 'ci/cd', name: 'CI/CD', type: '' },
	{ key: 'jenkins', name: 'Jenkins', type: '' },
	{ key: 'prometheus', name: 'Prometheus', type: '' },
	{ key: 'grafana', name: 'Grafana', type: '' },
	{ key: 'gcp', name: 'Google Cloud Platform', type: '' },
	{ key: 'argo', name: 'Argo', type: '' },
];