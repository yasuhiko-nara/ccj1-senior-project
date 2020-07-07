import Checkbox from "@material-ui/core/Checkbox";
import Rating from "@material-ui/lab/Rating";
import ReviewItem from "./ReviewItem";

const Item = (props) => {
  return (
    <>
      <div className="item__container">
        <div className="left__container">
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
        <div className="right__container">
          <div className="right__conatiner__left">
            <img src={props.image} />
          </div>
          <div className="right__container__right">
            <h2 className="activity__name">{props.name}</h2>

            <div className="small__container__right">
              <div className="rating__container">
                <h3 className="margin_bottom_small">rating</h3>
                <Rating
                  name="read-only"
                  value={Math.round(Number(props.rating))}
                  readOnly
                />
                <p>{Math.round(Number(props.rating))}</p>
              </div>

              <div className="review__container">
                <h3 style={{ textAlign: "center" }}>reviews</h3>
                <div className="review__container__small">
                  {props.reviews.map((obj) => (
                    <ReviewItem
                      text={obj.text}
                      title={obj.titile}
                      rating={obj.rating}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .item__container {
            display: flex;
            width: 80%;
            margin: 0 auto;
            padding: 10px;
          }

          .left__container {
            width: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .right__conatiner__left {
            margin-right: 20px;
          }

          .right__container {
            display: flex;
            width: 90%;
          }

          .right__container__right {
            // text-align: center;
            width: 100%;
          }

          .small__container__right {
            display: flex;
            height: 80%;
          }

          .activity__name {
            margin-bottom: 20px;
            text-align: center;
          }

          .rating__container {
            text-align: center;
            width: 30%;
          }

          .review__container {
            width: 80%;
          }

          .margin_bottom_small {
            margin-bottom: 15px;
          }
          .review__container__small {
            height: 130px;
            overflow: scroll;
          }
        `}
      </style>
    </>
  );
};

export default Item;
