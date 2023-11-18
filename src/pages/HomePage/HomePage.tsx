import HealthIcon from '@/assets/images/healthIcon.svg';
import CareHouseIcon from '@/assets/images/careHouseIcon.svg';
import InfoCenterIcon from '@/assets/images/infoCenterIcon.svg';
import LawIcon from '@/assets/images/lawIcon.svg';
import CatConference from '@/assets/images/catConference.svg';
import CatMain from '@/assets/images/catMain.svg';
import ListItem from '../../components/ListItem/ListItem';
import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import News from './components/News/News';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Contact from './components/Contact/Contact';
// import useModal from './hooks/useModal';
// import Modal from './components/Modal/Modal';
// import { IoHelp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface ICountDown {
  Days: number;
  Hours: number;
  Mins: number;
  Sec: number;
}

const Home = () => {
  const navigate = useNavigate();
  const countDown: ICountDown = {
    Days: 100,
    Hours: 16,
    Mins: 13,
    Sec: 25,
  };

  const marquee =
    '快來喵喵 喵喵喵 喵電感應 感覺到我跟你同時觸電反應 不管相隔多遠都能互相連繫';

  const listData = [
    {
      // icon: <LawIcon />,
      icon: LawIcon,
      title: '喵咪法條',
      content:
        '嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益，確保他們不再受到不負責任的對待。',
    },

    {
      // icon: <HealthIcon />,
      icon: HealthIcon,
      title: '喵咪健保制度',
      content:
        '建立一個喵咪健保制度，確保每隻貓在生病時都能獲得優質的醫療照顧，無論是貓草還是貓醫院。',
    },
    {
      // icon: <InfoCenterIcon />,
      icon: InfoCenterIcon,
      title: '貓奴案內所',
      content:
        '建立貓奴案內所，專門媒合貓奴與貓咪，讓每隻貓都能找到不分晝夜任勞任怨好使喚的貓僕人。',
    },
    {
      // icon: <CareHouseIcon />,
      icon: CareHouseIcon,
      title: '喵咪集會所',
      content:
        '我們將建立貓咪集會所，提供無家可歸的貓咪一個避風港，不再讓我們的同伴風吹雨淋，再也不必流浪街頭。',
    },
  ];

  const politicData = {
    title: '喵咪政見',
    desc: [
      '不再藏在箱子裡，威爾喵為每隻貓站出來！',
      '如果你認同我的理念，請支持我，請加入改變的行列。',
      ' 這一次，為喵國的未來一起努力！',
    ],
    content: (
      <ul className='grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 '>
        {listData.map((item, index) => (
          // <li key={index}>
          <ListItem item={item} key={index} />
          // </li>
        ))}
      </ul>
    ),
  };

  const donateData = {
    title: '抖內罐罐',
    desc: [
      '您的每一筆抖內都將讓一隻貓咪過上更好的生活。',
      ' 點擊下方抖內按鈕，讓我們的貓咪生活更美好！',
    ],
  };

  return (
    <main className='container mb-[166px]'>
      <section className='imageBackground flex items-center'>
        <img src={CatMain} alt='cat' className='md:w-1/2 lg:w-auto ' />
        <div className='text-left'>
          <h1 className='mb-3'>
            威爾喵
            <br />
            為喵國的未來，先鋪路
          </h1>
          <p className='md:mb-10 text-secondaryGrey font-light'>
            不再藏在箱子裡，威爾喵為每隻貓站出來！
            <br />
            如果你認同我的理念，請支持我，請加入改變的行列。
            <br />
            這一次，為喵國的未來一起努力！
          </p>
          <button
            className='md:py-3 md:px-4 bg-purple-orchid rounded-lg'
            onClick={() => navigate('/intro')}
          >
            候選人簡介
          </button>
        </div>
      </section>
      <div className=' flex items-center'>
        <div className='overflow-hidden md:mr-54px '>
          <p className='whitespace-nowrap '>{marquee}</p>
        </div>
        <ul className='md:py-3 flex justify-end md:gap-x-5'>
          {Object.keys(countDown).map((item, index) => (
            <li key={index + 'countDown'}>
              <p>{countDown[item as keyof ICountDown]}</p>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* <section className='md:my-20'>
                <h2 className='mb-3'>喵咪政見</h2>
                <p className='text-secondaryGrey mb-16'>
                    讓我們一起為這個貓咪友好的未來努力，為每一隻貓咪的幸福而奮鬥。
                    <br />
                    投票給威爾喵，讓我們的未來變得更有毛！
                </p>
                <ul className='grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 '>
                    {listData.map((item, index) => (
                        <li key={index}>
                            <ListItem item={item} />
                        </li>
                    ))}
                </ul>
            </section> */}
      <SectionWrapper title={politicData.title} desc={politicData.desc}>
        {politicData.content}
        <div className=' gradientBorder md:my-20'>
          <div className='imageBackground bg-contain flex items-center justify-center md:px-16 md:py-20 lg:py-20 xl:px-[178px] bg-primaryDark rounded-t-40px'>
            <article className='text-left  flex-shrink inline'>
              <h2 className='mb-3'>威爾喵政見發表會</h2>
              <p className='text-secondaryGrey mb-5'>
                威爾喵是一名充滿活力、具有政治經驗的候選人，致力於改變社會，並為人民提供更好的生活。政策目標旨在實現更公平、更繁榮、更可持續的社會和經濟。
              </p>
              <button className='text-purple-pink'>閱讀更多</button>
            </article>
            <div className='rounded-40px overflow-hidden min-w-[200px] md:min-w-[400px]  flex-grow  md:ml-10 lg:ml-16  lightBorder'>
              {/* <RoundedCard
                            classname={
                                'rounded-40px min-w-[200px] md:min-w-[400px]  md:ml-10 lg:ml-16'
                            }> */}
              <img
                src={CatConference}
                alt=''
                className='w-full rounded-40px block object-cover'
              />
              {/* </RoundedCard> */}
            </div>
          </div>
        </div>
      </SectionWrapper>
      <News />
      <div className='md:my-20 lightBorder md: rounded-3xl lg:rounded-40px overflow-hidden'>
        <div className='h-16 bg-gradient-to-b from-white/10 to-purple-dark' />
        <div className='pt-[46px] bg-purple-dark '>
          <SectionTitle title={donateData.title} desc={donateData.desc} />
        </div>
        <div className='h-16  bg-gradient-to-b from-purple-dark to-white/10' />
      </div>
      <Contact />
    </main>
  );
};

export default Home;
