const WorkExperience = ({data}) => {
  const {entries} = data
  return data ? <div className='mb-12'>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center'>
        <svg viewBox="0 0 54 54" className="w-7 h-7 mr-1.5 ">
          <circle cx="27" cy="27" r="26"></circle>
          <path transform="translate(11,11)" d="M30 5.983h-7.987V4.045c0-1.655-1.345-3-3-3h-6.015c-1.655 0-3 1.345-3 3v1.938H2.001C.9 5.983 0 6.883 0 7.982V28.953c0 1.1.9 2.001 2 2.001h28c1.099 0 2-.9 2-2V7.981a2.008 2.008 0 0 0-2-1.999zM12 4.045c0-.551.447-1 1-1h6.011c.55 0 1 .447 1 1v1.938H12V4.045zM2 7.982h28v7.008H18.986v-1.025c0-1.101-.897-2-1.998-2h-1.993c-1.101 0-2 .897-2 2v1.025H2V7.982zm14.989 11.02h-1.993v-5.037h1.993v5.037zM2 28.951V16.988h10.997V19c0 1.102.897 2 2 2h1.99a2.002 2.002 0 0 0 2-2v-2.01h11.011v11.963H2.001z" style={{fill: 'white'}}></path>
        </svg>
        <p className='leading-6 text-[19px] font-bold text-[#252932]'>Work Experience</p>
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