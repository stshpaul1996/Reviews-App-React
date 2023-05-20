// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  getReview = reviewsList => {
    const {activeReview} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReview
    ]
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="review-image" />

        <p className="company-name">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeReview} = this.state
    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {activeReview} = this.state

    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    // const {activeReview} = this.state

    return (
      <div className="bg-page">
        <h1 className="heading">Reviews</h1>
        <div className="container">
          <button
            type="button"
            className="left-btn"
            onClick={this.onLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="left-arrow"
            />
          </button>
          {this.getReview(reviewsList)}
          <button
            type="button"
            className="left-btn"
            onClick={this.onRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="left-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
