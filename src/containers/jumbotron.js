import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import Jumbotron from '../components/jumbotron';

export function JumbotronContainer() {
     return (
        
        <Jumbotron.Container>
            {jumboData.map(data => 
            <Jumbotron key={data.id}>
            <Jumbotron.Title>{data.title}</Jumbotron.Title>
        <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
        <Jumbotron.Image src={data.image} alt={data.alt} />
        </Jumbotron>
        )}
        
        </Jumbotron.Container>    


     )  
}
 