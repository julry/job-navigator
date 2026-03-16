import styled from "styled-components";
import { ColoredSpan, Title } from "./shared/Texts";
import { posts } from "../configs/posts";
import {media} from '../styles/media';
import { Post1 } from "./materials/Post1";

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 80px;
`;

const MaterialsBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 39px;
    justify-content: space-between;
    gap: 15px;
`;

const PostWrapper = styled.div`
    background-color: ${({$bg = 'var(--color-gray)'}) => $bg};
    border-radius: 35px;
    width: 100%;
    max-width: 400px;
    height: 340px;
    overflow: hidden;
    
    ${media.desktop`
        width: calc((100% - 30px * 2) / 3);
        max-width: 420px;
        border-radius: 40px;
    `}
`;

export const Addictions = ({textColor, onClick, pageId = 'def', accentColor = 'var(--color-orange)'}) => {
    const {bgColor, ...blockInfo} = posts[pageId] ?? {};

    return (
         <Wrapper>
            <Title $color={textColor}><ColoredSpan $color={accentColor}>полезные</ColoredSpan> материалы</Title>
            <MaterialsBlock>
                <PostWrapper $bg={bgColor}>
                    <Post1 textColor={textColor} bgCard={blockInfo.bg} onClick={onClick} bgCircle={blockInfo.bgDesk} accentColor={accentColor} image={blockInfo.post1}/>
                </PostWrapper>
                <PostWrapper $bg={bgColor}>
            
                </PostWrapper>
                <PostWrapper $bg={bgColor}>
            
                </PostWrapper>
            </MaterialsBlock>
        </Wrapper>
    )
}