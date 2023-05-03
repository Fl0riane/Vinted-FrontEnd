import { Link } from "react-router-dom";
// import axios from "axios";
// const [data, setData] = useState();
// const [IsLoading, setIsLoading] = useState();

const Home = () => {
  const id = 123456;
  return (
    <div>
      <Link to={`/offer/${id}`}>ALLER SUR OFFER</Link>
    </div>
  );
};

export default Home;
