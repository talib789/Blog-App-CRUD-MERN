import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const AddArticle = () => {

    const [title,setTitle]=useState("");
    const [article,setArticle]=useState("");
    const [authorName,setAuthorName]=useState("");

    const changeOnClick=(e)=>{
        e.preventDefault();
        const articleData={
            title,
            article,
            authorName
        }

        axios.post('https://crud-blog-app-mern.herokuapp.com/articles/add', articleData)
        .then(res=>{
            console.log(res.data);
            alert("Article has been posted");
        })
        .catch(err=>{
            console.log(err);
            alert("Something went wrong");
        })

        setArticle("");
        setTitle("");
        setAuthorName("");
        <Navigate to="/" replace={true} />
    }

    return (
        <AddArticleContainer>
            <div className='container'>
                <h1>Add New Article</h1>
                <form onSubmit={changeOnClick} encType='miltipart/form-data'>
                    <div className="form-group">
                        <label htmlFor="authorName">Author Name</label>
                        <input type="text" className="form-control" placeholder="Author Name" value={authorName} onChange={(e)=>setAuthorName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="article">Article</label>
                        <textarea className="form-control" rows="3" value={article} onChange={(e)=>setArticle(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Post Article</button>
                </form>
            </div>
        </AddArticleContainer>
    )
}

export default AddArticle

// Main Container

const AddArticleContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25rem;
  h1{
    font-weight:900;
    color:var(--dark-green);
  }
  .btn-primary{
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover{
        background: var(--light-green);
    }
  }
`