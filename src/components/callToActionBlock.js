import React from 'react'
import styled from 'styled-components';
import RichText from './richText';
import {Link} from 'gatsby';
const StyledActionBlock = styled.article`
	padding:20px;
	background: slategray;
	border-radius:20px;
	margin: 20px 0;

	 .call-to-action-content{
        display: flex;
        .featured-image-wrapper{
            background: white;
            padding: 10px;
            border-radius: 10px;
            margin: auto 10px;
        }
        img{
            max-width: 200px;
            margin: 0;
        }
    }
`;

const Button = styled.div`
background: orange;
display: inline-block;
border-radius: 4px;
cursor:pointer;

a {
padding:	 	4px 8px;
display: inline-block;
text-decoration: none;
}
`
const CallToActionBlock = ({title, content, buttonLabel, buttonDestination, featuredImage}) => {
	return (
		<StyledActionBlock>
<RichText render={title} />
<div className="call-to-action-content">
<RichText render={content} />
<div className="featured-image-wrapper">
	<img src={featuredImage} alt='Featured image'/>
</div>
</div>
<Button>
<Link to={buttonDestination}>{buttonLabel}</Link>
</Button>
		</StyledActionBlock>
	)
}
export default CallToActionBlock