import avatar from '@/assets/images/catMain.svg';
const Intro = () => {
    const detail = [
        {
            title: '學歷',
            content: ['國立喵喵大學法律系學士', '國立喵喵大學法律系碩士']
        },
        {
            title: '經歷',
            content: ['喵喵法律事務所律師', '喵喵大學法律學分班講師']
        }
    ];

    return (
        <div className='container mt-[120px] flex items-center'>
            <img src={avatar} alt='' className='h-[667px] aspect-square' />
            <div className='text-left'>
                <p className='font-medium'>立委候選人</p>
                <h1 className='mb-10'>威爾喵</h1>
                {detail.map((item, index) => (
                    <div key={index + 'intro'}>
                        <h6 className='font-medium'>{item.title}</h6>
                        <ul className='list-disc list-inside mb-5 '>
                            {item.content.map((contentTtem, index) => (
                                <li key={index + 'introContent'} className=''>
                                    {contentTtem}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Intro;
