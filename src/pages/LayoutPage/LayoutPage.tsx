// interface ICountDown {
//     Days: number;
//     Hours: number;
//     Mins: number;
//     Sec: number;
// }

import { FaFacebook, FaInstagram, FaYoutube, FaLine } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const navConfig = [
    {
      title: '最新消息',
      route: '/news',
    },
    {
      title: '喵咪政見',
      route: '/about',
    },
    {
      title: '抖內罐罐',
      route: '/donate',
    },
    {
      title: '喵咪信箱',
      route: '/contact',
    },
  ];

  // const countDown: ICountDown = {
  //     Days: 100,
  //     Hours: 16,
  //     Mins: 13,
  //     Sec: 25
  // };

  // const marquee =
  //     '快來喵喵 喵喵喵 喵電感應 感覺到我跟你同時觸電反應 不管相隔多遠都能互相連繫';

  const footerNavConfig = [
    {
      title: '最新消息',
      route: '/news',
    },
    {
      title: '喵咪政見',
      route: '/about',
    },
    {
      title: '喵喵信箱',
      route: '/contact',
    },
    {
      title: '抖內罐罐',
      route: '/donate',
    },
  ];

  const footerIcons = [
    {
      icon: FaFacebook,
      link: '',
    },
    {
      icon: FaInstagram,
      link: '',
    },
    {
      icon: FaYoutube,
      link: '',
    },
    {
      icon: FaLine,
      link: '',
    },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='flex justify-center'>
        <img className='mr-auto' />
        <div className='mr-auto'>logo</div>
        <ul className='flex  justify-center mr-auto'>
          {navConfig.map((item, index) => (
            <li key={index} className='px-3'>
              <Link to={item.route}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </header>
      <Outlet />
      <footer className='border-t border-t-secondaryGrey pt-10 pb-[10px] mt-auto '>
        <div className=' flex justify-between mb-[73px]'>
          <div className='row-span-1 h-10 bg-red-500 self-baseline'>logo</div>
          <div className='row-span-1'>
            <ul className='flex md:mb-6'>
              {footerNavConfig.map((item, index) => (
                <li className='md:px-3' key={index}>
                  <Link to={item.route}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul className='flex justify-start md:ml-[6px]'>
              {footerIcons.map((item, index) => (
                <li className='px-[6px]' key={index + 'icons'}>
                  <item.icon />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className='text-center text-secondaryGrey text-sm font-medium'>
          © 2023 Willmeow All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
