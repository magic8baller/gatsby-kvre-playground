import {graphql, Link, StaticQuery} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import "./layout.css";
import Image from "./image"

const navQuery = graphql`
	{
		prismic {
			allNavigations {
				edges {
					node {
						branding
						navigation_links {
							label
							link {
								... on PRISMIC_Page {
									_meta {
										uid
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

const MainWrapper = styled.main`
	margin: 0 auto;
	/* height: 1000px; */


`;
const Header = styled.header`
	display: flex;
	/* position: sticky; */
	background: #fff;
	height: 66px;
	box-sizing: border-box;

`;
const NavBar = styled.div`
	margin-left: auto;
	display: flex;

`;
const NavLink = styled.div`
margin: auto 0;
a {
	color: #152142;
	padding: 0 16px;
	font-weight: bold;
	text-decoration: none;
	font-size: 1rem;
	&:hover{
		color:#5b6678;
	}
}
`;

const Branding = styled.div`
	color:#456EDF;
	font-weight: bold;
	margin: auto 0;
	a {
		font-size: 20px;
	}
`;
const renderLinks = (links) => links.map(link => (

	<NavLink>
		<Link to={`/${link.link._meta.uid}`} key={link.link._meta.uid}>
			{link.label}
		</Link>
	</NavLink>

));
const Layout = ({children}) => {


	return (
		<>
		<Header>

			<StaticQuery query={`${navQuery}`} render={(navData) => {
const {node} = navData.prismic.allNavigations.edges[0]
				return (
					<>
<Branding>
{node.branding}
</Branding>
				<NavBar>
		{renderLinks(node.navigation_links)}
				</NavBar>
				</>
				)}} />
		</Header>
			<MainWrapper style={{position: `relative`}}>{children}</MainWrapper>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
