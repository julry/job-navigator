import styled from "styled-components";
import { ColoredSpan, Title } from "./shared/Texts";
import { posts } from "../configs/posts";
import {media} from '../styles/media';
import { Post1 } from "./materials/Post1";
import {Post2Default} from './materials/Post2Default';
import { post2Infos } from "../configs/post2Infos";
import {Post3} from './materials/Post3';
import { Post2Economy } from "./materials/Post2Economy";
import { Post2Pravo } from "./materials/Post2Pravo";
import { Post2Radio } from "./materials/Post2Radio";
import { Post2Trade } from "./materials/Post2Trade";
import { Post2Stroy } from "./materials/Post2Stroy";

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 80px;
    scroll-margin-top: 90px;
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

export const Addictions = ({ref, textColor = 'var(--color-dark-text)', onClick, isDefault, pageId, accentColor = 'var(--color-orange)'}) => {
    const {bgColor, ...blockInfo} = posts[isDefault ? 'def' : pageId] ?? {};

    const config = post2Infos.find(({id}) => id === pageId);

    return (
         <Wrapper ref={ref}>
            <Title $color={textColor}><ColoredSpan $color={accentColor}>советы</ColoredSpan> про работу</Title>
            <MaterialsBlock>
                <PostWrapper $bg={bgColor}>
                    <Post1 textColor={textColor} bgCard={blockInfo.bg} onClick={onClick} bgCircle={blockInfo.bgDesk} accentColor={accentColor} image={blockInfo.post1}/>
                </PostWrapper>
                <PostWrapper $bg={bgColor}>
                    {isDefault && (
                        <Post2Default config={config} bgCard={blockInfo.bg} onClick={onClick} bgCircle={blockInfo.bgDesk} accentColor={accentColor} image={blockInfo.post2}/>
                    )}
                    {pageId === 'economy' && (
                        <Post2Economy bgCard={blockInfo.bg} onClick={onClick} bgCircle={blockInfo.bgDesk} accentColor={accentColor} image={blockInfo.post2} />
                    )}
                    {pageId === 'pravo' && (
                        <Post2Pravo bgCard={blockInfo.bg} onClick={onClick} bgCircle={blockInfo.bgDesk} accentColor={accentColor} image={blockInfo.post2} />
                    )}
                    {pageId === 'radioelectronic' && (
                        <Post2Radio bgCard={blockInfo.bg} onClick={onClick} bgCircle={blockInfo.bgDesk} accentColor={accentColor} image={blockInfo.post2} />
                    )}
                    {pageId === 'trade' && (
                        <Post2Trade bgCard={blockInfo.bg} onClick={onClick} bgCircle={blockInfo.bgDesk} accentColor={accentColor} image={blockInfo.post2} />
                    )}
                    {pageId === 'stroy' && (
                        <Post2Stroy bgCard={blockInfo.bg} onClick={onClick} bgCircle={blockInfo.bgDesk} accentColor={accentColor} image={blockInfo.post2} />
                    )}
                </PostWrapper>
                <PostWrapper $bg={bgColor}>
                    <Post3 textActive={blockInfo.textActive} textColor={textColor} bgCard={blockInfo.bg} onClick={onClick} bgCircle={blockInfo.bgDesk} accentColor={accentColor} image={blockInfo.post3}/>
                </PostWrapper>
            </MaterialsBlock>
        </Wrapper>
    )
}