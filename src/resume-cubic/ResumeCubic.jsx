import mockedCvData from "./data";
import PersonalInfo from "./components/PersonalInfo";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Language from "./components/Language";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Interests from "./components/Interests";
import Publications from "./components/Publications";
import Courses from "./components/Courses";
import Summary from "./components/Summary";

const ResumeCubic = () => {
  const {work_experience, certifications, courses, education, interests, languages, personal_infos, publications, skills} = mockedCvData
  return (
    <div>
      <PersonalInfo data={personal_infos}/>
      <div className='flex'>

        <div className='flex-2.5 p-4'>
          <Summary data={personal_infos}/>
          <WorkExperience data={work_experience}/>
          <Education data={education}/>
          <Certification data={certifications}/>
          <Interests data={interests}/>
          <Publications data={publications}/>
          <Courses data={courses}/>
        </div>
        <div className='flex-1 bg-[#f4f4f4] p-4'>
          <Contact data={personal_infos}/>
          <Skills data={skills}/>
          <Language data={languages}/>
        </div>
      </div>
    </div>
  );
};

export default ResumeCubic;