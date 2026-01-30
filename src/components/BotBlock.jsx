import styled from "styled-components";
import { Text } from "./shared/Texts";
import { media } from "../styles/media";
import { Button } from "./shared/Button";

const Wrapper = styled.div`
    width: 100%;
    border-radius: 40px;
    padding: 30px 20px;
    background-color: ${({$backgroundColor}) => $backgroundColor};
    margin-top: 265px;

    ${media.desktop`
        margin-top: 170px;
        padding: 30px 40px;
    `}

    & p {
        color: var(--color-white-text)
    }

    & ${Button} {
        margin-top: 24px;
    }
`;


export const BotBlock = ({defaultColor, backgroundColor = 'var(--color-gray)'}) => (
    <Wrapper $backgroundColor={backgroundColor} $defaultColor={defaultColor}>
        <Text>
            хочешь узнать больше полезной инфы{'\n'}о навыках и развитии в профессии?
        </Text>
        <Button $defaultColor={defaultColor} $type={defaultColor !== undefined ? 'main' : "secondary"}>перейти в бота</Button>
    </Wrapper>
)