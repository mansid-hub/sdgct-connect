import { useParams } from "react-router-dom";
import InstitutionList from "./InstitutionList";
import InstitutionDetail from "./InstitutionDetail";
import { getCategory } from "@/data/institutions";

const InstitutionRouter = () => {
  const { slug = "" } = useParams();
  // If the slug matches a category, show the list; otherwise treat as institution detail.
  if (getCategory(slug)) return <InstitutionList />;
  return <InstitutionDetail />;
};

export default InstitutionRouter;
