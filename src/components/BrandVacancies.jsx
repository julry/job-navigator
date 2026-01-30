import { media } from "../styles/media";
import styled from 'styled-components';
import { ColoredSpan, Text, Title } from './shared/Texts';
import { Button } from "./shared/Button";

const Wrapper = styled.div`
    padding: 80px 0;
    width: 100%;
`;

const CompanyInfoWrapper = styled.div`
    position: relative;
    margin: 40px 0;
    padding: 20px;
    width: 100%;
    border-radius: 30px;
    border: 2px solid ${({$accentColor}) => $accentColor};

    ${media.desktop`
        padding: 30px 40px;
        border-radius: 40px;
    `};
`;

const InfoLine = styled.div`
    display: flex;
    gap: 5px;
    max-width: ${({$isLast}) => $isLast ? 220 : 644}px;

    & + & {
        margin-top: 5px;
    }

    & svg {
        flex-shrink: 0;
        margin-top: 4px;
    }

    ${media.desktop`
        max-width: 644px;
    `}
`;

const InfoBlock = styled.div`
    margin-top: 25px;

    ${media.desktop`
        margin-top: 30px;
    `};
`;

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;

    ${media.desktop`
        margin-top: 50px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    `}
`;

const Link = styled(Button)`
    height: 120px;
    font-size: 16px;
    padding: 10px 5px;
    text-transform: lowercase;

     ${media.desktop`
        padding: 20px;
        width: calc((100% - 27px * 3) / 4);
    `}
`;

const SubTitle = styled(Title)`
    font-size: 20px;

    ${media.desktop`
        font-size: 24px;
    `}
`;

const PictureWrapper = styled.img`
    position: absolute;
    object-fit: contain;
    bottom: 89px;
    right: -33px;
    width: 180px;
    height: 158px;

    ${media.desktop`
        bottom: 76px;
        right: -13px;
        width: 454px;
        height: 456px;
    `}
`;

const ButtonStyled = styled(Button)`
    margin-top: 40px;
    text-transform: none;
`;

export const BrandVacancies = ({picture, companyName, defaultColor, accentColor, format, gives = [], takes = [], vacancies = [], }) => {
    return (
        <Wrapper>
            <Title $color={defaultColor}><ColoredSpan $color={accentColor}>вакансии</ColoredSpan> для начинающих специалистов</Title>
            <CompanyInfoWrapper $accentColor={accentColor}>
                <SubTitle $color={defaultColor}>оплачиваемая практика для студентов</SubTitle>
                <br/>
                <Text $color={defaultColor}>возможность пройти практику по профессии, предусмотренную твоим учебным планом</Text>
                {format.length > 0 && (
                    <InfoBlock>
                        <Text $color={accentColor}>формат</Text>
                         <br/>
                        <InfoLine>
                            <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.36426C0.447715 6.36426 0 6.81197 0 7.36426C0 7.91654 0.447715 8.36426 1 8.36426V7.36426V6.36426ZM31.4225 8.07136C31.813 7.68084 31.813 7.04768 31.4225 6.65715L25.0585 0.29319C24.668 -0.0973344 24.0348 -0.0973344 23.6443 0.29319C23.2538 0.683714 23.2538 1.31688 23.6443 1.7074L29.3011 7.36426L23.6443 13.0211C23.2538 13.4116 23.2538 14.0448 23.6443 14.4353C24.0348 14.8259 24.668 14.8259 25.0585 14.4353L31.4225 8.07136ZM1 7.36426V8.36426H30.7154V7.36426V6.36426H1V7.36426Z" fill={defaultColor}/>
                            </svg>
                            <Text $color={defaultColor}>{format}</Text>
                        </InfoLine>
                    </InfoBlock>
                )}
                {gives.length > 0 && (
                    <InfoBlock>
                        <Text $color={accentColor}>что даёт</Text>
                        <br/>
                        {
                            gives.map((give) => (
                                <InfoLine>
                                    <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6.36426C0.447715 6.36426 0 6.81197 0 7.36426C0 7.91654 0.447715 8.36426 1 8.36426V7.36426V6.36426ZM31.4225 8.07136C31.813 7.68084 31.813 7.04768 31.4225 6.65715L25.0585 0.29319C24.668 -0.0973344 24.0348 -0.0973344 23.6443 0.29319C23.2538 0.683714 23.2538 1.31688 23.6443 1.7074L29.3011 7.36426L23.6443 13.0211C23.2538 13.4116 23.2538 14.0448 23.6443 14.4353C24.0348 14.8259 24.668 14.8259 25.0585 14.4353L31.4225 8.07136ZM1 7.36426V8.36426H30.7154V7.36426V6.36426H1V7.36426Z" fill={defaultColor}/>
                                    </svg>
                                    <Text $color={defaultColor}>{give}</Text>
                                </InfoLine>
                            ))
                        }
                    </InfoBlock>
                )}

                {takes.length > 0 && (
                    <InfoBlock>
                        <Text $color={accentColor}>что нужно</Text>
                        <br/>
                        {
                            takes.map((take) => (
                                <InfoLine $isLast>
                                    <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6.36426C0.447715 6.36426 0 6.81197 0 7.36426C0 7.91654 0.447715 8.36426 1 8.36426V7.36426V6.36426ZM31.4225 8.07136C31.813 7.68084 31.813 7.04768 31.4225 6.65715L25.0585 0.29319C24.668 -0.0973344 24.0348 -0.0973344 23.6443 0.29319C23.2538 0.683714 23.2538 1.31688 23.6443 1.7074L29.3011 7.36426L23.6443 13.0211C23.2538 13.4116 23.2538 14.0448 23.6443 14.4353C24.0348 14.8259 24.668 14.8259 25.0585 14.4353L31.4225 8.07136ZM1 7.36426V8.36426H30.7154V7.36426V6.36426H1V7.36426Z" fill={defaultColor}/>
                                    </svg>
                                    <Text $color={defaultColor}>{take}</Text>
                                </InfoLine>
                            ))
                        }
                    </InfoBlock>
                )}
                <ButtonStyled $defaultColor={defaultColor} $accentColor={accentColor}>
                        начать карьеру в {companyName}
                </ButtonStyled>
                <PictureWrapper src={picture} alt="" />
            </CompanyInfoWrapper>
            
            <LinksWrapper>
                {vacancies.map(({name, link}) => (
                    <Link $defaultColor={defaultColor} $accentColor={accentColor} key={name}>
                        {name}
                    </Link>
                ))}
            </LinksWrapper>
        </Wrapper>
    )
}
