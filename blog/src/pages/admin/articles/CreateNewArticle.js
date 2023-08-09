import React, { useContext, useState, useRef, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Col, Button } from 'react-bootstrap';
import { AdminContext } from '../../../utils/adminContext';
import { toast } from 'react-toastify';

const CreateNewArticle = () => {
  const { categories, setMessageNotification } = useContext(AdminContext)
  const [messageErreur, setMessageErreur] = useState(null);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Le titre est requis'),
    content: Yup.string().required('Le contenu est requis'),
    categoryId: Yup.string().required('La catégorie est requise'),
    image: Yup.mixed().required('L\'image est requise'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('content', values.content);
      formData.append('categoryId', values.categoryId);
      formData.append('userId', 2);
      formData.append('image', values.image);

      const response = await fetch('http://localhost:9000/articles', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success === true) {
          toast.success(data.message);
          setMessageNotification(data.message)
          
          // Actualiser la page
         // window.location.reload();
        } else {
          toast.error(data.message);
          setMessageErreur(data.message)
        }
        console.log(data);
        // Faire quelque chose avec la réponse du serveur
      } else {
        console.error('Erreur lors de la requête');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageNotification('');
    }, 4000);

    return () => clearTimeout(timeout);
  }, [messageErreur])
  

  return (
    <Container className="d-flex p-4" style={{ minHeight: '100vh' }}>
      <div  style={{ width: '100%' }}>
        <Col>
          <h1 className="text-center">Créer un nouvel article</h1>
          {messageErreur && <p className="text-danger">{messageErreur}</p>}

          <Formik
            initialValues={{
              title: '',
              content: '',
              categoryId: '',
              
              image: null,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div className="mb-2">
                  <label htmlFor="title" className="form-label">Titre :</label>
                  <Field type="text" className="form-control" id="title" name="title" />
                  <ErrorMessage name="title" component="div" className="text-danger" />
                </div>

                <div className="d-flex justify-content-between mb-2 gap-4">
                  <div className="mb-2 flex-grow-1">
                    <label htmlFor="image" className="form-label">Image :</label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                      onChange={(event) => {
                        setFieldValue('image', event.currentTarget.files[0]);
                      }}
                    />
                    <ErrorMessage name="image" component="div" className="text-danger" />
                  </div>
                 
                  <div className="mb-2 flex-grow-1">
                    <label htmlFor="categoryId" className="form-label">Catégorie :</label>
                    <Field as="select" name="categoryId" className="form-select"  >
                      <option value={''} >Sélectionnez une catégorie</option>
                      {categories.map((categ) => (
                        <option key={categ.id} value={categ.id}  >
                          {categ.category_name}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="categoryId" component="div" className="text-danger" />
                  </div>
                </div>

                <div className="mb-2">
                  <label htmlFor="content" className="form-label">Contenu :</label>
                  <Field  style={{ minHeight: '200px' }} as="textarea" className="form-control" id="content" name="content" />
                  <ErrorMessage name="content" component="div" className="text-danger" />
                </div>

                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </div>
    </Container>
  );
};

export default CreateNewArticle;
