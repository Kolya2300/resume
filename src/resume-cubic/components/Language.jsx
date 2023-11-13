const Language = ({data}) => {
  return data ? <div>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center'>
        <p className='leading-6 text-[19px] font-bold text-[#252932]'>Languages</p>
      </div>
    </div>
    <div>
      {data.map((language)=>(<p className='leading-5 text-[13px] font-normal text-[#343434] mt-[10px]'>{language.name}</p>))}
    </div>
  </div> : null;
};

export default Language;