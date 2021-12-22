import React from 'react';
import ArticleList from '../components/ArticleList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticleList articles={articleContent}></ArticleList>
    </>
);

export default ArticlesListPage;