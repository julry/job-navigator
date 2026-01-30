import styled from "styled-components";
import { Text } from "./shared/Texts";
import { media } from "../styles/media";
import { Button } from "./shared/Button";
import { openBot } from "../utils/openBot";

const Wrapper = styled.div`
    width: 100%;
    border-radius: 40px;
    padding: 30px 20px;
    background-color: ${({$backgroundColor}) => $backgroundColor};
    margin-top: ${({$isBrand, $testAdditionMargin}) => $isBrand ? 40 : 345 + $testAdditionMargin}px;

    ${media.desktop`
        margin-top: 170px;
        padding: 30px 40px;
    `}

    & p {
        color: ${({$defaultColor}) => $defaultColor ?? 'var(--color-white-text)'};
    }

    & ${Button} {
        ${({$isBrand}) => !$isBrand ? 'background-color: var(--color-orange); color: var(--color-white);' : ''};
        margin-top: 24px;
    }
`;


export const BotBlock = ({ isBrand, defaultColor, styles, testAdditionMargin = 0, backgroundColor = 'var(--color-gray)'}) => (
    <Wrapper $testAdditionMargin={testAdditionMargin} $isBrand={isBrand} $backgroundColor={backgroundColor} $defaultColor={defaultColor}>
        <Text>
            хочешь узнать больше полезной инфы{'\n'}о навыках и развитии в профессии?
        </Text>
        <Button $isBrand={isBrand} onClick={openBot} $style={styles} $defaultColor={defaultColor} $type={defaultColor !== undefined ? 'main' : "secondary"}>перейти в бота</Button>
    </Wrapper>
)