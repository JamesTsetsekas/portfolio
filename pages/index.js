import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { WhatIDo, Skills, Projects } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, work, skills } from '../config/config';
import { Header } from '../components/Header';
import Konami from '../components/Konami';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        greeting={intro.greeting}
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About
        title={about.title}
        description={about.description}
      />
      <WhatIDo
        title={work.title}
        cards={work.cards}
      />
      <Skills
        title={skills.title}
        cards={skills.cards}
      />
      <Projects
        title={projects.title}
        cards={projects.cards}
      />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
      <Konami />
    </Fragment>
  );
}
