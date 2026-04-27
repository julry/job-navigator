import post1d from '../assets/images/materials/default1Post.webp';
import post2d from '../assets/images/materials/default2Post.webp';
import bgDef from '../assets/images/materials/defaultBg.webp';
import bgDefDesk from '../assets/images/materials/defaultPostBgDesk.webp';

import post1Vtb from '../assets/images/materials/vtb1Post.webp';
import post2Pravo from '../assets/images/materials/pravoPost.webp';
import post2Econ from '../assets/images/materials/economyPost.webp';
import bgVtb from '../assets/images/materials/vtbPostBg.webp';
import bgVtbDesk from '../assets/images/materials/vtbPostBgDesk.webp';

import post1Alabuga from '../assets/images/materials/alabuga1Post.webp';
import post2Alabuga from '../assets/images/default/people/stroy.png';
import bgAlabuga from '../assets/images/materials/alabugaPostBg.webp';
import bgAlabugaDesk from '../assets/images/materials/alabugaPostBgDesk.webp';

import post2Beeline from '../assets/images/default/people/radioelectronicShown.png';
import bgBeeline from '../assets/images/materials/beelinePostBg.png';
import bgBeelineDesk from '../assets/images/materials/beelinePostBgDesk.webp';

import post2Lemana from '../assets/images/materials/lemana2Post.webp';
import bgLemana from '../assets/images/materials/lemanaPostBg.webp';
import bgLemanaDesk from '../assets/images/materials/lemanaPostBgDesk.webp';

import orange3Post from '../assets/images/materials/orange3Post.webp';
import yellow1Post from '../assets/images/materials/yellow1Post.webp';
import blue3Post from '../assets/images/materials/blue3Post.webp';

export const posts = {
    def: {
        bgDesk: bgDefDesk,
        bg: bgDef,
        post1: post1d,
        post2: post2d,
        post3: orange3Post,
    },
    pravo: {
        bgColor: 'var(--color-vtb-blue)',
        bg: bgVtb,
        bgDesk: bgVtbDesk,
        post1: post1Vtb,
        post2: post2Pravo,
        post3: blue3Post,
    },
    economy: {
        bgColor: 'var(--color-vtb-blue)',
        bg: bgVtb,
        bgDesk: bgVtbDesk,
        post1: post1Vtb,
        post2: post2Econ,
        post3: blue3Post,
    },
    trade: {
        bgColor: 'var(--color-lemana-dark)',
        bg: bgLemana,
        bgDesk: bgLemanaDesk,
        post1: yellow1Post,
        post2: post2Lemana,
        post3: orange3Post,
        textActive: 'var(--color-lemana-dark)'
    },
    stroy: {
        bgColor: 'var(--color-alabuga-blue)',
        bg: bgAlabuga,
        bgDesk: bgAlabugaDesk,
        post1: post1Alabuga,
        post2: post2Alabuga,
        post3: blue3Post,
        textActive: 'var(--color-alabuga-blue)'
    },
    radioelectronic: {
        bgColor: 'var(--color-beeline-dark)',
        bg: bgBeeline,
        bgDesk: bgBeelineDesk,
        post1: yellow1Post,
        post2: post2Beeline,
        post3: orange3Post,
        textActive: 'var(--color-beeline-dark)'
    },
}