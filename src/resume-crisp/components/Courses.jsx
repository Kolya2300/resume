const Courses = ({data}) => {
  return data ? <div>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center'>
        <svg viewBox="0 0 54 54" className="w-7 h-7 mr-1.5 ">
          <circle cx="27" cy="27" r="26"></circle>
          <path transform="translate(11,11)" d="M11.907 19.287v9.55l5.891-5.023L32 32l-8.186-14.202 6.077-5.891H19.287l-5.085-5.21 2.232-2.232L11.97 0 0 11.969l4.465 4.465 2.233-2.232zm14.822 7.442l-7.442-4.403 3.039-3.04zM24.62 14.016l-10.604 9.55v-5.333l-5.768-5.52 4.465-4.527 5.52 5.83h6.387zm-20.155-.559L2.977 11.97l8.992-8.992 1.488 1.488z" fill='white'></path>
        </svg>
        <p className='leading-6 text-[19px] font-bold text-[#252932]'>Courses</p>
      </div>
    </div>
    <div>
      {data.map((language)=>(<p className='leading-5 text-[13px] font-normal text-[#343434] mt-[10px] ml-[121px]'>{language.name}</p>))}
    </div>
  </div> : null;
};

export default Courses;