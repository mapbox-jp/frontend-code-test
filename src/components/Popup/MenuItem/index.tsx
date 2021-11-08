import React from 'react';
import Icon from '../../Icon';
import {
  MenuItem,
  MenuItemIcon,
  MenuItemLabel,
} from './styles';

type Props = {
  value: string;
  iconType: any;
  lineClamp?: number;
};

const MenuItems: React.FC<Props> = props => {
  const { value, iconType, lineClamp } = props;
  return (
    <MenuItem>
      <MenuItemIcon>
        <Icon type={iconType} />
      </MenuItemIcon>
      <MenuItemLabel lineClamp={lineClamp}>
        {value}
      </MenuItemLabel>
    </MenuItem>
  );
};

export default MenuItems;
