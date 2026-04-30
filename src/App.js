import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import { media } from './styles/media';
import bg from './assets/images/bg.png';
import { useRef } from 'react';
import { AppContext } from './context/AppContext';

const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   background-color: #1E1E1E;
   background-image: url(${bg});
   overflow: hidden auto;
   background-size: cover;
   scrollbar-width: none;
   -ms-overflow-style: none;

   &::-webkit-scrollbar {
      display: none; 
   }
   

   ${media.tablet`
      display: flex;
      align-items: center;
      justify-content: center;

      & > div {
         height: 100%;
         width: 100%;
         
         scrollbar-width: none;
         -ms-overflow-style: none;

         &::-webkit-scrollbar {
            display: none; 
         }
      }
   `};

   ${media.desktop`
      & > div {
         height: 100%;
         width: 100%;
      }
   `}
`;

const NoiseSvg = styled.svg`
   position: absolute;
   top: -2vh;
   left: -2vh;
   visibility: hidden;
`;

function App({ router }) {
   const wrapperRef = useRef();

   return (
         <AppContext.Provider value={{wrapperRef}}>
            <Wrapper ref={wrapperRef}>
                  <RouterProvider router={router} />
            </Wrapper>
            <NoiseSvg width="0" height="0">
               <rect width="100%" height="100%" fill="none" filter={`url(#noiseFilter)`} clipPath="url(#clip)" />
               <defs>
                  <clipPath id="clip">
                     <rect width="100%" height="100%" />
                  </clipPath>
                  <filter id="noiseFilter"
                     x="0" y="0"
                     width="110%" height="110%"
                     filterUnits="objectBoundingBox">
                     <feFlood floodOpacity="0" result="BackgroundImageFix" />
                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                     <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" in="SourceGraphic" />
                     <feTurbulence type="fractalNoise" baseFrequency="1.6666666269302368 1.6666666269302368" numOctaves="3" seed="4986" />
                     <feDisplacementMap in="effect1_foregroundBlur" scale="4" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="105%" height="105%" />
                     <feMerge>
                           <feMergeNode in="displacedImage" />
                     </feMerge>
                  </filter>
               </defs>
         </NoiseSvg>
         </AppContext.Provider>
   );
}

export default App;
