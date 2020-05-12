import React from 'react';
import FadeIn from 'react-fade-in';

const PaintingForm = ({ loading, handleCreatePainting, handleChange }) => {

  return (
    <main className="m-5">
      <FadeIn>
        <div className="card">
          <h5 className="card-header">Agregar pintura</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">Título</label>
                <input type="text" className="form-control" id="title" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="price">Precio</label>
                <input type="number" min="0" className="form-control" id="price" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="img">Imagen</label>
                <input type="text" min="0" className="form-control" id="img" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <textarea type="text" className="form-control" id="description" onChange={handleChange} />
              </div>
              <div className="d-flex justify-content-end">
                {loading
                  ? <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  : <button type="submit" onClick={handleCreatePainting} className="btn btn-outline-success">Agregar</button>}
              </div>
            </form>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}

export default PaintingForm;