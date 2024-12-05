import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(params, searchParams.get("name"));
  const location = useLocation();
  console.log(location);
  return <p>User {params.id}</p>;
};

export default UserDetail;
