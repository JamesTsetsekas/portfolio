/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ eyebrow, title, description, image, buttons, roles }) => {
	return (
		<section className="hero-section">
			<div className="container hero-inner">
				<div className="row align-items-center gy-5">
					<div className="col-lg-7">
						<p className="eyebrow">{eyebrow}</p>
						<h1 className="hero-title">{title}</h1>
						<p className="hero-description">{description}</p>
						<div className="role-grid" aria-label="Current roles">
							{roles.map((role) => (
								<div className="role-item" key={role.company}>
									<span className="role-company">{role.company}</span>
									<span className="role-focus">{role.focus}</span>
								</div>
							))}
						</div>
						<div className="hero-actions">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-primary">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">{value.title}</a>
									</Link>
							))}
						</div>
					</div>
					<div className="col-lg-5 text-center hero-portrait-wrap">
						<img
							className="img-fluid card-image" width="340"
							height="340" src={publicRuntimeConfig.basePath + image}
							alt="profile of James Tsetsekas"
							loading="eager"
							decoding="async"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export const About = ({ title, description, facts }) => {
	return (
		<section id="about" className="about-section">
			<div className="container">
				<div className="row gy-4">
					<div className="col-lg-5">
						<p className="section-kicker">About</p>
						<h2 className="section-title">{title}</h2>
						<div className="fact-grid">
							{facts.map((fact) => (
								<div className="fact" key={fact.label}>
									<strong>{fact.value}</strong>
									<span>{fact.label}</span>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-7 about-copy">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
					</div>
				</div>
			</div>
		</section>
	);
}
