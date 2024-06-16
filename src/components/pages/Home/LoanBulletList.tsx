import { Box, Typography } from "@mui/material";
import ListIcon from "../../../assets/send-message 5.svg";
import { LoanCategoryProps, useLoanCategory } from "../../../services/LoanCategoryApi";

const LoanBulletList = () => {
  const { isFetching, error, data } = useLoanCategory();
  return (
    <Box className=" flex w-100 flex-row flex-wrap py-20" sx={{ gap: "10px" }}>
      {!error &&
        data &&
        data.data.map((item: LoanCategoryProps) => (
          <Box className="flex items-center w-45" key={item.id}>
            <img src={ListIcon} className="pr-10 w-25px" />
            <Typography>{item.name}</Typography>
          </Box>
        ))}
    </Box>
  );
};

export default LoanBulletList;
