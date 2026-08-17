import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const WhatIDo = ({ title, cards }) => {
  return (
    <section id="focus" className="focus-section">
      <div className="container">
        <p className="section-kicker">Building now</p>
        <h2 className="section-title">{title}</h2>
        <div className="focus-grid">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons}
              variant="focus" />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Projects = ({ title, cards }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">{title}</h2>
          </div>
          <p className="section-intro">A mix of current open-source work, protocol engineering, and independent products.</p>
        </div>
        <div className="project-grid">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              linkIcons={value.linkIcons}
              variant="project"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Card = ({ title, description, icons, linkIcons, variant = 'default' }) => {
  return (
    <article className={`card-work card-${variant}`}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="card-meta">
        {icons && icons.map((value, index) => (
          <span className="tech-chip" key={index}>
            <FontAwesomeIcon aria-hidden="true" className="icon-style" icon={value.icon} />
            {value.label && <span>{value.label}</span>}
          </span>
        ))}

        {linkIcons && linkIcons.map((value, index) => (
          value.link ? (
            <Link key={index} href={value.link}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={value.label || `Open ${title}`}
              >
                <FontAwesomeIcon aria-hidden="true" className="icon-style" icon={value.icon} />
                <span>{value.label || 'Open project'}</span>
              </a>
            </Link>
          ) : value.label ? (
            <span className="tech-chip" key={index}>
              <FontAwesomeIcon aria-hidden="true" className="icon-style" icon={value.icon} />
              <span>{value.label}</span>
            </span>
          ) : (
            <FontAwesomeIcon aria-hidden="true" key={index} className="icon-style" icon={value.icon} />
          )
        ))}
      </div>
    </article>
  );
}
