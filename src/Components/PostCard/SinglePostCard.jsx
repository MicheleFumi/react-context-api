import { Link } from 'react-router-dom'

export default function SinglePostCard({ post, index, url, handleRemoveTitle }) {



    return (
        <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm h-100 card-fixed-height">
                <Link to={`/recipes/${post.id}`}>

                    <img
                        src={`${url}${post.image}`}
                        className="card-img-top"
                        alt={post.title}

                    />
                </Link>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={handleRemoveTitle}
                    data-id={index}
                >
                    Rimuovi
                </button>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text card-description">{post.content}</p>
                    <div className="card-bottom">
                        <div className="mt-auto">
                            <strong>Categorie:</strong> {post.tags.join(", ")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}