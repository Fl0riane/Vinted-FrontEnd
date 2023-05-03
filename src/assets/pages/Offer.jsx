import { useParams } from "react-router-dom";
const Offer = () => {
  const { id } = useParams();
  return (
    <div>
      <p>{`je suis offer ${id}`}</p>
    </div>
  );
};

export default Offer;
