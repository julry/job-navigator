import {Shining} from '../shining';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    position: relative;
    width: 100%;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    border-radius: 60px;
    height: 48px;
    padding: 0 20px 2px;
    background: ${({$isSecond}) => $isSecond ? 'transparent' : 'var(--color-orange)'};
    font-size: 20px;
    z-index: 2;

    @media (hover: hover) {
        &:hover {
            ${({$isSecond}) => $isSecond ? 'background: var(--color-orange);' : ' box-shadow: 0 0 5px 0 var(--color-orange);'};
        }
    }
`;

const Wrapper = styled.div`
    position: relative;
    padding: 1px;

    @media (hover: hover) {
        &:hover div{
            display: block;
        }
    }
`;

const ShiningStyled = styled(Shining)`
    display: none;
    background-color: var(--color-orange);
    border-radius: 60px;
`;

export const Button = ({className, children, isSecondary, ...props}) => {
    if (isSecondary) {
        return (
            <ButtonWrapper className={className} {...props} $isSecond>
                {children}
            </ButtonWrapper>
        )
    }

    return (
        <Wrapper className={className}>
            <ButtonWrapper {...props}>
                {children}
            </ButtonWrapper>
            <ShiningStyled />
        </Wrapper>
    )
}