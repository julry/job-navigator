import styled from "styled-components";
import { Text } from "./shared/Texts";
import { media } from "../styles/media";
import { Button } from "./shared/Button";

const Wrapper = styled.div`
    width: 100%;
    border-radius: 40px;
    padding: 30px 20px;
    background-color: var(--color-gray);
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


export const BotBlock = () => (
    <Wrapper>
        <Text>
            хочешь узнать больше полезной инфы{'\n'}о навыках и развитии в профессии?
        </Text>
        <Button $type="secondary">перейти в бота</Button>
    </Wrapper>
)