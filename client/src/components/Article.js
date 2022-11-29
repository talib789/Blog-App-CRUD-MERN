import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import spinnerGIF from "../images/spinnerGIF.gif";
import { Link } from 'react-router-dom';

const Article = () => {
    
    const [title,setTitle]=useState("");
    const [article,setArticle]=useState("");
    const [authorName,setAuthorName]=useState("");

    const {id}=useParams();

    useEffect(()=>{
        axios
        .get(`https://crud-blog-app-mern.herokuapp.com/articles/${id}`)
        .then(res=>{
            setTitle(res.data.title);
            setArticle(res.data.article);
            setAuthorName(res.data.authorName);
        })
        .catch(err=>console.log(err));
    })

  return (
    <MainContainer style={{textAlign:!title||!article||!authorName?"center":""}}>
        {!title||!authorName||!article?(<img src={spinnerGIF} alt="Loading ..."/>):(
            <>
                <h1>{title}</h1>
                <p>{article}</p>
                <span style={{padding:"5px", backgroundColor:"#cecece", borderRadius:"5px", fontSize:"22px"}}>{authorName}</span>
                <hr />
                <Link to={"/"}><button className="btn btn-danger">Back to Home</button></Link>
            </>
        )}
    </MainContainer>
  )
}

export default Article

// Main Container
const MainContainer=styled.div`
    margin:6rem auto;
    padding:3rem 14rem;

    h1{
        text-align:center;
        font-weight:900;
        color:var(--dark-green);
    }

    .btn-danger{
        background: var(--dark-green);
        border: none;
        &:hover{
            background: var(--light-green);
        }
      }
`