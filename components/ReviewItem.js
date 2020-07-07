const ReviewItem = (props) => {
  return (
    <>
      <div className="review__item">
        <div className="left__container">
          title
          {props.title}
          rating
          {props.rating}
        </div>
        <div className="right__container">{props.text}</div>
      </div>
      <style jsx>{`
        .review__item {
          hight: 200px;
          display: flex;
        }
        .left__container {
        }
        .right__container {
        }
      `}</style>
    </>
  );
};

export default ReviewItem;
