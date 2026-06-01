import { Shining } from '../shining';
import styled from 'styled-components';
import { media } from '../../../../../../styles/media';

const StyledBlock = styled.div`
    position: relative;
    width: 100%;
`;
    
const Content = styled.div`
    position: relative;
    z-index: 2;
    background-color: var(--color-gray);
    border-radius: 40px;
    box-shadow: 0 0 5px 0px var(--color-white), inset 0 0 0 1px var(--color-white);

    ${media.desktop`
        border-radius: 60px;
    `}
`;

const ShinigStyled = styled(Shining)`
    border-radius: 40px;

    ${media.desktop`
        border-radius: 60px;
    `}
`;

export const Block = ({className, children}) => (
    <StyledBlock className={className}>
        <Content>
            {children}
        </Content>
        <ShinigStyled />
    </StyledBlock>
)

