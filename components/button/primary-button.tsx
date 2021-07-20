import cn from 'classnames';
import { noop } from '../utils';
import BaseButton from './button';

const PrimaryButton = ({
  children,
  disabled = false,
  link = false,
  onClick = noop,
}) => {
  const classNames = cn({
    'text-white': !link,
    'text-blue-600': link,
    'hover:text-blue-800': link,
    underline: link,
    'bg-blue-600': !link,
    'hover:bg-blue-800': !disabled && !link,
    'disabled:opacity-50': disabled,
    'cursor-default': disabled,
    'cursor-pointer': !disabled,
  });

  return (
    <BaseButton className={classNames} disabled={disabled} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default PrimaryButton;
