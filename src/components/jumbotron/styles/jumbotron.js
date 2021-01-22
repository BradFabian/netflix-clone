import styled from 'styled-components';

export const Inner = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
flex-direction: ${({direction}) => direction};
max-width: 1100px;
margin: auto;
width: 100%auto;

@media (max-width: 1000px){
    flex-direction: column;
}
`;

export const Item = styled.div` display: flex;`;

export const Container = styled.section``;

export const Title = styled.h1`
font-size: 4rem;
line-height: 1.1;
margin-bottom: 8px;
    
    @media (max-width: 600px) {
        font-size: 35px;
    }


`;
export const SubTitle = styled.h2`
font-size: 2rem;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px){
        font-size: 1rem;
    }

`;
export const image = styled.img`
max-width: 100%;
height: auto;
`;