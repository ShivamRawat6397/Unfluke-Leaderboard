import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grow,
  Slide,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const dataSlipageZeroPercent = [
  {
    Rank: 1,
    Name: "Selling with re entr",
    "Calmar Ratio": 3.96,
    "Overall Profit": 381845,
    "Avg. Daily Profit": 319.54,
    "Win %(Day)": 0.65,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 2,
    Name: "strategy_name",
    "Calmar Ratio": 3.62,
    "Overall Profit": 268872.5,
    "Avg. Daily Profit": 216.31,
    "Win %(Day)": 0.64,
    "Price (Rs)": 500,
    Action: "Buy",
  },
  {
    Rank: 3,
    Name: "Based on premium and",
    "Calmar Ratio": 3.42,
    "Overall Profit": 255425,
    "Avg. Daily Profit": 208.51,
    "Win %(Day)": 0.64,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 4,
    Name: "strategy_name",
    "Calmar Ratio": 3.22,
    "Overall Profit": 370845,
    "Avg. Daily Profit": 303.47,
    "Win %(Day)": 0.65,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 5,
    Name: "strategy_name",
    "Calmar Ratio": 3.22,
    "Overall Profit": 370845,
    "Avg. Daily Profit": 303.47,
    "Win %(Day)": 0.65,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 6,
    Name: "Based on premium wit",
    "Calmar Ratio": 3.01,
    "Overall Profit": 135980,
    "Avg. Daily Profit": 185.77,
    "Win %(Day)": 0.49,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 7,
    Name: "strategy_name",
    "Calmar Ratio": 2.76,
    "Overall Profit": 267867.5,
    "Avg. Daily Profit": 218.49,
    "Win %(Day)": 0.6,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 8,
    Name: "Wait and trade_Save",
    "Calmar Ratio": 2.62,
    "Overall Profit": 178252.5,
    "Avg. Daily Profit": 161.9,
    "Win %(Day)": 0.63,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 9,
    Name: "iron condor",
    "Calmar Ratio": 2.44,
    "Overall Profit": 176420,
    "Avg. Daily Profit": 137.51,
    "Win %(Day)": 0.65,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 10,
    Name: "strategy_name",
    "Calmar Ratio": 2.04,
    "Overall Profit": 244555,
    "Avg. Daily Profit": 198.66,
    "Win %(Day)": 0.62,
    "Price (Rs)": "-",
    Action: "View",
  },
];

const dataSlipageZeroPointFivePercent = [
  {
    Rank: 1,
    Name: "Based on premium and",
    "Calmar Ratio": 2.02,
    "Overall Profit": 194096.05,
    "Avg. Daily Profit": 158.45,
    "Win %(Day)": 0.62,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 2,
    Name: "strategy_name",
    "Calmar Ratio": 1.98,
    "Overall Profit": 171862.74,
    "Avg. Daily Profit": 138.26,
    "Win %(Day)": 0.6,
    "Price (Rs)": 500,
    Action: "Buy",
  },
  {
    Rank: 3,
    Name: "strategy_name",
    "Calmar Ratio": 1.75,
    "Overall Profit": 264090.37,
    "Avg. Daily Profit": 216.11,
    "Win %(Day)": 0.64,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 4,
    Name: "strategy_name",
    "Calmar Ratio": 1.75,
    "Overall Profit": 264090.37,
    "Avg. Daily Profit": 216.11,
    "Win %(Day)": 0.64,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 5,
    Name: "Wait and trade_Save",
    "Calmar Ratio": 1.62,
    "Overall Profit": 124537.84,
    "Avg. Daily Profit": 113.11,
    "Win %(Day)": 0.61,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 6,
    Name: "Based on premium wit",
    "Calmar Ratio": 1.55,
    "Overall Profit": 99916.32,
    "Avg. Daily Profit": 136.5,
    "Win %(Day)": 0.48,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 7,
    Name: "Selling with re entr",
    "Calmar Ratio": 1.38,
    "Overall Profit": 254470.35,
    "Avg. Daily Profit": 212.95,
    "Win %(Day)": 0.63,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 8,
    Name: "iron condor",
    "Calmar Ratio": 1.31,
    "Overall Profit": 132699.25,
    "Avg. Daily Profit": 103.43,
    "Win %(Day)": 0.63,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 9,
    Name: "strategy_name",
    "Calmar Ratio": 1.12,
    "Overall Profit": 136226.09,
    "Avg. Daily Profit": 111.11,
    "Win %(Day)": 0.58,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 10,
    Name: "strategy_name",
    "Calmar Ratio": 1.11,
    "Overall Profit": 260759.53,
    "Avg. Daily Profit": 175.71,
    "Win %(Day)": 0.35,
    "Price (Rs)": "-",
    Action: "View",
  },
];

const dataSlipageOnePercent = [
  {
    Rank: 1,
    Name: "Based on premium and",
    "Calmar Ratio": 0.84,
    "Overall Profit": 132767.1,
    "Avg. Daily Profit": 108.38,
    "Win %(Day)": 0.6,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 2,
    Name: "strategy_name",
    "Calmar Ratio": 0.69,
    "Overall Profit": 208500.31,
    "Avg. Daily Profit": 140.5,
    "Win %(Day)": 0.35,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 3,
    Name: "Wait and trade_Save",
    "Calmar Ratio": 0.67,
    "Overall Profit": 70823.17,
    "Avg. Daily Profit": 64.33,
    "Win %(Day)": 0.6,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 4,
    Name: "iron condor",
    "Calmar Ratio": 0.64,
    "Overall Profit": 88978.5,
    "Avg. Daily Profit": 69.35,
    "Win %(Day)": 0.62,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 5,
    Name: "strategy_name",
    "Calmar Ratio": 0.59,
    "Overall Profit": 157335.75,
    "Avg. Daily Profit": 128.75,
    "Win %(Day)": 0.62,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 6,
    Name: "strategy_name",
    "Calmar Ratio": 0.59,
    "Overall Profit": 157335.75,
    "Avg. Daily Profit": 128.75,
    "Win %(Day)": 0.62,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 7,
    Name: "Based on premium wit",
    "Calmar Ratio": 0.57,
    "Overall Profit": 63852.65,
    "Avg. Daily Profit": 87.23,
    "Win %(Day)": 0.48,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 8,
    Name: "strategy_name",
    "Calmar Ratio": 0.53,
    "Overall Profit": 194687.52,
    "Avg. Daily Profit": 131.19,
    "Win %(Day)": 0.35,
    "Price (Rs)": "-",
    Action: "View",
  },
  {
    Rank: 9,
    Name: "strategy_name",
    "Calmar Ratio": 0.44,
    "Overall Profit": 74852.97,
    "Avg. Daily Profit": 60.22,
    "Win %(Day)": 0.57,
    "Price (Rs)": 500,
    Action: "Buy",
  },
  {
    Rank: 10,
    Name: "Selling with re entr",
    "Calmar Ratio": 0.31,
    "Overall Profit": 127095.7,
    "Avg. Daily Profit": 106.36,
    "Win %(Day)": 0.61,
    "Price (Rs)": "-",
    Action: "View",
  },
];

const LeaderboardPage = () => {
  const [visibleRows, setVisibleRows] = useState(5);
  const [anchorEl, setAnchorEl] = useState(null);
  const [slippage, setSlippage] = useState(0);
  const [data, setData] = useState(dataSlipageZeroPercent);
  const [showMore, setShowMore] = useState(false);
  const [slideDirection, setSlideDirection] = useState("left");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const loadData = (slippage) => {
    switch (slippage) {
      case 0:
        setData(dataSlipageZeroPercent);
        break;
      case 0.5:
        setData(dataSlipageZeroPointFivePercent);
        break;
      case 1:
        setData(dataSlipageOnePercent);
        break;
      default:
        setData(dataSlipageZeroPercent);
        break;
    }
  };

  const handleSlippageChange = (slippage) => {
    setSlideDirection("right");
    setTimeout(() => {
      setSlippage(slippage);
      loadData(slippage);
      setSlideDirection("left");
    }, 500);
    setAnchorEl(null); // Close the dropdown menu after selection
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleRows = () => {
    setShowMore(!showMore);
    setVisibleRows(showMore ? 5 : data.length);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Leaderboard
        </Typography>
        <Typography variant="h6" component="p" color="textSecondary">
          Check out the top backtest results
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
        elevation={6}
        sx={{
          borderRadius: "10px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {data.length > 0 &&
                Object.keys(data[0]).map((header, index) => (
                  <StyledTableCell key={index}>{header}</StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <Slide
            direction={slideDirection}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <TableBody>
              {data.slice(0, visibleRows).map((row, index) => (
                <Grow in={true} key={index}>
                  <TableRow hover>
                    {Object.values(row).map((value, i) => (
                      <TableCell key={i} align="left">
                        {value}
                      </TableCell>
                    ))}
                  </TableRow>
                </Grow>
              ))}
            </TableBody>
          </Slide>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          padding: "0 20px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          aria-controls="simple-menu"
          aria-haspopup="true"
          endIcon={<ArrowDropDown />}
        >
          Slippage ({slippage}%)
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleSlippageChange(0)}>0%</MenuItem>
          <MenuItem onClick={() => handleSlippageChange(0.5)}>0.5%</MenuItem>
          <MenuItem onClick={() => handleSlippageChange(1)}>1%</MenuItem>
        </Menu>
        <Button
          variant="outlined"
          color="primary"
          onClick={toggleRows}
          endIcon={showMore ? <ArrowDropUp /> : <ArrowDropDown />}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Box width={isMobile ? "100%" : "50%"}>
          <LineChart data={data} />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Box width={isMobile ? "100%" : "50%"}>
          <DonutChart data={data} />
        </Box>
      </Box>
    </Container>
  );
};

export default LeaderboardPage;
