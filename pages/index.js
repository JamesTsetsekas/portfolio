import React, { Fragment } from 'react';
import { Header } from '../components/Header';
import { Footer, Contact } from '../components/Footer';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { WhatIDo, Projects } from '../components/Work';
import { about, contact, intro, navigation, projects, SEO, work } from '../config/config';
import Konami from '../components/Konami';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <main id="main-content">
        <Intro
          eyebrow={intro.eyebrow}
          title={intro.title}
          description={intro.description}
          image={intro.image}
          buttons={intro.buttons}
          roles={intro.roles}
        />
        <WhatIDo
          title={work.title}
          cards={work.cards}
        />
        <Projects
          title={projects.title}
          cards={projects.cards}
        />
        <About
          title={about.title}
          description={about.description}
          facts={about.facts}
        />
        <Contact
          title={contact.title}
          description={contact.description}
          buttons={contact.buttons}
        />
      </main>
      <Footer />
      <Konami />
    </Fragment>
  );
}
