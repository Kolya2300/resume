const PersonalInfo = ({data}) => {
  const {name: {raw_name}, profession} = data
  return (
    <div className='bg-[#373D48] px-3.5 pt-3.5 pb-5'>
      <h1 className="text-[#9b9b9b] leading-[45px] text-[41px] font-bold break-words">{raw_name}</h1>
      <h3 className='text-[19px] leading-[20px] text-[#9b9b9b] pt-1.5'>{profession}</h3>
    </div>
  );
};

export default PersonalInfo;