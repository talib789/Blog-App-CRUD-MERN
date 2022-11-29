import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import spinnerGIF from "../images/spinnerGIF.gif";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DeleteArticle() {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorName, setAuthorName] = useState("");

  const { id } = useParams();

  const navigate=useNavigate();

  useEffect(() => {
    axios
      .get(`https://crud-blog-app-mern.herokuapp.com/articles/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setArticle(res.data.article);
        setAuthorName(res.data.authorName);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  })

  const deleteArticle=()=>{
    axios
      .delete(`https://crud-blog-app-mern.herokuapp.com/articles/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      navigate("/");
  }

  return (
    <MainContainer style={{ textAlign: !title || !article || !authorName ? "center" : "" }}>
      {!title || !authorName || !article ? (<img src={spinnerGIF} alt="Loading ..." />) : (
        <>
          <h1>{title}</h1>
          <p>{article}</p>
          <span style={{ padding: "5px", backgroundColor: "#cecece", borderRadius: "5px", fontSize: "22px" }}>{authorName}</span>
          <hr />
          <button onClick={deleteArticle} className="btn btn-danger">Delete Article</button>
        </>
      )}
    </MainContainer>
  )
}

export default DeleteArticle

const MainContainer = styled.div`
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