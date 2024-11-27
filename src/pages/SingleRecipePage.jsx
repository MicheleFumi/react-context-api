import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function SingleRecipe() {
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const { id } = useParams()
    const url = `http://localhost:3000/post/${id}`


    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    if (!data.data) {
                        // redirct to a 404
                        navigate('/404')

                    } else {
                        // check if there are no errors 
                        // then set the pizza
                        setPost(data.data)


                    }


                })
                .catch(err => {
                    console.log(err);

                })
        },

        [])



    return (
        <>
            {post ? (


                <div className="container">
                    <section className="pizza_details">
                        <div className="container">
                            <div className="card my-5 border-0 rounded-4 shadow-lg">
                                <img className="card-img-top-detail rounded-4 img-height" src={`http://localhost:3000/${post.image}`} alt="" />
                                <div className="card-body">
                                    <h3>{post.title} </h3>
                                    <div>
                                        <p>
                                            {post.content}
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <div className="tags">{post.tags.join(", ")} </div>
                                            <Link to='/recipes' className="btn btn-primary" >Torna alle ricette</Link>



                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>




                    </section>

                </div>
            ) : (
                <div className="container">
                    <h1 className="py-4">Caricamanto post...</h1>
                </div>
            )}


        </>




    )
} 