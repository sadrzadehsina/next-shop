import { useMemo } from 'react';

const Price = ({ value }) => {
  const currency = '$';

  const price = useMemo(
    () =>
      Number(value)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,'),
    [value],
  );

  return <span>{`${price}${currency}`}</span>;
};

export default Price;
