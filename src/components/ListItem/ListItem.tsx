interface IProps {
  item: {
    icon: string;
    title: string;
    content: string;
  };
}

const ListItem = ({ item }: IProps) => {
  return (
    <li className='md:py-8 md:px-6 lightBorder bg-purple-dark rounded-3xl'>
      <img
        src={item.icon}
        alt='icon'
        className='md:w-20 md:h-20 md:mb-4 mx-auto'
      />
      <h4 className='font-bold md:text-2xl leading-9 md:mb-4'>{item.title}</h4>
      <p className='text-secondaryGrey'>{item.content}</p>
    </li>
  );
};

export default ListItem;
