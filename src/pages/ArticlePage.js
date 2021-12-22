import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import ArticleList from '../components/ArticleList';
import CommentsList from '../components/CommentsList';
import UpvoteSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = () => {
    const { articleName } = useParams();
    const article = articleContent.find(article => article.name === articleName);

    const [articleInfo, setArticleInfo] = useState({ upvootes: 0, comments: []});

    useEffect(() => {
        const fetchData = async() => {
            const result = await fetch(`/api/articles/${articleName}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
        // setArticleInfo({upvotes: Math.ceil(Math.random() * 10)});        
    },[articleName])

    const otherArticles = articleContent.filter(article => article.name !== articleName);

    if (!article) return (<h1> Article not found!</h1>);
    return (
        <>
            <h1>This is an {article.title} article</h1>
            <UpvoteSection articleName={articleName} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h3>Comments: </h3>
            <CommentsList comments={articleInfo.comments}/>
            <AddCommentForm articleName={articleName} setArticleInfo={setArticleInfo}/>
            <h3>Other Articles:</h3>
            <ArticleList articles={otherArticles}></ArticleList>
        </>
    );
}

export default ArticlePage;