import { useParams, Navigate } from "react-router-dom";
import InstitutionList from "./InstitutionList";
import InstitutionDetail from "./InstitutionDetail";
import { getCategory } from "@/data/institutions";

const REMOVED_COLLEGE_CATEGORIES = new Set([
  "senior-colleges",
  "junior-colleges",
  "technical-colleges",
  "polytechnics",
  "iti",
]);

const InstitutionRouter = () => {
  const { parent = "", slug = "" } = useParams();

  // Removed college sub-category list pages — redirect to the flat colleges page.
  if (parent === "colleges" && REMOVED_COLLEGE_CATEGORIES.has(slug)) {
    return <Navigate to="/institution/colleges" replace />;
  }

  // If the slug matches a category, show the list; otherwise treat as institution detail.
  if (getCategory(slug)) return <InstitutionList />;
  return <InstitutionDetail />;
};

export default InstitutionRouter;
