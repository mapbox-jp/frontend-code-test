import styled, { keyframes } from 'styled-components';
import { devices } from '../App/breakpoints';

type Container = {
  isFadeout: boolean;
};

const bounceIn = keyframes`
  0%, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1.0);
  }
  0% {
    opacity: 0;
    transform:scale3d(0.3, 0.3, 0.3);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1.0;
    transform: scaleX(1);
  }
`;
const bounceOut = keyframes`
  50% {
    opacity: 1.0;
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    opacity: 0.0;
    transform: scale3d(0.5, 0.5, 0.5);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation-duration: 0.25s;
  animation-name: ${({ isFadeout }: Container) => isFadeout ? bounceOut : bounceIn};
`;
export const Wrapper = styled.div`
  width: 280px;
  @media ${devices.desktopOrLaptop} {
    width: auto;
    display: flex;
  }

  background: rgb(255, 255, 255);
  z-index: 1;
`;
export const Banner = styled.div`
  width: 280px;
  @media ${devices.desktopOrLaptop} {
    width: 150px;
  }
`;
export const BannerImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;
export const Content = styled.div`
  padding: 16px;
  @media ${devices.desktopOrLaptop} {
    width: 270px;
  }
  display: ${({ hideContent }) => hideContent ? 'none' : 'block' };
`;
export const Border = styled.div`
  margin: 15px 0 15px 0;
  width: 1px;
  background-color: rgb(242,242,246);
`;
export const Header = styled.div`
  position: relative;
`;
export const HeaderTitle = styled.div``;
export const HeaderTitleLabel = styled.h1`
  display: -webkit-box;
  margin: 0;
  width: calc(100% - 36px - 10px);
  font-size: 14px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
export const HeaderPromotionTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
export const HeaderSubtitle = styled.div`
  margin-top: 5px;
  font-size: 13px;
`;
export const HeaderSubtitleLabel = styled.span``;
export const MenuContainer = styled.div`
  margin: 10px -16px 0 -16px;
`;
export const Menu = styled.ul``;
export const ActionsContainer = styled.div`
  margin: 14px -16px 0 -16px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display:none;
  }
`;
export const Actions = styled.ul`
  display: flex;
`;
export const ActionSpace = styled.li`
  width: 16px;
  min-width: 16px;
  height: auto;
`;
export const HorizontalBar = styled.div`
  text-align: center;
`;
export const ToggleButton = styled.div`
  margin-bottom: ${({ isExpanded }) => isExpanded ? '0' : '10px' };
  font-size: 15px;
  display: inline-block;
  color: rgb(26, 115, 232);
`;
