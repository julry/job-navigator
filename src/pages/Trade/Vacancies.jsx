import styled from "styled-components"
import { media } from "../../styles/media";
import { SubtitleSm, Text } from "../../components/shared/Texts";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;
    gap: 20px;

    ${media.desktop`
        margin: 30px 0;
        gap: 30px;
        flex-direction: row;
        justify-content: space-between;
    `}
`;

const Card = styled.div`
    width: 100%;
    padding: 15px 20px;
    border: 2px solid var(--color-lemana-dark);
    border-radius: 30px;
    min-height: 136px;

    & > ${SubtitleSm} {
        font-size: 24px;
        margin-bottom: 10px;
    }
    & > ${Text} {
        font-size: 16px;
    }

     ${media.desktop`
        padding: 25px 36px;
        border-radius: 40px;
        width: calc((100% - 90px) / 3);
    `}
`;

export const VacanciesComponent = ({defaultColor}) => (
    <Wrapper>
        <Card>
            <SubtitleSm $color={defaultColor}>Временный контракт</SubtitleSm>
            <Text $color={defaultColor}>Возможность подработать летом, когда нет задач по учебе</Text>
        </Card>
        <Card>
            <SubtitleSm $color={defaultColor}>Неполный день</SubtitleSm>
            <Text $color={defaultColor}>Почасовая занятость,{'\n'}которая позволяет совмещать учебу с работой</Text>
        </Card>
        <Card>
            <SubtitleSm $color={defaultColor}>Полноценная ставка</SubtitleSm>
            <Text $color={defaultColor}>Работа на полный день с перспективой карьерного роста</Text>
        </Card>
    </Wrapper>
)