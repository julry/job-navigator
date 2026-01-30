import styled from "styled-components";

export const Button = styled.button`
    position: relative;

    width: 100%;
    height: 45px;
    padding: 14px 20px;

    z-index: 4;
    background-color: ${({$type = 'main', $defaultColor = 'var(--color-gray)'}) => $type === 'main' ? $defaultColor : 'var(--color-white)'};
    border-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    white-space: pre-line;
    cursor: pointer;

    ${({$style}) => $style};

    color: var(--color-${({$type = 'main'}) => $type === 'main' ? 'white': 'dark'}-text);
    font-size: 12px;
    line-height: 110%;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({$accentColor = 'var(--color-orange)'}) => $accentColor};
        color: var(--color-white-text);
    }
`;