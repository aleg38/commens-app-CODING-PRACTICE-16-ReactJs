import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], textInput: '', textareaInput: ''}

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onClickAddComment = event => {
    event.preventDefault()
    const {textInput, textareaInput} = this.state
    const initialBackgroundClassNames = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newUserDetails = {
      id: uuidv4(),
      name: textInput,
      comment: textareaInput,
      date: new Date(),
      isLiked: false,
      initialClassNames: initialBackgroundClassNames,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newUserDetails],
      textInput: '',
      textareaInput: '',
    }))
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onChangeTextareaInput = event => {
    this.setState({textareaInput: event.target.value})
  }

  render() {
    const {textInput, textareaInput, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <div>
            <h1 className="main-heading">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.onClickAddComment}>
              <input
                type="text"
                onChange={this.onChangeTextInput}
                className="text-input"
                value={textInput}
                placeholder="Your Name"
              />
              <textarea
                rows="8"
                cols="45"
                value={textareaInput}
                onChange={this.onChangeTextareaInput}
                className="textarea-input"
                placeholder="Your Comment"
              />
              <button className="add-comment-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
        </div>
        <hr className="horizontal-line" />
        <p className="no-of-comments">
          <span className="count-style">{commentsList.length}</span> Comments
        </p>
        <ul className="users-list-container">
          {commentsList.map(each => (
            <CommentItem
              key={each.id}
              eachUserDetails={each}
              deleteComment={this.deleteComment}
              toggleIsLiked={this.toggleIsLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
