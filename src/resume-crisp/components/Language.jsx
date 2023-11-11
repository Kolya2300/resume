const Language = ({data}) => {
  return data ? <div>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center'>
        <svg viewBox="0 0 54 54" className="w-7 h-7 mr-1.5 ">
          <circle cx="27" cy="27" r="26"></circle>
          <path transform="translate(11,11)" d="M21.101 3.014C16.231 3.014 14.841 0 8.58 0 4.638 0 2.087 3.246 2.087 3.246v27.826c0 .464.464.928.928.928.463 0 .927-.464.927-.928V18.32c1.16-.696 2.55-1.391 4.406-1.391 6.26 0 8.116 3.014 12.985 3.014 4.87 0 8.58-3.014 8.58-3.014V0s-3.71 3.014-8.812 3.014zM27.826 16c-1.16.696-3.478 2.087-6.493 2.087-1.855 0-3.246-.464-4.87-1.16-2.086-.927-4.405-1.855-8.115-1.855-1.623 0-3.015.232-4.174.928V3.942c.696-.696 2.319-1.855 4.638-1.855 3.014 0 4.637.696 6.26 1.391 1.624.696 3.479 1.623 6.261 1.623 2.551 0 4.87-.695 6.725-1.623V16z" style={{fill: 'white'}}></path>
        </svg>
        <p className='leading-6 text-[19px] font-bold text-[#252932]'>Languages</p>
      </div>
    </div>
    <div>
      {data.map((language)=>(<p className='leading-5 text-[13px] font-normal text-[#343434] mt-[10px]'>{language.name}</p>))}
    </div>
  </div> : null;
};

export default Language;