const WorkExperience = ({data}) => {
  const {entries} = data
  return data ? <div className='mb-12'>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center'>
        <p className='leading-6 text-[19px] font-bold text-[#252932]'>Professional Experience</p>
      </div>
    </div>
    {entries.map((work, index)=>{
      return(
        <div className='flex gap-10 mb-6' key={index}>
          <p className='flex-1 text-[13px] leading-[20px] text-[#343434] font-bold' style={{minWidth: '65px', maxWidth: '65px'}}>{work.start_date} - {work.end_date ? work.end_date : 'Current'}</p>
          <div className='flex-3'>
            <p className='text-[16px] leading-[20px] font-bold text-[#343434] mb-1' >{work.industry}</p>
            <p className='italic text-[13px] font-normal leading-[20px] text-[#343434] mt-1'>{work.location.city}</p>
            <ul className='list-disc ml-4'>
              {work.description && work.description.split('*').map((item, index) => (
                item.trim() !== '' && <li key={index} className='text-[13px] leading-[20px] font-normal text-[#343434]'>{item.trim()}</li>
              ))}

            </ul>
          </div>
        </div>
      )
    })}
  </div> : null;
};

export default WorkExperience;