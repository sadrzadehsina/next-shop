import cn from 'classnames';
import { noop } from '../utils';
import BaseButton from './button';

const SecondaryButton = ({ children, disabled = false, onClick = noop }) => {
  const classNames = cn({
    'text-white': true,
    'bg-yellow-600': true,
    'hover:bg-yellow-800': !disabled,
    'disabled:opacity-50': disabled,
    'cursor-default': disabled,
  });

  return (
    <BaseButton className={classNames} disabled={disabled} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default SecondaryButton;
