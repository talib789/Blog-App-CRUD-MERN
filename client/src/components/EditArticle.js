import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

function EditArticle() {

  const {id}=useParams();
  
  const navigate=useNavigate();

  const [title,setTitle]=useState("");
  const [article,setArticle]=useState("");
  const [authorName,setAuthorName]=useState("");

  // const [posts,setPosts]=React.useState([]);

  React.useEffect(()=>{
    axios
    .get(`https://crud-blog-app-mern.herokuapp.com/articles/${id}`)
    .then(res=>{
      setTitle(res.data.title);
      setArticle(res.data.article);
      setAuthorName(res.data.authorName);
    })
    .catch(err=>console.log(err));
  },[])

  const changeOnClick=()=>{
    axios.put(`https://crud-blog-app-mern.herokuapp.com/articles/update/${id}`,{title,article,authorName})
    .then(res=>console.log('Updated Successfullt'))
    .catch(err=>console.log(err));
    navigate("/");
  }

  return (
    <EditArticleContainer>
      <div className='container'>
                <h1>Edit Article</h1>
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
                    <button type="submit" className="btn btn-primary">Edit Article</button>
                </form>
            </div>
    </EditArticleContainer>
  )
}

export default EditArticle

const EditArticleContainer = styled.div`
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