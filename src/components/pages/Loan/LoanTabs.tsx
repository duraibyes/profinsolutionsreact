import { Tab, Tabs, Theme } from "@mui/material";
import { useEffect, useState } from "react";
import LoanTabContent from "./LoanTabContent";
import { makeStyles } from "@mui/styles";

import {
  LoanCategoryProps,
  useLoanCategory,
} from "../../../services/LoanCategoryApi";

const useStyles = makeStyles((theme: Theme) => ({
  tab: {
    "&.Mui-selected": {
      fontWeight: "bold", // Example: Customize the selected tab style
    },
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.primary.main, // Example: Customize the indicator color
    },
  },
}));

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

const TabLabel: React.FC<TabLabelProps> = ({ icon, label }) => {
  return (
    <div>
      <span className="loan-img">
        <img src={icon} />
      </span>
      <div className="inner-bg">{label}</div>
    </div>
  );
};

const LoanTabs = () => {

  const classes = useStyles();

  const [value, setValue] = useState({ index: 0, slug: "" });

  const { data } = useLoanCategory();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    const selectedItem = data.data ? data.data[newValue] : "";
    setValue({ index: newValue, slug: selectedItem.slug });
  };
  useEffect(() => {
    const selectedItem = data.data ? data.data[0] : "";
    setValue({ index: 0, slug: selectedItem.slug });
  }, [])
  

  return (
    <>
      <Tabs
        sx={{ marginBottom: "40px" }}
        value={value.index}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
        className={classes.tab}
      >
        {data &&
          data.data.map((item: LoanCategoryProps, index: number) => (
            <Tab
              key={item.id}
              className="main-tab"
              label=""
              icon={<TabLabel icon={item.icon_url} label={item.name} />}
              {...a11yProps(index)}
            />
          ))}
      </Tabs>
      <LoanTabContent activeSlug={value.slug} />
    </>
  );
};

export default LoanTabs;
