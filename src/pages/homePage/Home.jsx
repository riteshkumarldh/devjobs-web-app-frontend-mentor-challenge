// components
import JobsListings from "../../components/jobslistings/JobsListings";
import SearchForm from "../../components/searchForm/SearchForm";

// scss
import "./home.scss";

export default function Home() {
  return (
    <main>
      <div className="container">
        <SearchForm />
        <JobsListings />
      </div>
    </main>
  );
}
