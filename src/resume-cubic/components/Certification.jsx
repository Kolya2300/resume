const Certification = ({data}) => {
  return data ? <div className='mb-12'>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center'>
        <p className='leading-6 text-[19px] font-bold text-[#252932]'>Certifications</p>
      </div>
    </div>
    {data.map((certificate, index)=>{
      return(
        <div className='flex gap-14 mb-6' key={index}>
          <p className='flex-1 text-[13px] leading-[20px] text-[#343434] font-bold' style={{minWidth: '65px', maxWidth: '65px'}}>{certificate.date}</p>
          <div className='flex-3'>
            <p className='italic text-[13px] font-normal leading-[20px] text-[#343434]'>{certificate.name}</p>
          </div>
        </div>)
    })}
  </div> : null;
};

export default Certification;