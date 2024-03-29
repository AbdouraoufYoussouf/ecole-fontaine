import React, { useContext, useEffect, useState } from 'react';
import Search from '../../../component/Search';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { AdminContext } from '../../../utils/adminContext';
import { Link } from 'react-router-dom';
import ModalConfirmation from '../users/ModalConfirmation';
import { deleteArticle } from '../../../services/admin/articleService';
import '../../../styles/dashbord/articlePage.css';

const ArticlePage = () => {
    const { articles, setMessageNotification, messageNotification } = useContext(AdminContext);
    const [data, setData] = useState([]);
    const [showModalDeleteArticle, setShowModalDeleteArticle] = useState(false);
    const [editIdArticle, setEditIdArticle] = useState(null);

    const handleModalDeleteArticleOpen = (ArticleId) => {
        setEditIdArticle(ArticleId);
        setShowModalDeleteArticle(true);
    };

    const handleModalDeleteArticleClose = () => {
        setShowModalDeleteArticle(false);
    };

    const ConfirmDeleteArticle = (articleId) => {
        deleteArticle(articleId, setMessageNotification);
    };

    useEffect(() => {
        setData(articles);
    }, [articles, messageNotification]);

    return (
        <div className="d-flex flex-column gap-3">
            <div className="header-wrapper">
                <div className="header-content">
                    <Search
                        placeholder="article"
                        data={articles}
                        setData={setData}
                        searchKey="title"
                        model="article"
                    />
                    <Link to="/admin/articles/new" className="btn btn-primary form-control">
                        Ajouter un article
                    </Link>
                </div>
            </div>
            <div className="table-wrapper">
                <div className="card-container">
                    {data?.map((article, index) => {
                        const formattedTitle = article.title.replace(/\s+/g, '_');
                        return (
                            <div key={index} className="card article-card">
                                <img className="card-img-top article-image" src={article.image_path ? article.image_path : "/img/photo1.jpg"} alt="Card image cap" />
                                <div className="card-body">
                                    <p className="article-title">{article.title}</p>
                                    <div className="action-icons">
                                        <Link to={`/admin/articles/edit`} state={{ article: article }}>
                                            <FaEdit className="action-icon edit-icon" size={22} />
                                        </Link>
                                        <FaTrash onClick={() => handleModalDeleteArticleOpen(article.id)} className="action-icon trash-icon text-danger" size={22} />
                                        <Link to={`/admin/article/${article.id}`} state={{ article: article }}>
                                            <FaEye className="action-icon view-icon text-secondary" size={22} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Modal pour editer un commentaire */}
                <ModalConfirmation handleConfirm={ConfirmDeleteArticle} id={editIdArticle} show={showModalDeleteArticle} handleModalClose={handleModalDeleteArticleClose} />
            </div>
        </div>
    );
};

export default ArticlePage;
