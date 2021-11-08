import styled from 'styled-components';

export const ActionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 65px;
  min-width: 65px;
  height: 57px;
  min-height: 57px;
  border: 1px solid rgba(232, 234, 237, 0.5);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s;
  & + & {
    margin-left: 10px;
  }
  &:hover {
    background-color: #f1f3f4;
  }
`;
export const ActionItemButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
`;
export const ActionItemButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  min-width: 19px;
  height: 19px;
  min-height: 19px;
  font-size: 15px;
  color: rgb(26, 115, 232);
  cursor: pointer;
`;
export const ActionItemLabel = styled.div`
  margin-top: 4px;
  font-size: 10px;
  line-height: 1;
  color: rgb(26, 115, 232);
`;
