import Rating from "@material-ui/lab/Rating";

const ReviewItem = (props) => {
  return (
    <>
      <div className="review__item ">
        <h3 className="review__title margin_bottom_small">{props.title}</h3>
        <div>
          <div className="up__container margin_bottom_small">
            <Rating
              name="read-only"
              value={Math.round(Number(props.rating))}
              readOnly
            />
          </div>
          <div className="down__container margin_bottom_small">
            {props.text}
          </div>
        </div>
      </div>
      <style jsx>{`
        .review__item {
          padding: 5px;
          margin-bottom: 20px;
          border: thick solid #9baec8;
        }

        .review__title {
          text-align: center;
        }

        .margin_bottom_small {
          margin-bottom: 10px;
        }

        .up__container {
          width: 23%;
          margin: 0 auto;
        }
        .down__container {
          padding: 5px;
          line-height: 1.2rem;
          letter-spacing: 0.2rem;
        }
      `}</style>
    </>
  );
};

export default ReviewItem;
