import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron }from '../components';

export function JumbotronContainer() {

   
     return (
        
        <Jumbotron.Container>
            {jumboData.map(data => 
            <Jumbotron key={data.id}>
            <Jumbotron.Pane>
            <Jumbotron.Title>{data.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>

            <Jumbotron.Pane>
             <Jumbotron.Image src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.alt} />
            </Jumbotron.Pane>
       
      </Jumbotron>
        )}
        
        </Jumbotron.Container>    


     )  
}
 