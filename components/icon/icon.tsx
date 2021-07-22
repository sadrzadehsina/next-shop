import * as Icons from '@heroicons/react/solid';
import { useMemo } from 'react';
import { toPascalCase } from '../utils';

const Icon = ({ name, ...props }) => {
  const iconName = useMemo(() => toPascalCase(name) + 'Icon', [name]);

  const IconComponent = Icons[iconName];

  return <IconComponent {...props} />;
};

export default Icon;
