import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const url = 'http://localhost:3000'
const endpoint = '/post/'

export default function PostCard() {

    const [blogDataApi, setBlogDataApi] = useState({})

    function fetchData() {
        fetch(`${url}${endpoint}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);

                setBlogDataApi(data)
            }
            )
    }
    useEffect(fetchData, [])


    function handleRemoveTitle(e) {
        e.preventDefault()

        const titleToRemove = e.target.getAttribute('data-id')
        console.log(titleToRemove);


        fetch(`${url}${endpoint}${titleToRemove}`, {
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setBlogDataApi(res)
            })

    }



    return (
        <div className="row">
            {blogDataApi.data ? (
                blogDataApi.data.map((post, index) => (
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

                ))
            ) : (
                <p>Nessuna ricetta trovata.</p>
            )}
        </div>

    )

}