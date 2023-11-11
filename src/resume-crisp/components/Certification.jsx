const Certification = ({data}) => {
  return data ? <div className='mb-12'>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center'>
        <svg viewBox="0 0 54 54" className="w-7 h-7 mr-1.5 ">
          <circle cx="27" cy="27" r="26"></circle>
          <path transform="translate(11,11)" d="M31.872 26.24l-5.785-10.88c.643-1.28.857-2.773.857-4.48C26.944 4.907 22.016 0 16.016 0c-6 0-10.927 4.907-10.927 10.88 0 1.707.428 3.2 1.071 4.48l-6 10.667c-.214.426-.214.853 0 1.066.215.427.643.64 1.072.64l4.928-1.066 1.714 4.693c.214.213.429.64.857.64.429 0 .643-.213.857-.427l5.143-9.6h2.142l5.143 9.6c.214.427.428.427.857.427.428 0 .643-.213.857-.64l1.714-4.693 4.928 1.066c.429 0 .857 0 1.071-.426.643-.427.643-.854.429-1.067zM9.16 28.587l-1.286-3.414c-.214-.426-.643-.853-1.071-.64l-3.643.854 4.286-7.68c1.5 1.92 3.428 3.2 5.785 4.053L9.16 28.587zm6.856-8.747c-4.928 0-8.999-4.053-8.999-8.96 0-4.907 4.071-8.96 9-8.96 4.927 0 8.998 4.053 8.998 8.96 0 4.907-4.07 8.96-8.999 8.96zm9.428 4.48c-.429-.213-1.071.213-1.071.64l-1.286 3.627-3.857-7.04c2.357-.64 4.5-2.134 5.785-4.054l4.286 7.68-3.857-.853z" style={{fill: 'white'}}></path>
        </svg>
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