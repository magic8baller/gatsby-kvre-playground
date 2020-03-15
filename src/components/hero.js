import React from 'react';
import RichText from './richText';
import styled from 'styled-components';
import Image from './image'




const Button = styled.article`
margin-top: 2rem;
margin: 0 auto;
    background: orange;
    /* display: inline-block; */
    border-radius: 4px;
    cursor: pointer;
    a{
			text-decoration: none;
        padding: 1em;
        color: white;
        display: inline-block;
    }
`;

const HeroWrapper = styled.section`
    background: url('${props => props.backgroundImage}');
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 66px);
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    div.text{
        max-width: 800px;
        margin: 0 auto;
        background: rgba(0,0,0,0.5);
    }
		/* article {
			display: 'block';
		} */
`

const Hero = ({title, content, backgroundImage}) => {
    console.log(title, content);
    return (
        <HeroWrapper backgroundImage={backgroundImage}>
            <div className='text'>
            <RichText render={title} />
            <p>
                {content}
            </p>
            </div>
				<Button><a href='mailto:leslie.turis1@gmail.com'>Receive a free market analysis today</a></Button>
        </HeroWrapper>
    );
}

export default Hero;