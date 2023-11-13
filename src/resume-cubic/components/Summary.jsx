const Summary = ({data}) => {
  const {self_summary} = data
  return (
    <div className='mb-12 pt-11'>
      <p className='text-[13px] text-[#343434]'>{self_summary}</p>
    </div>
  );
};

export default Summary;