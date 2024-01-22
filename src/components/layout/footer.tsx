
import { useEffect, useState } from 'react';

import Container from '../structure/container';
import Icon from '../utils/icon';

import css from '../../styles/scss/structure/footer.module.scss';

import content from '../../content/section/footer.json';
import settings from '../../content/_settings.json';

interface GitHubInfo {
	stars: number | null;
	forks: number | null;
}

export default function Footer(): JSX.Element {
	const [gitHubInfo, setGitHubInfo] = useState<GitHubInfo>({
		stars: null,
		forks: null,
	});

	useEffect(() => {
		fetch(settings.portfolio.repo_api)
			.then(response => response.json())
			.then(json => {
				const { stargazers_count, forks_count } = json;
				setGitHubInfo({
					stars: stargazers_count,
					forks: forks_count,
				});
			})
			.catch(e => console.error(e));
	}, []);

	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={css.sections}>
					<ul className={css.thanks}>
						<li>
							<h4>Contact:</h4>
						</li>
						dev.kacper.wozniak@gmail.com
					</ul>
					<ul className={css.links}>
						<li>
							<h4>© Innovativy: Software House <br />Poland 2024</h4>
						</li>
					</ul>
					<ul className={css.social}>
						<li>
							<h4>Social</h4>
						</li>
						<li className={css.socialList}>
							{content.social.map(({ url, icon }, index) => {
								return (
									<a key={index} href={url} rel="noreferrer" target="_blank">
										<Icon icon={['fab', icon] as any} />
									</a>
								);
							})}
						</li>

					</ul>
				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in=""></canvas>
		</footer>
	);
}
