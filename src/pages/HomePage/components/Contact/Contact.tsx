import SectionTitle from '@/components/SectionTitle/SectionTitle';

const Contact = () => {
  const data = {
    title: '您的聲音，我們的行動！',
    desc: [
      '親愛的朋友們，每一位喵民的意見都是我們前進的原動力。',
      ' 無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！',
    ],
  };

  const labels: string[] = ['電子郵件', '您的姓名'];

  return (
    <div className='w-[768px] mx-auto'>
      <SectionTitle title={data.title} desc={data.desc} />
      <form
        action=''
        className='mt-16 grid md:grid-cols-2 md:gap-x-7 md:gap-y-6 text-left'
      >
        {labels.map((item, index) => (
          <div className='' key={index}>
            <label className='font-medium mb-3 block'>{item}</label>
            <input
              type='text'
              className='w-full bg-transparent lightBorder rounded-lg p-2'
            />
          </div>
        ))}
        <div className='col-span-2'>
          <label className='font-medium mb-3 block'>您的建言</label>
          <textarea
            name=''
            id=''
            className='w-full bg-transparent lightBorder rounded-lg min-h-[174px] p-2'
          ></textarea>
          {/* <input type="text"  /> */}
        </div>
      </form>
    </div>
  );
};

export default Contact;
