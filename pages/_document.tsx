
import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script';
import React from "react";


export default function Document() {
	return (
		<Html lang="en">
			
<Head>
{/*
				Author: inovativy
                 license: MIT License
                  */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
    <title>inovativy</title>
       <meta name="description" content="inovativy - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AL/ML, and Design. Join my journey." />

    {/*These are need for PWA*/}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="inovativy" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta name="msapplication-tap-highlight" content="no" />

            <meta name="theme-color" content="#000000" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="English"/>
            <meta name="revisit-after" content="1 days"/>
            <link rel="canonical" href="https://innovativy.com" />
            <meta name="license" content="MIT License" />
            <meta httpEquiv="content-language" content="en-us" />

            <link rel="preconnect" href="https://innovativy.com" />

            <link rel="dns-prefetch" href="https://innovativy.com" />

            <meta name="author" content="inovativy" />

            <link rel="alternate" hrefLang="en" href="https://innovativy.com" />

            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />

            <link rel="apple-touch-icon" href="/img/logo_rounded.png" />

            <link rel="apple-touch-icon" sizes="180x180" href="/img/logo_rounded.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg" />
             <link rel="icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>
            <link rel="shortcut icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>

             <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="manifest" href="/manifest.json" />





            <meta property="og:title" content="inovativy" key="title" />
            <meta property="og:description" content="inovativy - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey." />
            <meta property="og:image" content="" />
            <meta property="og:image:secure_url" content="" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:alt" content="inovativy" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />
            <meta property="og:url" content="https://innovativy.com" />
            <meta property="og:type" content="website" />
            <meta property="og:profile" content="https://no-site.com" />
            <meta property="og:site_name" content="inovativy" />
             <meta property="og:locale" content="en_US" />


            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="inovativy" />
            <meta name="twitter:description" content="inovativy - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey." />
            <meta name="twitter:image" content="" />
            <meta name="twitter:domain" content="https://innovativy.com" />


    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='2048x2732' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1668x2224' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1536x2048' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1125x2436' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1242x2208' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='750x1334' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='640x1136' />

            {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
            <meta name="keywords" content="
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, inovativy Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, inovativy Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, inovativy Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    inovativy DevOps, IT Portfolio, Web Developer Portfolio, inovativy Developer,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

" />


            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "inovativy",
          "url": "https://innovativy.com",
          "sameAs": [
            "https://innovativy.com",
            "https://www.linkedin.com/in/innovativy-",
            "https://medium.com/@innovativy",
            "https://twitter.com/innovativy",
            "https://dev.to/innovativy"
          ]
        }`
                }}
            />


            {/*Edit this to your according FAQ */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Have you worked on any projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams. These projects have allowed me to apply theoretical knowledge to real-world scenarios, honing my practical skills in software development, web technologies, and computer networks."
                }
              },
              {
                "@type": "Question",
                "name": "Can we recruit you?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I am currently looking for jobs and I have also done several open-source projects as well."
                }
              },
              {
                "@type": "Question",
                "name": "Who is inovativy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "inovativy is a Full Stack Developer specializing in Cloud, DevOps, ML/AI, and Design. He is passionate about programming, innovation, and shaping the future. With expertise in various technologies and a strong background in software development, inovativy strives to create innovative solutions and contribute to the advancement of technology. His skill set includes proficiency in cloud computing, DevOps practices, machine learning/artificial intelligence, and design principles. inovativy is dedicated to staying up-to-date with the latest industry trends and leveraging his knowledge to drive impactful and transformative projects."
                }
              },
              {
                "@type": "Question",
                "name": "Where is inovativy from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "inovativy is from Madurai, Tamil Nadu, India."
                }
              },
              {
                "@type": "Question",
                "name": "What does inovativy do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "inovativy leverages Cloud, DevOps, ML/AI, Design, and web/mobile apps to benefit people with optimized operations and user-friendly experiences."
                }
              }
            ]
          }
        `,
            }} />

            {/*Edit this to your according to your website*/}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://innovativy.com/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Docs",
              "item": "https://innovativy.com/docs"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Articles",
              "item": "https://innovativy.com/articles"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://innovativy.com/projects"
            },{
              "@type": "ListItem",
              "position": 5,
              "name": "Sign In",
              "item": "https://innovativy.com/signin"
            }]
          }
        `
            }} />

            {/*Edit this to your according to your website*/}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: `
          {
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "NeuroLink",
            "description": "NeuroLink is a Python package that aims to provide various AI capabilities, including a chatbot, image processing, audio processing, Django support, and more. It utilizes TensorFlow and other related technologies for natural language processing and AI tasks.",
            "alternateName": "neurolink",
            "url": "https://no-site.com/neurolink",
            "logo": "",
             "sameAs": [
            "https://www.linkedin.com/in/innovativy-/"
        ]          }
        `
            }} />
	{/*theme*/}
	<Script id="theme.util.jsx" strategy="beforeInteractive" >
		{`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
	</Script>

    {/* Google Analytics */}
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"/>
    <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SDJ0K1Y70X', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
</Head>

			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}
