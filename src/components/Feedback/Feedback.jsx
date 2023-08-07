import styles from "./Feedback.module.css";
import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    const feedback = { review: review, stars: rating };
    console.log(feedback);
    // You can perform further actions here, such as sending the feedback to a server.
  };

  return (
    <div className={styles.feedbackEncompass}>
      <div className={styles.title}>
        <h1 className={styles.heading}>Feedback.</h1>
        <h3 className={styles.subheading}>
          We value your opinion. Please share what you feel.
        </h3>
      </div>

      <div className={styles.form}>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <h1
              key={star}
              className={styles.star}
              onClick={() => handleRatingClick(star)}
              style={{ opacity: `${rating >= star ? "1" : "0.3"}` }}
            >
              ⭐
            </h1>
          ))}
        </div>

        <div className={styles.review}>
          <textarea
            className="form-control"
            rows="5"
            id="review"
            name="review"
            placeholder="Write your review here..."
            style={{ height: "15rem" }}
            value={review}
            onChange={handleReviewChange}
          ></textarea>
        </div>

        <div className={styles.submit}>
          <h3 className={styles.send} onClick={handleSubmit}>
            Send
          </h3>
        </div>
      </div>
    </div>
  );
};

export { Feedback };
