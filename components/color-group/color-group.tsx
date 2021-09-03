import cn from 'classnames';

const colors = {
  red: 'bg-red-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  yellow: 'bg-yellow-400',
  white: 'bg-white',
  black: 'bg-black',
};

const ColorPreview = ({ color, index }) => {
  return (
    <button
      className={cn({
        'w-6 h-6 border-2': true,
        [`${colors[color]} border-gray-300`]: true,
        'rounded-full focus:outline-none': true,
        'ml-1': index > 0,
      })}
    />
  );
};

const ColorGroup = ({ colors }) => {
  return colors.map((color, index) => (
    <ColorPreview key={`color-${index}`} color={color} index={index} />
  ));
};

export default ColorGroup;
