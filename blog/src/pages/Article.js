import React, { useContext } from 'react'
import { AdminContext } from '../utils/adminContext'
import { Link } from 'react-router-dom'

const Article = () => {
  const { articles } = useContext(AdminContext)
  return (
    <div className='d-flex flex-column p-3'>

      <div className="">
        <h1 className="text-center m-4">Les Articles</h1>
      </div>
      <div className="row row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4 g-3">
        {
          articles && articles.map((article, index) => {
            const formattedTitle = article.title.replace(/\s+/g, '_');
            return (
              <div key={index} className="col">
                <div className="border p-1 rounded">
                  <Link className='row justify-content-center p-1 rounded-3' to={`/article/${article.id}`} state= {{ article: article }}>
                    <img style={{ height: '12rem', width: 'auto', maxWidth: '100%', borderRadius: '7px' }} src={article.image_path ? article.image_path : "/img/photo1.jpg"} className="card-img-top" alt="..." />
                  </Link>
                  <div className="card-body">
                  <h5 style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>{article.title}</h5>

                    <p style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>{article.content}</p>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default Article