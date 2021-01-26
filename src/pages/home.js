import React from 'react';
import { OptForm } from '../components'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer} from '../containers/faqs'
import { HeaderContainer } from '../containers/header'

export default function Home() {
    return (
        <>
        <HeaderContainer>
        <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
    </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
        </>
    )
}