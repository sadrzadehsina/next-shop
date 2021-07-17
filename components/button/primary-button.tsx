import cn from 'classnames';
import { noop } from '../utils';
import BaseButton from './button';

const PrimaryButton = ({ disabled = false, onClick = noop }) => {
  const classNames = cn({
    'text-white': true,
    'bg-blue-600': true,
    'hover:bg-blue-800': !disabled,
    'disabled:opacity-50': disabled,
    'cursor-default': disabled,
  });

  return (
    <BaseButton className={classNames} disabled={disabled} onClick={onClick}>
      Primary Button
    </BaseButton>
  );
};

export default PrimaryButton;
