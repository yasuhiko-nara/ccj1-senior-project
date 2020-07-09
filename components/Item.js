import Checkbox from "@material-ui/core/Checkbox";
import Rating from "@material-ui/lab/Rating";
import ReviewItem from "./ReviewItem";

const Item = (props) => {
  return (
    <>
      <div className="item__container">
        <div className="left__container">
          <h2 className="activity__name">{props.name}</h2>
          <div className="left__small__container">
            <img src={props.image} />

            <div className="rating__container">
              <h3 className="margin_bottom_small">rating</h3>
              <Rating
                name="read-only"
                value={Math.round(Number(props.rating))}
                readOnly
              />
              <p>{Math.round(Number(props.rating))}</p>
            </div>
          </div>
        </div>
        <div className="right__container">
          <div className="review__container">
            <p style={{ textAlign: "center", marginBottom: "20px" }}>RRVIEWS</p>
            <div className="review__container__small">
              {props.reviews.map((obj) => (
                <ReviewItem
                  text={obj.text}
                  title={obj.title}
                  rating={obj.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .item__container {
            display: flex;
            width: 80%;
            height: 300px;
            margin: 0 auto;
            padding: 10px;
            border: thick solid #9baec8;
            border-radius:10px;
          }

          .left__container {
            width: 35%;
            position: relative;
          }

          .right__container {
            width: 60%;
          }

          .left__small__container {
            display: flex;
            width:100%;
            justify-content: space-around;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            -webkit- transform: translateY(-50%) translateX(-50%);
          }

          .activity__name {
            margin-bottom: 20px;
            text-align: center;
          }

          .rating__container {
            text-align: center;
          }

          .review__container {
            width: 100%;
            height: 100%;
          }

          .margin_bottom_small {
            margin-bottom: 15px;
          }
          .review__container__small {
            height: 230px;
            overflow: scroll;
          }
        `}
      </style>
    </>
  );
};

export default Item;
