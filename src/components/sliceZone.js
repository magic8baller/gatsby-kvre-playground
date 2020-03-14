import React from 'react';
import Hero from './hero';
import CallToActionGrid from './callToActionGrid'
const SliceZone = ({body}) => {
	return (
		<div>
			{body.map((bodyContent, i) => {
				if (bodyContent.type === 'hero' ) {
					return (<Hero key={i} content={bodyContent.primary.hero_content} title={bodyContent.primary.hero_title} />)
					}else if (bodyContent.type === 'call_to_action_grid') {
						return (<CallToActionGrid key={i} title={bodyContent.primary.section_title} callToActions={bodyContent.fields}/>)
						} else {
							return <div/>
						}})}
		</div>
	)
}

export default SliceZone;