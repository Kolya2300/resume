import React from 'react';
import classes from './Resume.module.css'

const Resume = () => {
    const data = {
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
        phone: '123456789',
        name: 'John Dou',
        email: 'test@test.com',
        url: ['http://linkedin_link', 'http://some_link'],
        education: [
            {
                title: 'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
                city: 'Kyiv, Ukraine',
                degree: "Master's Degree",
                start_date: 'June 2014',
                end_date: 'August 2014',
            },
        ],
        experience: [
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
        profession: 'developer',
        textAboutUser: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    }
    return (
        <div className={classes.wrapper}>
            <div><h1 className={classes.nameUser}>{data.name}</h1>
                <p className={classes.profession}>{data.profession}</p>
                <div className={classes.wrapperEmail}>
                    <p className={classes.emailTitle}>Email</p>
                    <p className={classes.email}>{data.email}</p>
                </div>
                <div className={classes.wrapperPhone}>
                    <p className={classes.phoneTitle}>Phone</p>
                    <p className={classes.phone}>{data.phone}</p>
                </div>
                <div className={classes.wrapperSocial}>
                    <p className={classes.urlTitle}>Social Links</p>
                    {data.url.map((urls) => {
                        return (
                            <a className={classes.listUrls} href={urls}>{urls}</a>
                        )
                    })}
                </div>
                <p className={classes.textAboutUser}>{data.textAboutUser}</p>
                <div className={classes.wrapperSkills}>
                    <h3 className={classes.skillsTitle}>Skills</h3>
                    <ul className={classes.listSkills}>
                        {data.skills.map((skill) => {
                            return (
                                <li>{skill}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className={classes.wrapperExperience}>
                    <h3 className={classes.experienceTitle}>Professional Experience</h3>
                    {data.experience.map((expertise) => {
                        return (
                            <div className={classes.innerExperience}>
                                <div>
                                    <p className={classes.dateJobs}>{expertise.start_date} - {expertise.end_date}</p>
                                </div>
                                <div>
                                    <h4 className={classes.jobTitle}>{expertise.jobTitle}</h4>
                                    <p className={classes.companyNameAndCity}>{expertise.company + ', ' + expertise.city}</p>
                                    <p className={classes.description}>{expertise.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.wrapperEducation}>
                    <h3 className={classes.educationTitle}>Education</h3>
                    {data.education.map((study) => {
                        return (
                            <div className={classes.innerEducation}>
                                <h4 className={classes.studyTitle}>{study.title + ', ' + study.degree}</h4>
                                <p className={classes.studyCity}>{study.city}</p>
                                <p className={classes.dateStudy}>{study.start_date} - {study.end_date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Resume;