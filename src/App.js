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
         max-width: 550px;
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
         max-width: unset;
         height: 100%;
         width: 100%;
      }
   `}
`;

function App({ router }) {
   const wrapperRef = useRef();

   return (
         <AppContext.Provider value={{wrapperRef}}>
            <Wrapper ref={wrapperRef}>
                  <RouterProvider router={router} />
            </Wrapper>
         </AppContext.Provider>
   );
}

export default App;
