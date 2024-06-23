import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import LoanTabContent from "./LoanTabContent";

import { LoanCategoryProps, useLoanCategory } from "../../../services/LoanCategoryApi";


interface TabLabelProps {
  icon: string;
  label: string;
}

const TabLabel: React.FC<TabLabelProps> = ({ icon, label }) => {
  return (
    <div>
      <span className="loan-img">
        <img src={icon} alt={label} />
      </span>
      <div className="inner-bg">{label}</div>
    </div>
  );
};

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

interface TabLabelProps {
  icon: string;
  label: string;
}

const tabStyles = {
  marginBottom: "40px",
};

const selectedTabStyles = {
  fontWeight: "bold",
};

const indicatorStyles = {
  backgroundColor: "#1976d2", // Example: Customize the indicator color
};

const LoanTabs = () => {
  const [value, setValue] = useState({ index: 0, slug: "" });
  const { data } = useLoanCategory();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    const selectedItem = data ? data.data[newValue] : null;
    setValue({ index: newValue, slug: selectedItem ? selectedItem.slug : "" });
  };

  useEffect(() => {
    if (data) {
      const selectedItem = data.data ? data.data[0] : "";
      setValue({ index: 0, slug: selectedItem ? selectedItem.slug : "" });
    }
  }, [data]);
  console.log( '  data ', data)
  return (
    <>
      <Tabs
        sx={tabStyles}
        value={value.index}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
      >
        {data &&
          data.data.map((item: LoanCategoryProps, index: number) => (
            <Tab
              key={item.id}
              className="main-tab"
              label=""
              icon={<TabLabel icon={item.icon_url} label={item.name} />}
              {...a11yProps(index)}
              sx={index === value.index ? selectedTabStyles : {}}
            />
          ))}
      </Tabs>
      <LoanTabContent activeSlug={value.slug} />
    </>
  );
};

export default LoanTabs;
