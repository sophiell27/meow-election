import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import catNews1 from '@/assets/images/catNews1.svg';
import catNews2 from '@/assets/images/catNews2.svg';
import catNews3 from '@/assets/images/catNews3.svg';
import catNews4 from '@/assets/images/catNews4.svg';

interface IListItem {
    imageUrl: string;
    title: string;
    content: string;
    link: string;
}

const News = () => {
    const data = {
        title: '最新消息'
    };
    const listData: IListItem[] = [
        {
            imageUrl: catNews1,
            title: '貓黨30週年紀念活動，邀請您一起Chill out 吸貓草',
            content: '嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益',
            link: ''
        },
        {
            imageUrl: catNews2,
            title: 'Meowcast： 威爾喵的政貓時刻',
            content: '嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益',
            link: ''
        },
        {
            imageUrl: catNews3,
            title: '「Lofi Cat」 24小時音樂直播上線',
            content: '嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益',
            link: ''
        },
        {
            imageUrl: catNews4,
            title: '貓黨30週年紀念活動，邀請您一起Chill out 吸貓草',
            content: '嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益',
            link: ''
        }
    ];
    return (
        <SectionWrapper title={data.title}>
            <ul className='grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:mt-11 imageBackground bg-contain'>
                {listData.map((item, index) => (
                    <li
                        key={index}
                        className='lightBorder rounded-3xl overflow-hidden flex flex-col text-left'>
                        <img
                            src={item.imageUrl}
                            alt='cat'
                            className='h-[250px] block w-full object-cover md:mb-6'
                        />
                        <div className='px-6'>
                            <h6 className='font-medium md:text-xl md:mb-3'>
                                {item.title}
                            </h6>
                            <p className='whitespace-nowrap text-ellipsis text-secondaryGrey md:pb-9 overflow-hidden'>
                                {item.content}
                            </p>
                        </div>
                        <button className='mt-auto text-purple-pink font-medium px-6 self-start mb-6'>
                            閱讀更多
                        </button>
                    </li>
                ))}
            </ul>
        </SectionWrapper>
    );
};

export default News;
