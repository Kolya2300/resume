const Contact = ({data}) => {
  const {address, phones, mails} = data
  return data ? <div className='mb-12'>
    <div className="border-b-[1px] border-[#d5d6d6] mb-[10px]">
      <div className='pb-0.5 flex items-center'>
        <svg viewBox="0 0 54 54" className="w-7 h-7 mr-1.5 ">
          <circle cx="27" cy="27" r="26"></circle>
          <path transform="translate(11,11)" d="M31.85 27.626c-1.38-3.684-3.906-4.604-5.973-4.835-1.608-.23-3.216-.92-3.905-1.38v-2.533c1.838-2.302 2.986-5.295 2.986-7.828C24.958 4.835 21.972 0 16 0c-5.972 0-8.958 5.065-8.958 11.05 0 2.763 1.148 5.756 2.986 7.828v2.762c-.69.46-2.297.921-3.905 1.382-2.067.23-4.364 1.15-5.972 4.834-.23.46-.23 1.151.23 1.612C1.759 31.54 9.798 32 16 32c6.432 0 14.241-.46 15.62-2.532.459-.46.459-1.151.23-1.842zM16 1.842c4.594 0 7.152 4.394 7.152 9.228-.28 4.546-2.666 8.112-7.232 8.456-4.449-.462-6.926-4.804-7.04-8.573 0-4.604 2.526-9.111 7.12-9.111zm0 28.086c-12.174 0-14.012-1.611-14.012-1.611 1.149-2.993 2.757-3.454 4.365-3.684 1.837-.23 3.675-.92 4.594-1.381l.918-.46v-2.073c1.149.921 2.527 1.382 4.135 1.382 1.378 0 2.756-.46 3.905-1.382v2.072l.919.46c.918.461 2.756 1.152 4.594 1.382 1.607.23 3.215.69 4.364 3.684.23 0-1.608 1.611-13.782 1.611z" style={{fill: 'white'}}></path>
        </svg>
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