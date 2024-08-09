import Button from './Button';

const ButtonList = () => {
  const names = [
    'All',
    'Gaming',
    'Songs',
    'CGI',
    'Cricket',
    'Cooking',
    'Tech',
    'Movies',
    'News',
    'Live',
  ];
  return (
    <div className="flex">
      {names.map((name) => (
        <Button name={name} key={name} />
      ))}
    </div>
  );
};
export default ButtonList;
