import cn from 'classnames';

const BaseButton = ({ className, children, disabled, onClick }) => {
  const classNames = cn(['px-5 py-2', className]);

  return (
    <button className={classNames} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default BaseButton;
