const Contact = ({data}) => {
  const {address, phones, mails} = data
  return data ? <div className='mb-12'>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center pt-11'>
        <p className='leading-6 text-[19px] font-bold text-[#252932]'>Contact</p>
      </div>
    </div>
    <div><p className='leading-5 text-[13px] font-bold text-[#343434]'>Address</p><p className='leading-5 text-[13px] font-normal text-[#343434]'>{address.city}</p></div>
    <p>{phones && phones.length ? phones.map((phone, index)=>{return(<div key={index} className='break-words'>
        <p className='leading-5 text-[13px] font-bold text-[#343434]'>Phone</p>
        <p className='leading-5 text-[13px] font-normal text-[#343434]'>{phone}</p></div>)})
      : ''}</p>
    <p>{mails && mails.length ? mails.map((mail, index)=>{return(<div key={index} className='break-words'><p className='leading-5 text-[13px] font-bold text-[#343434]'>E-mail</p> <p className='leading-5 text-[13px] font-normal text-[#343434]'>{mail}</p></div>)}) : ''}</p>
  </div> : null;
};

export default Contact;