const Education = ({data}) => {
  const {entries} = data
  return data ? <div className='mb-12'>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center'>
        <p className='leading-6 text-[19px] font-bold text-[#252932]'>Education</p>
      </div>
    </div>
    <div>
      {entries.map((edu, index)=>{
        return(
          <div className='flex gap-10 mb-6' key={index}>
            <p className='flex-1 text-[13px] leading-[20px] text-[#343434] font-bold' style={{minWidth: '65px', maxWidth: '65px'}}>{edu.start_date ? edu.start_date : null}{edu.start_date ? '-' : null}{edu.end_date ? edu.end_date : null}</p>
            <div className='flex-3'>
              <p className='leading-5 text-[16px] font-bold text-[#343434]'>
                {edu.title ? edu.title + '\uFE30' : ''}
              </p>
              <p className='leading-5 text-[16px] font-bold text-[#343434]'>{edu.establishment}</p>
              <p className='italic text-[13px] font-normal leading-[20px] text-[#343434] mt-1'>{edu.location.city}</p>
            </div>
          </div>
        )
      })}
    </div>
  </div> : null;
};

export default Education;