const Skills = ({data}) => {
  return data ? <div className='mb-12'>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center'>
        <p className='leading-6 text-[19px] font-bold text-[#252932]'>Skills</p>
      </div>
    </div>
    <ul className='list-none text-[#343434]'>
      {data.map((skills, index) => {
        return (
          <li key={index} className='text-[13px] font-normal leading-5'>{skills.name}</li>
        )
      })}
    </ul>
  </div> : null;
};

export default Skills;