import SinglePostCard from './SinglePostCard'
export default function PostList({ blogDataApi, url, handleRemoveTitle }) {

    return (
        <div className="row">
            {blogDataApi.data ? (
                blogDataApi.data.map((post, index) => (
                    <SinglePostCard post={post} key={index} url={url} handleRemoveTitle={() => handleRemoveTitle(post.id)} />

                ))
            ) : (
                <p>Nessuna ricetta trovata.</p>
            )}

        </div>
    )
}