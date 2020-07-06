const Toppage = () => {
  return (
    <div className="top">
      <p>らくたび</p>
      <img
        src="https://www.ana.co.jp/www2/plan-book/promotions/special-fares/spring.jpg"
        alt="らくたびトップ画"
      />
      <div className="search-bar">
        <select></select>
        <button>検索する</button>
      </div>
      <style jsx>{`
        img {
          width: 100%;
        }
        .search-bar {
          margin-top: 20px;
          text-align: center;
        }
        select {
          width: 750px;
          height: 45px;
          margin-right: 10px;
        }
        button {
          height: 45px;
        }
      `}</style>
    </div>
  );
};

export default Toppage;
