import post1d from '../assets/images/materials/default1Post.png';
import post2d from '../assets/images/materials/default2Post.png';
import bgDef from '../assets/images/materials/defaultBg.png';
import bgDefDesk from '../assets/images/materials/defaultPostBgDesk.png';

import post1Vtb from '../assets/images/materials/vtb1Post.png';
import post2Pravo from '../assets/images/materials/pravoPost.png';
import post2Econ from '../assets/images/materials/economyPost.png';
import bgVtb from '../assets/images/materials/vtbPostBg.png';
import bgVtbDesk from '../assets/images/materials/vtbPostBgDesk.png';

import post1Alabuga from '../assets/images/materials/alabuga1Post.png';
import post2Alabuga from '../assets/images/default/people/stroy.png';
import bgAlabuga from '../assets/images/materials/alabugaPostBg.png';
import bgAlabugaDesk from '../assets/images/materials/alabugaPostBgDesk.png';

import post2Beeline from '../assets/images/materials/beeline2Post.png';
import bgBeeline from '../assets/images/materials/beelinePostBg.png';
import bgBeelineDesk from '../assets/images/materials/beelinePostBgDesk.png';

import post2Lemana from '../assets/images/materials/lemana2Post.png';
import bgLemana from '../assets/images/materials/lemanaPostBg.png';
import bgLemanaDesk from '../assets/images/materials/lemanaPostBgDesk.png';

import orange3Post from '../assets/images/materials/orange3Post.png';
import yellow1Post from '../assets/images/materials/yellow1Post.png';
import blue3Post from '../assets/images/materials/blue3Post.png';

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
    },
    stroy: {
        bgColor: 'var(--color-alabuga-blue)',
        bg: bgAlabuga,
        bgDesk: bgAlabugaDesk,
        post1: post1Alabuga,
        post2: post2Alabuga,
        post3: blue3Post,
    },
    radioelectronic: {
        bgColor: 'var(--color-beeline-dark)',
        bg: bgBeeline,
        bgDesk: bgBeelineDesk,
        post1: yellow1Post,
        post2: post2Beeline,
        post3: orange3Post,
    },
}