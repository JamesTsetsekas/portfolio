import React, { Fragment } from 'react';
import getConfig from 'next/config'
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { links, SEO, } from '../config/config';
import { Header } from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { publicRuntimeConfig } = getConfig()

export default function Home() {
  const linksSEO = {
    ...SEO,
    title: 'James Tsetsekas | Links',
    description: 'Links to James Tsetsekas\'s portfolio, writing, GitHub, and social profiles.',
    url: 'https://jamestsetsekas.com/links',
  };

  return (
    <Fragment>
      <Header seo={linksSEO} />
      <div className="links-page d-flex flex-column justify-content-between min-vh-100">
        <main id="main-content" className="links-content container text-center">
          <img className="img-fluid my-3 card-image" width="150" height="150" src={publicRuntimeConfig.basePath + links.image} alt="profile of James Tsetsekas" />
          <h1 className="links-title mt-3">{links.title}</h1>
          <p>{links.description}</p>
          {links.cards.map((value, index) => (
            <Button key={index} title={value.title} link={value.link} test={value.test} icon={value.icon} iconb={value.iconb} />
          ))}
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}


function Button({ title, link, icon, iconb }) {
  return (
    <div className="row justify-content-center">
      <div className="link-card card-work">
        <Link href={link}>
          <a target="_blank" rel="noopener noreferrer" aria-label={title}>
            <span className="link-title">
              <FontAwesomeIcon className="icon-style mx-2" icon={icon} size="1x" />
              {title}
              <FontAwesomeIcon className="icon-style mx-2" icon={iconb} size="1x" />
            </span>

          </a>
        </Link>
      </div>
    </div>
  );
}
