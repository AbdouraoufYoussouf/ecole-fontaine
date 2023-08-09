import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FaSave, } from 'react-icons/fa';
import { AdminContext } from '../../../utils/adminContext';
import { updateComment } from '../../../services/admin/commentService';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../utils/authContext';


const CommentEditForm = ({ commentId,userId, comment,setShowEditForm }) => {
    const { setMessageNotification } = useContext(AdminContext)
    // const { user } = useContext(AuthContext)
    //console.log(user)

    const handleSubmit = async (values, { setSubmitting }) => {
        // Effectuer les actions nécessaires avec les valeurs mises à jour
        const updatedComment = {
            userId: userId,
            content: values.comment
        }
        const response = await updateComment(commentId, updatedComment)
        if (response.success === true) {
            toast.success(response.message, {
                autoClose: 500, 
              });
            setMessageNotification(response.message)
            setShowEditForm(false)
        } else {
            toast.error(response.message)
        }
        setSubmitting(false);
    };

    const validationSchema = Yup.object().shape({
        comment: Yup.string().required('Le commentaire est requis'),
    });


    return (
        <Formik
            initialValues={{ comment: comment.comment }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form className='d-flex flex-column align-item-start '>
                    <Field
                        as="textarea"
                        name="comment"
                        style={{
                            resize: 'vertical',outline: 'none',padding: '2px',
                            backgroundColor: 'transparent',border:'none',cursor:'pointer'
                        }}
                    
                    />
                    <ErrorMessage name="comment" component="div" className="text-danger" />

                    <button className='btn ' type="submit" disabled={isSubmitting}>
                        <FaSave className="action-icon  text-primary " style={{ cursor: 'pointer',  }} size={22} />
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default CommentEditForm;
