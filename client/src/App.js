import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import DeleteArticle from './components/DeleteArticle';
import Article from './components/Article';

function App() {

  const [posts,setPosts]=React.useState([]);
  React.useEffect(()=>{
    axios
    .get(`https://crud-blog-app-mern.herokuapp.com/articles`)
    .then(res=>setPosts(res.data))
    .catch(err=>console.log(err));
  })

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Articles posts={posts}/>} />
        <Route path='/article/:id' element={<Article posts={posts}/>} />
        <Route path='/addArticle' element={<AddArticle posts={posts}/>} />
        <Route path='/deleteArticle/:id' element={<DeleteArticle posts={posts}/>} />
        <Route path='/editArticle/:id' element={<EditArticle posts={posts}/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
