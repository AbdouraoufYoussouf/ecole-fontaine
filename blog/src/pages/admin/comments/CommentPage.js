import React, { useContext, useEffect, useState } from 'react'
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { AdminContext } from '../../../utils/adminContext';
import { deleteComment } from '../../../services/admin/commentService';
import CommentEditForm from './EditComment';
import "../../../styles/dashbord/commentPage.css";


const CommentPage = () => {
    const [data, setData] = useState([])
    const { commentsArticles, setMessageNotification } = useContext(AdminContext)

    const [showEditForm, setShowEditForm] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(null);

    const handleDeleteClick = (commentId) => {
        // Afficher les icônes de confirmation pour le commentaire spécifique
        setShowConfirmation(commentId);
    };

    const handleConfirmClick = async (commentId) => {
        const response = await deleteComment(commentId)
        setMessageNotification(response.message)
        setShowConfirmation(false);
    };

    const handleCancelClick = () => {
        // Masquer les icônes de confirmation
        setShowConfirmation(false);
    };
    const handleEditClick = (commentId) => {
        // Masquer les icônes de confirmation
        setShowEditForm(commentId);
    };


    useEffect(() => {
        setData(commentsArticles)
    }, [showConfirmation, commentsArticles, showEditForm])

    return (
        <div className="d-flex flex-column gap-3 pt-2">
            
            <div className='d-flex flex-column gap-3 px-4'>
                { data && data?.map((article, index) => (
                    <div key={index} className="d-flex flex-column flex-wrap gap-3 justify-content-start">
                        <div className='d-flex align-items-center gap-2 border-bottom'>
                            <h4>{article.title} </h4><span>({article?.comments.length})commentaires</span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                            {
                                article.comments.length > 0 ? article.comments.map((comment, inde) => (
                                    <div key={inde} className="card comment-card" >
                                        {
                                            showEditForm === comment.commentId ? (<CommentEditForm commentId={comment.commentId} userId={comment.userId} comment={comment} setShowEditForm={setShowEditForm} />) :
                                                (

                                                    <div className="d-flex px-2 flex-column justify-content-between">
                                                        <span className="card-text font-bold">{comment.comment}</span>
                                                        <div className='row '>
                                                            <span className="card-text text-center comment-author" >Auteur : {comment.userName}</span>
                                                        </div>
                                                    </div>
                                                )

                                        }
                                        <div className="d-flex gap-4 border p-1 m-0 w-100 justify-content-between">
                                            <div>
                                                {
                                                    showEditForm === comment.commentId ? (

                                                        <FaTimes
                                                            className="action-icon text-danger"

                                                            size={22}
                                                            onClick={() => setShowEditForm(false)} />
                                                    ) : (
                                                        <FaEdit onClick={() => handleEditClick(comment.commentId)} className="action-icon  text-primary " size={22} />
                                                    )
                                                }
                                            </div>
                                            <div className='d-flex justify-content-around align-items-center gap-3'>
                                                {showConfirmation === comment.commentId ? (
                                                    <>
                                                        <FaCheck
                                                            className="action-icon text-success"

                                                            size={22}
                                                            onClick={() => handleConfirmClick(comment.commentId)}
                                                        />
                                                        <FaTimes
                                                            className="action-icon text-danger"

                                                            size={22}
                                                            onClick={handleCancelClick}
                                                        />
                                                    </>
                                                ) : (
                                                    <FaTrash
                                                        className="action-icon text-danger"

                                                        size={22}
                                                        onClick={() => handleDeleteClick(comment.commentId)}
                                                    />
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                )) : (<span className='text-secondary'>Pas de commentaire pour cet article</span>)
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentPage