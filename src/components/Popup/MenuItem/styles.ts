import styled from 'styled-components';

type MenuItemLabel = {
  lineClamp?: number;
};

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  line-height: 1;
  overflow-wrap: break-word;
  transition: all 0.1s;
  padding: 8px 16px;
`;
export const MenuItemIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding: 2px;
  width: 19px;
  min-width: 19px;
  height: 19px;
  min-height: 19px;
  font-size: 15px;
  color: #1a73e8;
`;
export const MenuItemLabel = styled.span`
  display: -webkit-box;
  font-size: 13px;
  line-height: 1.5;
  overflow: hidden;
  -webkit-line-clamp: ${({ lineClamp }: MenuItemLabel) => lineClamp || 1};
  -webkit-box-orient: vertical;
`;
