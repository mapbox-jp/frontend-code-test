import React, { useRef, useEffect, useState, useImperativeHandle } from 'react';
import ActionItem from './ActionItem';
import MenuItem from './MenuItem';
import PromotionTag from '../PromotionTag';
import { ICON_TYPE } from '../Icon';
import {
  Container,
  Wrapper,
  Banner,
  BannerImg,
  Content,
  Header,
  HeaderTitle,
  HeaderTitleLabel,
  HeaderPromotionTag,
  HeaderSubtitle,
  HeaderSubtitleLabel,
  ActionsContainer,
  Actions,
  ActionSpace,
  MenuContainer,
  Menu,
} from './styles';
import './styles.css';

type Props = {
  feature: mapboxgl.MapboxGeoJSONFeature;
};

export type Handlers = {
  remove: () => void;
};

const PromotionPopup: React.ForwardRefRenderFunction<Handlers, Props> = (props, ref) => {
  const { feature } = props;
  const properties = feature.properties;
  const { adid, name_ja, address_ja, phone_number, subtitle, promotion_banner, promotion_banner_width, promotion_banner_height, open, close } = properties;

  const containerRef = useRef<HTMLDivElement>(null);
  const [isFadeout, setIsFadeout] = useState(false);

  useImperativeHandle(ref, () => ({
    remove: () => {
      remove();
    }
  }));

  const remove = () => {
    setIsFadeout(true);
    setTimeout(() => {
      const popup = document.querySelector(`.mapbox-promoted-popup-adid__${adid}`);
      if (!popup || !popup.parentNode) { return; }
      popup.parentNode.removeChild(popup);
    }, 200);
    removeEventListeners();
  };
  const removeEventListeners = () => {
    document.removeEventListener('click', handleClickOutside);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      remove();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => removeEventListeners();
  }, []);
  useEffect(() => {
    if (containerRef.current) {
      const popupContent = document.querySelector(`.mapbox-promoted-popup-content-adid__${adid}`) as HTMLElement;
      if (popupContent) {
        popupContent.style.width = `${containerRef.current.clientWidth}px`;
        popupContent.style.height = `${containerRef.current.clientHeight}px`;
      }
      const popup = document.querySelector(`.mapbox-promoted-popup-adid__${adid}`) as HTMLElement;
      if (popup) {
        popup.style.width = `${containerRef.current.clientWidth}px`;
        popup.style.height = `${containerRef.current.clientHeight}px`;
      }
    }
  }, [containerRef]);

  return (
    <Container
      isFadeout={isFadeout}
      ref={containerRef}
    >
      <Wrapper>
        <Banner>
          <BannerImg
            src={promotion_banner}
            width={promotion_banner_width || ''}
            height={promotion_banner_height || ''}
          />
        </Banner>
        <Content>
          <Header>
            <HeaderTitle>
              <HeaderTitleLabel>
                {name_ja || ''}
              </HeaderTitleLabel>
              <HeaderPromotionTag>
                <PromotionTag />
              </HeaderPromotionTag>
            </HeaderTitle>
            {subtitle && (
              <HeaderSubtitle>
                <HeaderSubtitleLabel>
                  {subtitle}
                </HeaderSubtitleLabel>
              </HeaderSubtitle>
            )}
          </Header>
          {properties && (
            <MenuContainer>
              <Menu>
                <MenuItem value={address_ja} iconType={ICON_TYPE.MAP_MARKER_ALT} />
                <MenuItem value={phone_number} iconType={ICON_TYPE.PHONE} />
                <MenuItem value={`営業時間: ${open} ~ ${close}`} iconType={ICON_TYPE.CLOCK} />
              </Menu>
            </MenuContainer>
          )}
          {properties && (
            <ActionsContainer>
              <Actions>
                <ActionSpace />
                <ActionItem value='行き方' iconType={ICON_TYPE.ROUTE} />
                <ActionItem value='電話番号' iconType={ICON_TYPE.PHONE} />
                <ActionItem value='関連サイト' iconType={ICON_TYPE.EARTH} />
                <ActionSpace />
              </Actions>
            </ActionsContainer>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

const PromotionPopupRef = React.forwardRef(PromotionPopup);

export default PromotionPopupRef;
