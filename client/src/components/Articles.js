import React from 'react'
import styled from 'styled-components'
import spinnerGIF from "../images/spinnerGIF.gif";
import {Link} from 'react-router-dom';

const Articles = ({posts}) => {
  return (
    <MainContainer style={{textAlign:!posts.length?"center":""}}>
      {!posts.length?(<img src={spinnerGIF} alt="Loading ..."/>):(
      posts.map((el,id)=>(
        <div className='container' key={el._id}>
        <StyledLink to={`/article/${el._id}`} ><h2 style={{fontSize:"40px"}}>{el.title}</h2></StyledLink>
        <p>{el.article}</p>
        <span style={{padding:"5px", backgroundColor:"#cecece", borderRadius:"5px"}}>{el.authorName}</span>
        <hr />
        <div className="row">
            <div className="col-sm-2">
                <Link to={`/editArticle/${el._id}`} className="btn btn-outline-success">Edit Article</Link>
            </div>
            <div className="col-sm-2">
                <Link to={`/deleteArticle/${el._id}`} className="btn btn-outline-danger">Delete Article</Link>
            </div>
        </div>
        </div>
      )))}
    </MainContainer>
  )
}

export default Articles

// Main Container

const MainContainer=styled.div`
    margin:7rem 0;
    .container{
      margin:7rem;

      h2{
        color:black;
        text-decoration: none;
      }
    }
`

// Link Component
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;