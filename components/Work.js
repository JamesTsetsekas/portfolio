import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const WhatIDo = ({ title, cards }) => {
  return (
    <div id="skills" className="bg-primary py-5 px-5 rounded-3">
      <div className="container">
        <h1 className="text-light fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const Skills = ({ title, cards }) => {
  return (
    <div id="skills" className="bg-secondary py-5 px-5 rounded-3">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icons = {value.icons}
              cert={value.certificate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const Projects = ({ title, cards }) => {
  const [displayedCards, setDisplayedCards] = useState(9);
  const totalCards = cards.length;

  const loadMoreCards = () => {
    setDisplayedCards(displayedCards + 9);
  };

  return (
    <div id="projects" className="bg-primary py-5 px-5 rounded-3">
      <div className="container">
        <h1 className="text-light fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.slice(0, displayedCards).map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              linkIcons={value.linkIcons}
            />
          ))}
        </div>
        {displayedCards < totalCards && (
          <div className="text-center">
            <button type="button" className="btn btn-outline-light" onClick={loadMoreCards}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


export const Card = ({ title, description, icons, linkIcons, cert }) => {
	return (
    <div className="card py-3 px-3 mx-sm-3 my-3 card-work rounded-3" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
      <p className="text-dark">{description}</p>

      <div className="cert">
        {cert && cert.map((value, index) => (
          <Link key={index} href={value.link}>
            <a target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="4x" />
            </a>
          </Link>
        ))}
      </div>

			<div className="text-end">

        {icons && icons.map((value, index) => (
          <FontAwesomeIcon key={index} className="icon-style mx-1" icon={value.icon} size="2x" />
        ))}

        {linkIcons && linkIcons.map((value, index) => (
          <Link key={index} href={value.link}>
            <a target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
            </a>
          </Link>
        ))}

			</div>
		</div>
	);
}
