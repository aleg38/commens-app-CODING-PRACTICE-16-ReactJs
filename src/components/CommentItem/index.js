// Write your code here

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachUserDetails, toggleIsLiked, deleteComment} = props
  const {id, name, comment, date, isLiked, initialClassNames} = eachUserDetails

  const userInitial = name ? name[0].toUpperCase() : ''
  const formattedTime = formatDistanceToNow(date)
  const likeTextClassName = isLiked ? 'button active' : 'button'

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  const isLikeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="user-list-iem">
      <div className="comment-container">
        <div className={initialClassNames}>
          <p className="user-first-letter">{userInitial}</p>
        </div>

        <div className="username-time-container">
          <p className="name">{name}</p>
          <p className="time">{formattedTime}</p>
          <p className="description">{comment}</p>
        </div>
      </div>

      <div className="like-and-delete-container">
        <div className="like-container">
          <img src={isLikeImgUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>

        <button
          type="button"
          className="delete-icon-btn"
          data-testId="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}
export default CommentItem
