import React from 'react';
import Link from 'next/link'

export const Contact = ({ title, description, buttons }) => {
	return (
    <div id="contact" className="bg-white py-5 px-5 text-center rounded-3">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
    <footer className="bg-secondary text-center py-2 px-5 rounded-3">
			<div className="container text-muted">
        <small>&copy; {new Date().getFullYear()} {" "}
          <Link href="http://jamestsetsekas.com/">
						<a>James Tsetsekas</a>
					</Link>
					.
				</small>
			</div>
		</footer>
	);
}
