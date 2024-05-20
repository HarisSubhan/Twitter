import Header from "./Header";
import Tweets from "./Tweets";

const Content = () => {
  return (
    <>
      <div
        style={{ height: "98vh", overflowY: "scroll" }}
        className="col-lg-10 mx-auto"
      >
        <Header />
        <Tweets />
      </div>
    </>
  );
};

export default Content;
