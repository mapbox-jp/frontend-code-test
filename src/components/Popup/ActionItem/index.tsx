import React from 'react';
import Icon from '../../Icon';
import {
  ActionItem,
  ActionItemButton,
  ActionItemButtonIcon,
  ActionItemLabel,
} from './styles';

type Props = {
  value: string;
  iconType: any;
};

const ActionItems: React.FC<Props> = props => {
  const { value, iconType } = props;
  return (
    <ActionItem>
      <ActionItemButton>
        <ActionItemButtonIcon>
          <Icon type={iconType} />
        </ActionItemButtonIcon>
      </ActionItemButton>
      <ActionItemLabel>
        {value}
      </ActionItemLabel>
  </ActionItem>
  );
};

export default ActionItems;
