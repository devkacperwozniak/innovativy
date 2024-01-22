
// Core packages
import Badges from '../../../utils/badge.list'

// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'
import Education from "./education";
import ContactForm from '../../../ContactForm';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


export default function Career() {
	return (

				<div className="relative bg-white lg:mt-16" id='contact'>
					<div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 border-t ">
						<div className="bg-gray-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
							<div className="mx-auto max-w-lg">
								<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contact</h2>
								<p className="mt-3 text-lg leading-6 text-gray-500">Do you want to collaborate with us?</p>
								<dl className="mt-8 text-base text-gray-500">
									<div className="mt-6">
										<dt className="sr-only">Phone number</dt>
										<dd className="flex">
											<PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
											<span className="ml-3">+48 790 889 097</span>
										</dd>
									</div>
									<div className="mt-3">
										<dt className="sr-only">Email</dt>
										<dd className="flex">
											<EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
											<span className="ml-3">dev.kacper.wozniak@example.com</span>
										</dd>
									</div>
								</dl>
							</div>
						</div>
						<div className="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
							<div className="mx-auto max-w-lg lg:max-w-none">
								<ContactForm />
							</div>
						</div>
					</div>
				</div>


	)
}

const fullStack = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'php', name: 'PHP', type: 'devicon' },
	{ key: 'wordpress', name: 'WordPress', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'java', name: 'Java', type: 'devicon' },
	{ key: 'csharp', name: 'C#', type: 'devicon' },
	{ key: 'django', name: 'Django', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'c', name: 'C', type: 'devicon' },
	{ key: 'cpp', name: 'C++', type: 'devicon' },
	{ key: 'ajax', name: 'ajax', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: 'kotlin', name: 'Kotlin', type: 'devicon' },
	{ key: 'vuejs', name: 'Vuejs', type: 'devicon' },
	{ key: 'tailwindcss', name: 'TailwindCSS', type: 'devicon' },
	{ key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
	{ key: 'npm', name: 'NPM', type: 'devicon' },
	{ key: 'yarn', name: 'Yarn', type: 'devicon' },
	{ key: "angularjs", name: "AngularJS", type: "devicon" },
	{ key: "android", name: "Android", type: "devicon" },
	{ key: "firebase", name: "Firebase", type: "devicon" },
	{ key: "flask", name: "Flask", type: "devicon" }


];