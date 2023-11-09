const PersonalInfo = ({data}) => {
  const {name: {raw_name}, profession, self_summary} = data
  return (
    <div className='mb-12'>
      <h1 className="text-gray-900 text-4xl font-bold break-words">{raw_name}</h1>
      <h3 className='text-[19px] leading-[20px] text-[#9b9b9b] mb-4'>{profession}</h3>
      <p className='text-[13px] text-[#9b9b9b]'>{self_summary}</p>
    </div>
  );
};

export default PersonalInfo;