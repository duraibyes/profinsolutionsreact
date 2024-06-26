import { Typography } from "@mui/material";
import { useGetLoanCategory } from "../../../services/LoanCategoryApi";
import BusinessLoan from "./BusinessLoan";
import Loader from "../../Loader";
import ProfessionalLoan from "./ProfessionalLoan";
import PersonalLoan from "./PersonalLoan";
import HomeLoan from "./HomeLoan";
import MortgageLoan from "./MortgageLoan";
import MedicalEquipmentLoan from "./MedicalEquipmentLoan";
import IndustryMachinaryLoan from "./IndustryMachinaryLoan";
import SmeLoan from "./SmeLoan";
interface LoanTabContentProps {
  activeSlug: string;
}

const LoanTabContent: React.FC<LoanTabContentProps> = ({ activeSlug }) => {
  const { isFetching, error, data } = useGetLoanCategory(activeSlug);

  console.log("  isFetching info ", isFetching, data);
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
      case "professional-loan":
        renderedComponent = <ProfessionalLoan info={data?.info} />;
        break;
      case "personal-loan":
        renderedComponent = <PersonalLoan info={data?.info} />;
        break;
      case "home-loan":
        renderedComponent = <HomeLoan info={data?.info} />;
        break;
      case "mortgage-loan":
        renderedComponent = <MortgageLoan info={data?.info} />;
        break;
      case "medical-equipment-loan":
        renderedComponent = <MedicalEquipmentLoan info={data?.info} />;
        break;
      case "industry-machinery-loan":
        renderedComponent = <IndustryMachinaryLoan info={data?.info} />;
        break;
      case "sme-loan":
        renderedComponent = <SmeLoan info={data?.info} />;
        break;
      // Add more cases as needed for other slugs
      default:
        renderedComponent = (
          <Typography>Fetching Error on {activeSlug}</Typography>
        );
        break;
    }
  }

  return renderedComponent;
};
export default LoanTabContent;
