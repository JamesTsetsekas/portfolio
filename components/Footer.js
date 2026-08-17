import React from 'react';
import Link from 'next/link'

export const Contact = ({ title, description, buttons }) => {
	return (
    <section id="contact" className="contact-section text-center">
			<div className="container">
				<p className="section-kicker">Contact</p>
				<h2 className="section-title">{title}</h2>
				<div className="contact-copy">
					<p>{description}</p>
					<div className="contact-actions">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export const Footer = () => {
	return (
    <footer className="site-footer text-center">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} {" "}
          <Link href="https://jamestsetsekas.com/">
						<a>James Tsetsekas</a>
					</Link>
					.
				</small>
			</div>
		</footer>
	);
}
