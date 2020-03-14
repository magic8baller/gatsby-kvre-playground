import React from 'react';
import RichText from './richText';
import styled from 'styled-components';
import Image from './image'


const HeroWrapper = styled.section`
position: 'relative';
    /* background: url('${props => props.backgroundImage}');
    background-size: cover;
    background-repeat: no-repeat;*/
display: 'flex';
    padding-top: 12rem;
    align-items: center;
    text-align: center;
		color: #fff;
		text-shadow: 2px 2px #152142;

    div{
        max-width: 700px;
				margin: 0 auto;
				padding: 1em;
        background: rgba(0,0,0,0.5);
    }
`;

const Button = styled.button`
margin-top: 2rem;
    background: orange;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
    a{
			text-decoration: none;
        padding: 1em;
        color: white;
        display: inline-block;
    }
`;

const Hero = ({ title, content}) => {
	return (
		<Image>
		<HeroWrapper>
		<div>
<RichText render={title}/>

<p><b>{content}</b></p></div>

<Button><a href='mailto:leslie.turis1@gmail.com'>Receive a free market analysis today</a></Button>
		</HeroWrapper>
</Image>
	)
}

export default Hero;