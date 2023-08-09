import React, { useContext, useState, useRef, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Col, Button } from 'react-bootstrap';
import { AdminContext } from '../../../utils/adminContext';
import { useLocation } from 'react-router-dom';
import config from '../../../utils/config';
import { toast } from 'react-toastify';

const UpdateArticle = () => {
  const location = useLocation();
  const article = location.state?.article;
  console.log('articleupdate:', article)

  const { categories, setMessageNotification } = useContext(AdminContext)
  const [messageErreur, setMessageErreur] = useState(null);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    if (messageErreur) {
        const timeout = setTimeout(() => {
            setMessageErreur('');
        }, 3000);
        return () => clearTimeout(timeout);
    }
}, [messageErreur]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Le titre est requis'),
    content: Yup.string().required('Le contenu est requis'),
    categoryId: Yup.string().required('La catégorie est requise'),
    image: Yup.mixed().required('L\'image est requise'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const url = `${config.API_URL}/articles`;
    const articleId = article.id;

    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('content', values.content);
      formData.append('categoryId', values.categoryId);
      formData.append('userId', 2);
      formData.append('imagePath', article.image_path);

      // Vérifier si une nouvelle image a été sélectionnée
      if (values.image instanceof File) {
        formData.append('image', values.image);
      }

      const response = await fetch(`${url}/${articleId}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success === true) {
          toast.success(data.message);
          // Actualiser la page
          // window.location.reload();
        } else {
          toast.error(data.message);
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


  return (
    <Container className="d-flex p-4" style={{ minHeight: '100vh' }}>
      <div className='' style={{ width: '100%' }}>
        <Col>
          <h1 className="text-center">Modification de l'article</h1>
          {messageErreur && <p className="text-danger">{messageErreur}</p>}

          <Formik
            initialValues={{
              title: article.title,
              content: article.content,
              categoryId: article.category_id,
              image: article.image_path,
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

                  {/* Affichage de l'image sélectionnée */}
                  {
                    imageURL ? (<img src={imageURL} alt="Selected" style={{ width: "100px" }} />
                    ) : (<img src={article && article.image_path} style={{ width: "60px" }} />
                    )
                  }
                  <div className="mb-2">
                    <label htmlFor="image" className="form-label">Image :</label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                      onChange={(event) => {
                        setFieldValue('image', event.currentTarget.files[0]);
                        setImageURL(URL.createObjectURL(event.currentTarget.files[0]));
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
                  <Field style={{ minHeight: '200px' }} as="textarea" className="form-control" id="content" name="content" />
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

export default UpdateArticle;
