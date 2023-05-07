import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <section className="container">
      <h2 className="notfound">Page Not Found</h2>
      <a onClick={() => navigate("/")} className="primary-btn btn">
        Home
      </a>
    </section>
  );
}
