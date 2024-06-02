import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import BussinessLoanICon from '../../../assets/money-bag.svg';
import ProfessionalLoanIcon from '../../../assets/businessman 1.svg';
import PersonalLoanIcon from '../../../assets/person 1.svg';
import HomeLoanIcon from '../../../assets/real-estate.svg';
import MortgageLoanIcon from '../../../assets/Vector.svg';
import MedicalEquipmentLoanIcon from '../../../assets/ct-scan.svg';
import IndustryMachenaryLoanIcon from '../../../assets/breakdown.svg';
import SMELoanIcon from '../../../assets/secured-loan.svg';


function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const LoanTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons={true}
      indicatorColor="primary"
      textColor="primary"
      aria-label="scrollable force tabs example"
    >
      <Tab label="Business Loan" icon={<span className="loan-img"><img src={BussinessLoanICon} /></span>} {...a11yProps(0)} />
      <Tab label="Professional Loan" icon={<span className="loan-img"><img src={ProfessionalLoanIcon} /></span>} {...a11yProps(1)} />
      <Tab label="Personal Loan" icon={<span className="loan-img"><img src={PersonalLoanIcon} /></span>} {...a11yProps(2)} />
      <Tab label="Home Loan" icon={<span className="loan-img"><img src={HomeLoanIcon} /></span>} {...a11yProps(3)} />
      <Tab label="Mortgage Loan" icon={<span className="loan-img"><img src={MortgageLoanIcon} /></span>} {...a11yProps(4)} />
      <Tab label="Medical Equipment Loan" icon={<span className="loan-img"><img src={MedicalEquipmentLoanIcon} /></span>} {...a11yProps(5)} />
      <Tab label="Industry Machinery Loan" icon={<span className="loan-img"><img src={IndustryMachenaryLoanIcon} /></span>} {...a11yProps(6)} />
      <Tab label="SME Loan" icon={<span className="loan-img"><img src={SMELoanIcon} /></span>} {...a11yProps(7)} />
    </Tabs>
  );
};

export default LoanTabs;
