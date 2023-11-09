const Education = ({data}) => {
  const {entries} = data
  return (
    <>
      {data ? <div className='mb-12'>
        <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
          <div className='pb-0.5 flex items-center'>
            <svg viewBox="0 0 54 54" className="w-7 h-7 mr-1.5 ">
              <circle cx="27" cy="27" r="26" ></circle>
              <path transform="translate(11,11)" d="M30.96 22.58v-9.217l.503-.303c.327-.194.533-.58.537-1 .004-.421-.196-.81-.518-1.014L16.44 1.848a.893.893 0 0 0-.967.004l-14.96 9.21c-.318.202-.515.587-.513 1.005.002.417.203.8.525.998l6.573 3.999a1.256 1.256 0 0 0-.133.56v9.669c0 .325.122.637.335.853.217.22 2.294 2.146 8.646 2.146 6.33 0 8.463-1.82 8.686-2.028a1.21 1.21 0 0 0 .367-.884v-9.917c0-.16-.03-.313-.082-.452l4.044-2.441v8.016c-.593.396-.995 1.124-.995 1.965 0 1.262.895 2.285 2 2.285 1.104 0 1.999-1.023 1.999-2.285 0-.845-.407-1.576-1.005-1.97zM23 26.725c-.787.432-2.866 1.282-7.054 1.282-4.214 0-6.246-.905-6.982-1.34v-8.468l6.493 3.95a.892.892 0 0 0 .937.006L23 18.17v8.556zm-7.06-6.876L3.08 12.045l12.881-7.89 12.922 7.868L15.94 19.85z" style={{fill: 'white'}}></path>
            </svg>
            <p className='leading-6 text-[19px] font-bold text-[#252932]'>Education</p>
          </div>
        </div>
        <div>
          {entries.map((edu, index)=>{
            return(
              <div key={index} className='ml-[121px]'>
                <div className='flex'>
                  <p className='leading-5 text-[16px] font-bold text-[#9b9b9b]'>
                    {edu.title ? edu.title + '\uFE30' : ''}
                  </p>
                  <p className='leading-5 text-[16px] font-bold text-[#9b9b9b]'>{edu.establishment}</p>
                </div>
                <p className='italic text-[13px] font-normal leading-[20px] text-[#9b9b9b] mt-1'>{edu.location.city}</p>

              </div>
            )
          })}
        </div>
      </div> : null}
    </>
  );
};

export default Education;