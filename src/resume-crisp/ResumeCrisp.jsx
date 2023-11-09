import mockedCvData from "./data";
import Skills from "./components/Skills";
import PersonalInfo from "./components/PersonalInfo";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";
import Language from "./components/Language";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Interests from "./components/Interests";
import Courses from "./components/Courses";
import Publications from "./components/Publications";
const ResumeCrisp = () => {
  const {work_experience, certifications, courses, education, interests, languages, personal_infos, publications, skills} = mockedCvData
  return (
    <div>
      <PersonalInfo data={personal_infos}/>
      <div className='flex gap-7'>
        <div className='flex-1'>
          <Contact data={personal_infos}/>
          <Skills data={skills}/>
          <Language data={languages}/>
        </div>
        <div className='flex-2.5'>
          <WorkExperience data={work_experience}/>
          <Education data={education}/>
          <Certification data={certifications}/>
          <Interests data={interests}/>
          <Publications data={publications}/>
          <Courses data={courses}/>
        </div>
      </div>
    </div>
  );
};

export default ResumeCrisp;