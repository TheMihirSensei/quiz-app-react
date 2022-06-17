import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import axiosInstance from "../config";

const Result = async () => {
  const [result, setResult] = useState([]);
  let { data } = await axiosInstance.get("/result/61fc06d724f2a6f6d98c1326");
  console.log("data...", data.data);
  setResult(data.data);

  return (
    <div>
      {result &&
        result.map((item, index) => {
          return <div key={index}>{item.userName}</div>;
        })}
    </div>
  );
};

export default Result;
