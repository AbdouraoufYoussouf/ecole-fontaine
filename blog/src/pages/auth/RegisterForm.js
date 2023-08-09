import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { register } from '../../services/admin/userService';
import {  useNavigate } from 'react-router';

const RegisterForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Le nom est requis'),
    email: Yup.string().email('Adresse e-mail invalide').required('Champ obligatoire'),
    password: Yup.string()
    .required('Le mot de passe est requis')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{6,}$/,
        'Le mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule et un chiffre'
    ),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await register(values);
      console.log('reponde',response)
      if (response.success===true) {
        // L'inscription s'est déroulée avec succès
        navigate("/login") // Redirection vers la page de connexion
        toast.success('Inscription Réussi veillez-vous connecter !', { autoClose: 2000 });
      } else {
        // L'inscription a échoué
        toast.error(response.message, { autoClose: 2000 });
      }
    } catch (error) {
      // Une erreur s'est produite lors de l'inscription
      console.error('Erreur lors de l\'inscription :', error);
      toast.error('Une erreur s\'est produite. Veuillez réessayer.', { autoClose: 2000 });
    }
    setSubmitting(false);
  };

  return (
    <Container className="d-flex justify-content-center mt-5" style={{ minHeight: '100vh' }}>
      <div style={{ width: '400px' }}>
        <Col>
          <h2 className="text-center mb-4">Inscription</h2>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Adresse e-mail :</label>
                  <Field type="name" className="form-control" id="name" name="name" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Adresse e-mail :</label>
                  <Field type="email" className="form-control" id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mot de passe :</label>
                  <Field type="password" className="form-control" id="password" name="password" />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>

                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Inscription en cours...' : 'S\'inscrire'}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </div>
    </Container>
  );
};

export default RegisterForm;
