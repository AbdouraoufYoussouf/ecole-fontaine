import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../utils/authContext';
import jwtDecode from 'jwt-decode';
import { login } from '../../services/admin/userService';

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser, setIsAdmin, setIsLoggedIn, isLoggedIn } = useContext(AuthContext)

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
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
      const data = await login(values); // Appel à la méthode login

      if (data) {
        const { token, user } = data;

        // Décoder le token pour obtenir les informations de l'utilisateur
        const decodedToken = jwtDecode(token);

        // Stocker les informations de l'utilisateur et le token dans l'état
        setUser({
          id: decodedToken.user.id,
          email: decodedToken.user.email,
          name: decodedToken.user.name,
          role: decodedToken.user.role
        });

        // Stocker le token dans le stockage local (localStorage)
        localStorage.setItem('token', token);
        setIsLoggedIn(true)

        
        // Rediriger vers une page après la connexion réussie
        if (user?.role === "Admin") {
          navigate('/admin');
          setIsAdmin(true)
          //console.log('admin:',user.role)
        }
        navigate('/');
      } else {
        // La réponse du serveur n'est pas valide
        console.error('Erreur d\'authentification');
        toast.error('Une erreur s\'est produite. Veuillez réessayer.', { autoClose: 2000 });
      }
    } catch (error) {
      // Une erreur s'est produite lors de la connexion
      console.error('Erreur lors de la connexion :', error);
      toast.error('Une erreur s\'est produite. Veuillez réessayer.', { autoClose: 2000 });
    }

    setSubmitting(false);
  };



  return (
    <Container className="d-flex justify-content-center mt-5" style={{ minHeight: '100vh' }}>
      <div style={{ width: '400px' }}>
        <Col>
          <h2 className="text-center mb-4">Connexion</h2>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
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
                  {isSubmitting ? 'Connexion en cours...' : 'Se connecter'}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </div>
    </Container>
  );
};

export default LoginForm;
