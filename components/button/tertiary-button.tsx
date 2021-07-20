import cn from 'classnames';
import { noop } from '../utils';
import BaseButton from './button';

const TertiaryButton = ({ children, disabled = false, onClick = noop }) => {
  const classNames = cn({
    'text-white': true,
    'bg-red-600': true,
    'hover:bg-red-800': !disabled,
    'disabled:opacity-50': disabled,
    'cursor-default': disabled,
  });
  return (
    <BaseButton className={classNames} disabled={disabled} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default TertiaryButton;
