import { Typography } from "@mui/material";
import { useGetLoanCategory } from "../../../services/LoanCategoryApi";
import BusinessLoan from "./BusinessLoan";
import Loader from "../../Loader";
interface LoanTabContentProps {
  activeSlug: string;
}

const LoanTabContent: React.FC<LoanTabContentProps> = ({ activeSlug }) => {
  const { isFetching, error, data } = useGetLoanCategory(activeSlug);

  console.log("  isFetching info ", isFetching, data);
  console.log("  error ", error);
  console.log("  activeSlug ", activeSlug);

  // Render different components based on activeSlug
  let renderedComponent = null;

  if (isFetching) {
    renderedComponent = <Loader />;
  } else if (error) {
    renderedComponent = <Typography>Error: {error.message}</Typography>;
  } else {
    switch (activeSlug) {
      case "business-loan":
        renderedComponent = <BusinessLoan info={data?.info} />;
        break;
      case "medical-equipment-loan":
        break;
      // Add more cases as needed for other slugs
      default:
        renderedComponent = <Typography>Component not found for {activeSlug}</Typography>;
        break;
    }
  }

  return renderedComponent;
};
export default LoanTabContent;
