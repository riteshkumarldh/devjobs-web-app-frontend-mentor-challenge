// using context
import { useAppContext } from "../../context/appContext";

export default function JobDetails() {
  const { singleJob } = useAppContext();
  return <div>{singleJob[0].position}</div>;
}
