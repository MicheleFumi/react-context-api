import { Link } from "react-router-dom"

const tagList = ["Dolci al sale", "Primi piatti", "Ricette cannibali", "Ricette nucleari",]

export default function InputForm({ handleFormSubmit, handleFormField, handleChecks, formData }) {


    return (
        <>
            {/* Card per il form */}

            <div className="card shadow-sm mb-4 mt-4">
                <div className="card-header">
                    <h3>Aggiungi una nuova ricetta</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleFormSubmit}>
                        {/* Input per titolo e immagine */}
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Titolo</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="form-control"
                                placeholder="Inserisci un titolo"
                                value={formData.title}
                                onChange={handleFormField}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Immagine</label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                className="form-control"
                                placeholder="URL immagine"
                                value={formData.image}
                                onChange={handleFormField}
                            />
                        </div>
                        {/* Input per descrizione */}
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Descrizione</label>
                            <textarea
                                id="content"
                                name="content"
                                className="form-control"
                                placeholder="Inserisci una descrizione"
                                rows="3"
                                value={formData.content}
                                onChange={handleFormField}
                            ></textarea>
                        </div>
                        {/* Checkbox per categorie */}
                        <div className="mb-3">
                            <h5 className="form-label">Categorie</h5>
                            <div className="row">
                                {tagList.map((tag, index) => (
                                    <div key={index} className="col-6 col-md-3">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name={tag}
                                                value={tag}
                                                checked={formData.tags.includes(tag)}
                                                onChange={handleChecks}
                                                id={`tag-${index}`}
                                            />
                                            <label className="form-check-label" htmlFor={`tag-${index}`}>
                                                {tag}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link to='/recipes' className="btn btn-primary text-center" >Aggiungi e torna alle ricette</Link>
                    </form>
                </div>
            </div>
        </>
    )
}