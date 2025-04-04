/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ greeting, title, description, image, buttons }) => {
	return (
		<div className="bg-secondary py-5 px-5 rounded-3">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h2 className="text-primary fw-bold display-3 greeting"><span className="wave"><img alt="👋" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" src="/wave.webp" style={{ color: 'transparent', flex: '0 0 auto' }} className="wave" /></span>{greeting.text[0]}<br />{greeting.text[1]}<span className="highlight">{title}</span></h2>
						<p>{description}</p>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-primary my-1 mx-3">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">{value.title}</a>
									</Link>
							))}
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={publicRuntimeConfig.basePath + image}
							alt="profile of James Tsetsekas"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5 border border-secondary rounded-3">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}
