const CommentsList = ({ comments }) => (
    <>
        {comments.map((comment, key) => (
            <div key={key} className="comment">
                <h4>{comment.username}</h4>
                <p>{comment.comment}</p>
            </div>
        ))}
    </>
)

export default CommentsList;