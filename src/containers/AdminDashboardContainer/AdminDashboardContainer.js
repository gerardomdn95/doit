import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PaintingForm } from '../../components/PaintingForm';
import { createPainting } from '../../modules/firebaseUsage';
import Swal from 'sweetalert2';

const AdminDashboardContainer = () => {

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [paintingValues, setPaintingValues] = useState({
    title: '',
    description: '',
    price: null,
    img: '',
  });

  const handleChange = (event) => {
    setPaintingValues({ ...paintingValues, [event.target.id]: event.target.value });
  }

  const handleCreatePainting = (e) => {
    e.preventDefault();
    setLoading(true);

    createPainting(paintingValues)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Pintura Creada'
        }).then(() => {
          history.push('/');
        });
      })
      .catch((err) => {
        setLoading('');
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.message,
        });
      })
  }

  return (
    <div className="container">
      <PaintingForm
        loading={loading}
        handleCreatePainting={handleCreatePainting}
        handleChange={handleChange} />
    </div>
  );
};

export default AdminDashboardContainer;