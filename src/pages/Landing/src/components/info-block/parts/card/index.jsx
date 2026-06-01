import { Block } from "../../../shared/block";
import styled from "styled-components";
import { media } from "../../../../../../../styles/media";

const BlockStyled = styled(Block)`
    max-width: 400px;

    & > div:first-child {
        position: relative;
        padding: 98px min(6.6vw, 25px) 30px;
        max-width: 400px;
    }
`;

const UpperBlock = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 40px;

  ${media.desktop`
    border-radius: 60px;
  `}
`;

const InfoBlockCardTitleWrapper = styled.div`
  position: absolute;
  top: 22px;
  left: 0;
  height: 56px;
  padding: 8px 25px;
  width: fit-content;
  max-width: 94%;
  display: flex;
  align-items: center;
  border-radius: 60px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: var(--color-white);
  white-space: pre-line;

  & p {
    font-size: 18px;
    width: fit-content;
    font-weight: 700;
    color: var(--color-gray);
  }

  ${media.desktop`
    padding-left: 55px;
  `}
`;

const InfoBlockCardText = styled.p`
  text-transform: none;
  font-size: 14px;

  & span {
    text-transform: none;
  }
`;

const InfoBlockCardImage = styled.img`
  position: absolute;
  top: -20px;
  right: -8px;
  object-position: center 0%;
  object-fit: contain;
  width: 86px;
  height: 86px;
  ${({$shouldRotate}) => $shouldRotate ? 'transform: rotate(-15deg);' : ''};

  ${media.desktop`
    top: -12px;
    right: auto;
    left: -45px;
  `}
`;

export const Card = ({id, src, title, text, className}) => (
    <BlockStyled className={className}>
        <UpperBlock>
            <InfoBlockCardTitleWrapper>
                <p>{title}</p>
            </InfoBlockCardTitleWrapper>
        </UpperBlock>
        <InfoBlockCardText>
            {text}
        </InfoBlockCardText>
        <InfoBlockCardImage $shouldRotate={id === 'prizes'} src={src} alt=""/>
    </BlockStyled>
)