import React from "react";
import {
  FormControl,
  InputBase,
  makeStyles,
  MenuItem,
  Select,
  withStyles,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    backGroundColor: "#ffffff",
  },
  input: {
    border: "none",
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "spaceBetween",
    alignItems: "center",
    flexDirection: "revert",
  },
  select: {
    backGroundColor: "#ffffff",
    paddingRight: "10px",
    fontSize: "13px",
    color: "#9b9b9b",
  },
}));

export default function MenuCity() {
  const city = [
    "Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Hà Nội",
    "Hải Phòng",
    "Biên Hòa",
    "Nha Trang",
    "Bình Dương",
    "Phan Thiết",
    "Hạ Long",
    "Cần Thơ",
    "Vũng Tàu",
  ];
  const classes = useStyles();
  const [selectCity, setCity] = React.useState("Hồ Chí Minh");
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <FormControl className={classes.root}>
      <LocationOnIcon
        color="disabled"
        fontSize="small"
        style={{ marginRight: "5px" }}
      />
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={selectCity}
        onChange={handleChange}
        input={<BootstrapInput />}
        className={classes.select}
      >
        {city.map((item, index) => {
          return (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
