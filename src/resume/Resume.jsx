import React from 'react';
import classes from './Resume.module.css'

const Resume = () => {
  const data = {
    profession: 'FullStack Engineer',
    address: 'zip code, Country',
    summary:
      'A seasoned professional with a significant background in leading projects and optimizing processes. Previous engagement in teaching programming, complemented with an analytical mindset, equips with a knack for solving complex problems while maintaining high-quality code. Adept at working with diverse, global teams and juggling multiple projects without compromising accuracy. Outside work, I am an outdoor enthusiast with a passion for half-marathons and cycling.',
    skills: [
      'Css',
      'Scrum',
      'Adobe',
      'Html5',
      'Js',
      'Technical skills',
      'Api',
      'Javascript',
      'English',
      'Jira',
      'Audio',
      'Html',
      'Technical',
      'Ui',
      'Rest',
      'Design',
    ],
    competencies: [
      'Algorithm implementation',
      'Agile',
      'Web-based software engineering',
      'API design knowledge',
      'Code reviews',
      'Engineering standards, Refactoring',
      'Functional programming, OOP',
      'SOLID, TDD, DDD',
    ],
    phone: '123456789',
    name: 'John Dou',
    email: 'test@test.com',
    url: ['http://linkedin_link', 'http://some_link'],
    education: [
      {
        title: 'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
        city: 'Kyiv, Ukraine',
        field: 'Engineering',
        degree: "Master's Degree",
        start_date: 'June 2014',
        end_date: 'August 2014',
      },
    ],
    experience: [
      {
        company: 'Capgemini Engineering/PagerDuty',
        city: 'Kyiv',
        jobTitle: 'Research Assistant, Full Stack Engineer',
        description: `Integrated PagerDuty application with Slack, Microsoft Teams, and Zoom, developed and deployed high-performance, scalable applications using Elixir (Phoenix) and React, capable of handling large volumes of traffic with low latency.
Participated in strategizing and implementing migration from a US-only region deployment to both US and EU regions, ensuring compliance with EU GDPR and regional data flows.
Successfully migrated three React repositories from CircleCI to Buildkite, improving build and test processes.
Authored technical documentation, providing clear guidance for team members and aiding in knowledge transfer, Prepared several Architectural Decision Records (ADRs), collaborated with multiple teams.`,
        start_date: 'June 2014',
        end_date: 'August 2014',
      },
      {
        company: 'Emotion - New York University',
        city: 'Kyiv',
        jobTitle: 'Research Assistant, Full Stack Engineer',
        description:
          'Started out as a tool to help collect data for a research project Lingering emotion in the experience of beauty, is now a comprehensive app that simulates every step of the experiment and automates the entire data collection process.',
        start_date: 'June 2014',
        end_date: 'August 2014',
      },
    ],
  }
  return (
    <div className={classes.wrapper}>
      <div>
        {data.name ? <h1 className={classes.nameUser}>{data.name}</h1> : null}
        {data.profession ? <p className={classes.profession}>{data.profession}</p> : null}
        <div  className={classes.wrapperUserInfo}>
          <div>
            {data.email ? <div className={classes.wrapperEmail}>
              <p className={classes.emailTitle}>Email</p>
              <p className={classes.email}>{data.email}</p>
            </div> : null}
            {data.phone ? <div className={classes.wrapperPhone}>
              <p className={classes.phoneTitle}>Phone</p>
              <p className={classes.phone}>{data.phone}</p>
            </div> : null}
            {data.address ? <div className={classes.wrapperAddress}>
              <p className={classes.addressTitle}>Address</p>
              <p className={classes.address}>{data.address}</p>
            </div> : null}
          </div>
          {data.url && data.url.length ? <div className={classes.wrapperSocial}>
            <p className={classes.urlTitle}>Social Links</p>
            {data.url.map((urls) => {
              return (
                <a className={classes.listUrls} href={urls}>{urls}</a>
              )
            })}
          </div> : null}
        </div>
        {data.summary ? <p className={classes.textAboutUser}>{data.summary}</p> : null}
        {data.skills && data.skills.length ? <div className={classes.wrapperSkills}>
          <h3 className={classes.skillsTitle}>Technical Profile</h3>
          <div className={classes.innerSkills}>
            {data.skills.map((skill, index) => (
              <span key={index}>{skill}{index !== data.skills.length - 1 ? ',\u00A0' : null}</span>
            ))}
          </div>
        </div> : null}
        {data.competencies && data.competencies.length ? <div className={classes.wrapperSkills}>
          <h3 className={classes.competenciesTitle}>Competencies</h3>
          <div className={classes.innerCompetencies}>
            {data.competencies.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div> : null}
        {data.experience && data.experience.length ?
          <div className={classes.wrapperExperience}>
            <h3 className={classes.experienceTitle}>Work History</h3>
            {data.experience.map((expertise) => {
              return (
                <div className={classes.innerExperience}>
                  <div>
                    <p className={classes.date}>{expertise.start_date} - {expertise.end_date}</p>
                  </div>
                  <div>
                    <h4 className={classes.jobTitle}>{expertise.jobTitle}</h4>
                    <p className={classes.companyNameAndCity}>{expertise.company + ', ' + expertise.city}</p>
                    <p className={classes.description}>{expertise.description}</p>
                  </div>
                </div>
              )
            })}
          </div> : null}
        {data.education && data.education.length ?
          <div className={classes.wrapperEducation}>
            <h3 className={classes.educationTitle}>Education</h3>
            {data.education.map((study) => {
              return (
                <div className={classes.innerEducation}>
                  <div className={classes.dateEducation}>
                    <p className={classes.date}>{study.start_date} - {study.end_date}</p>
                  </div>
                  <div>
                    <h4 className={classes.studyTitle}>{study.title + ', ' + study.degree}</h4>
                    <p className={classes.studyCity}>{study.city}</p>
                  </div>
                </div>
              )
            })}
          </div>
          : null}
      </div>
    </div>
  );
};

export default Resume;