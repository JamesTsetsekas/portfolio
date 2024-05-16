import React, { Fragment, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Navbar';
import { Intro } from '../components/Intro';
import { intro, navigation, SEO } from '../config/config';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faBtc, } from '@fortawesome/free-brands-svg-icons';
import { faI, faHeart, faBitcoinSign, faBoltLightning, faBolt } from '@fortawesome/free-solid-svg-icons';
import Konami from '../components/Konami';
import { useForm } from 'react-hook-form';




export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(`Hi, ${data['First name']}`, data);
  const [isFormVisible, setFormVisible] = useState(false);

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
      <div className="d-flex flex-column justify-content-between min-vh-100 bg-white">
        <div className="py-5 px-5 container text-center">
          <h2>Why I am a great match for this position...</h2>
          <br></br>
          <ul style={{ listStyleType: "none" }}>
            <li>Full Stack development expertise, leadership experience, and proficiency in Agile Scrum project management framework. <FontAwesomeIcon icon={faCheck} color="green" /></li>
            <li>Skilled in CI/CD tools and workflows, such as GitHub Actions and Azure Pipelines. <FontAwesomeIcon icon={faCheck} color="green" /></li>
            <li>Advanced skills in React, Next.js, Tailwind CSS, and PostgreSQL. <FontAwesomeIcon icon={faCheck} color="green" /></li>
            <li>Cloud knowledge in AWS and Azure, including AWS CDK <FontAwesomeIcon icon={faCheck} color="green" /></li>
            <li>Experienced in API integration and maintenance. <FontAwesomeIcon icon={faCheck} color="green" /></li>
            <li>Proficient in JavaScript and TypeScript. <FontAwesomeIcon icon={faCheck} color="green" /></li>
            <li>Familiarity with drizzle, tRPC, zod, RDS <FontAwesomeIcon icon={faCheck} color="green" /></li>
          </ul>
          <br></br>
          <h3>But wait theres more!</h3>
          <ul style={{ listStyleType: "none" }}>
            <li><FontAwesomeIcon icon={faI} /> <FontAwesomeIcon icon={faHeart} /> <FontAwesomeIcon icon={faBtc} /> </li>
            <li>Founder of <a href="https://JerseyCityBitcoin.com">JerseyCityBitcoin.com</a> Meetup, passionate about organizing and participating in Bitcoin meetups and workshops in my free time.</li>
            <br></br>
            <li>Passionate about Bitcoin and the Lightning Network, I take pride in running an efficient routing node, and developing LN web applications. Excited to showcase my expertise (Proof-Of-Work 🤣) for you!</li>
            <br></br>
            <li>Consistently expanding skills and knowledge, I strive for continuous personal and professional growth as a problem-solver and lifelong learner.</li>
            <li>Motivated individual with a drive for success, aiming to achieve and surpass goals and expectations.</li>

          </ul>
          <br></br>
          <br></br>

          {/* <h3 className="mb-3">React Hook Form Playground</h3>
          <button onClick={() => setFormVisible(!isFormVisible)}>
            {isFormVisible ? 'Hide Form' : 'Show Form'}
          </button>
          {isFormVisible && (
            <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
              <div className="form-group mb-3">
                <label>First Name</label>
                <input type="text" placeholder="First name" {...register("First name", { required: "First name is required", maxLength: 80 })} className="form-control" />
                {errors["First name"] && <p className="text-danger">{errors["First name"].message}</p>}
              </div>
              <div className="form-group mb-3">
                <label>Last Name</label>
                <input type="text" placeholder="Last name" {...register("Last name", { required: "Last name is required", maxLength: 100 })} className="form-control" />
                {errors["Last name"] && <p className="text-danger">{errors["Last name"].message}</p>}
              </div>
              <div className="form-group mb-3">
                <label>Email</label>
                <input type="text" placeholder="Email" {...register("Email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} className="form-control" />
                {errors.Email && <p className="text-danger">{errors.Email.message}</p>}
              </div>
              <div className="form-group mb-3">
                <label>Mobile Number</label>
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: "Mobile number is required", minLength: 6, maxLength: 12 })} className="form-control" />
                {errors["Mobile number"] && <p className="text-danger">{errors["Mobile number"].message}</p>}
              </div>
              <div className="form-group mb-3">
                <label>Title</label>
                <select {...register("Title", { required: "Title is required" })} className="form-control">
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
                {errors.Title && <p className="text-danger">{errors.Title.message}</p>}
              </div>
              <label className="mr-3">Developer</label>
              <br></br>
              <div className="form-check form-check-inline mb-3">
                <input {...register("Developer", { required: "Please select an option" })} type="radio" value="Yes" className="form-check-input" />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline mb-3">
                <input {...register("Developer", { required: "Please select an option" })} type="radio" value="No" className="form-check-input" />
                <label className="form-check-label">No</label>
              </div>
              {errors.Developer && <p className="text-danger">{errors.Developer.message}</p>}
              <div className="form-group mb-3">
                <input type="submit" className="btn btn-primary" />
              </div>
            </form>)} */}
        </div>
      </div>
      <Footer />
      <Konami />
    </Fragment>
  );
}
