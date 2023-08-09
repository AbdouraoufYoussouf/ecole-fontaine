import React, {  useContext, useEffect, useState } from 'react';
import { Modal, Button, Form, Toast } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AdminContext } from '../../../utils/adminContext';
import { toast } from 'react-toastify';
import { addCategory } from '../../../services/admin/categoryService';

const ModalEditCategory = ({ showModal,categoryData, handleModalClose }) => {
    const { setMessageNotification} = useContext(AdminContext)

    const [messageErreur, setMessageErreur] = useState(null);

    // Reinitialiser les variable des messages 3 secondes apres l'envoie du formulaire
    useEffect(() => {
        if (messageErreur) {
          const timeout = setTimeout(() => {
            setMessageErreur('');
          }, 3000);
      
          return () => clearTimeout(timeout);
        }
      }, [messageErreur]);
      

    const validationSchema = Yup.object().shape({
        categoryName: Yup.string().required('Le nom du category est requis'),
    });

    const handleSubmit = async (values, { resetForm }) => {
       const response = await addCategory(values);
       if(response.success==true){
        toast.success(response.message)
        resetForm()
        handleModalClose()
        setMessageNotification(response.message)
       }else{
        toast.error(response.message)
        setMessageErreur(response.message)
       }
      };

    return (
        <Modal show={showModal} onHide={handleModalClose} >
            <Modal.Header closeButton style={{ padding: '0.1rem' }}>
                <Modal.Title>Ajouter un Category</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: '1rem' }}>
                {messageErreur && <p className="text-danger">{messageErreur}</p>
                }
                <Formik
                    initialValues={{ categoryName: categoryData?categoryData.category_name:''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formCategory">
                                <Form.Label>Nom du Category</Form.Label>
                                <Field type="text" name="categoryName" as={Form.Control} />
                                <ErrorMessage name="categoryName" component="div" className="text-danger" />
                            </Form.Group>
                            
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <Button variant="secondary" onClick={handleModalClose}>Annuler</Button>
                                <Button variant="primary" type="submit">Enrégistrer</Button>
                            </div>
                        </Form>
                    )}
                </Formik>

            </Modal.Body>

        </Modal>

    )
}

export default ModalEditCategory