import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import BussinessLoanICon from '../../../assets/money-bag.svg';
import ProfessionalLoanIcon from '../../../assets/businessman 1.svg';
import PersonalLoanIcon from '../../../assets/person 1.svg';
import HomeLoanIcon from '../../../assets/real-estate.svg';
import MortgageLoanIcon from '../../../assets/Vector.svg';
import MedicalEquipmentLoanIcon from '../../../assets/ct-scan.svg';
import IndustryMachenaryLoanIcon from '../../../assets/breakdown.svg';
import SMELoanIcon from '../../../assets/secured-loan.svg';
import LoanTabContent from "./LoanTabContent";

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}
interface TabLabelProps {
  icon: string;
  label: string;
}

const TabLabel: React.FC<TabLabelProps> = ({icon, label}) => {
  return (
    <div ><span className="loan-img"><img src={icon} /></span><div className="inner-bg">{label}</div></div>
  );
}

const LoanTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue, 'vnew alue')
    setValue(newValue);
  };

  return (
    <>
    <Tabs
      sx={{ marginBottom: '40px'}}
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons={true}
      indicatorColor="primary"
      textColor="primary"
      aria-label="scrollable force tabs example"
    >
      <Tab className="main-tab" label="" icon={<TabLabel icon={BussinessLoanICon} label="Bussiness Loan" />} {...a11yProps(0)} />
      <Tab className="main-tab" label="" icon={<TabLabel icon={ProfessionalLoanIcon} label="Professional Loan" />} {...a11yProps(1)} />
      <Tab className="main-tab" label="" icon={<TabLabel icon={PersonalLoanIcon} label="Personal Loan" />} {...a11yProps(2)} />
      <Tab className="main-tab" label="" icon={<TabLabel icon={HomeLoanIcon} label="Home Loan" />} {...a11yProps(3)} />
      <Tab className="main-tab" label="" icon={<TabLabel icon={MortgageLoanIcon} label="Mortgage Loan" />} {...a11yProps(4)} />
      <Tab className="main-tab" label="" icon={<TabLabel icon={MedicalEquipmentLoanIcon} label="Medical Equipment Loan" />} {...a11yProps(5)} />
      <Tab className="main-tab" label="" icon={<TabLabel icon={IndustryMachenaryLoanIcon} label="Industry Machinery Loan" />} {...a11yProps(6)} />
      <Tab className="main-tab" label="" icon={<TabLabel icon={SMELoanIcon} label="SME Loan" />} {...a11yProps(7)} />
    </Tabs>
    <LoanTabContent activeTab={value} />
    </>
  );
};

export default LoanTabs;
