

import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Dropdown: React.FC = () => {
  //checkbox array for subdepartment 1
  const [checked1, setChecked1] = React.useState([false, false]);

  //checkbox array for subdepartment 2
  const [checked2, setChecked2] = React.useState([false, false, false]);

  const [toggle1, setToggle1] = React.useState(false);
  const [toggle2, setToggle2] = React.useState(false);

  //checking all subdepartment at once 
  const handleChangeall1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newchecked = checked1.map(() => {
      return event.target.checked;
    });
    setChecked1(newchecked);
  };

  const handleChangeall2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newchecked = checked2.map(() => {
      return event.target.checked;
    });
    setChecked2(newchecked);
  };

  //checking one at a time
  const handleChangeval1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ch = event.target.value;
    const ind = parseInt(ch);
    const newchecked = [];
    for (let i = 0; i < checked1.length; i++) {
      if (i === ind) {
        newchecked.push(event.target.checked);
      } else newchecked.push(checked1[i]);
    }
    setChecked1(newchecked);
  };

  const handleChangeval2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ch = event.target.value;
    const ind = parseInt(ch);
    const newchecked = [];
    for (let i = 0; i < checked2.length; i++) {
      if (i === ind) {
        newchecked.push(event.target.checked);
      } else newchecked.push(checked2[i]);
    }
    setChecked2(newchecked);
  };



  const children1 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 7 }}>
      <FormControlLabel
        label="support"
        control={
          <Checkbox checked={checked1[0]} value={0} onChange={handleChangeval1} />
        }
      />
      <FormControlLabel
        label="customer_success"
        control={
          <Checkbox checked={checked1[1]} value={1} onChange={handleChangeval1} />
        }
      />
    </Box>
  );

  const children2 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 7 }}>
      <FormControlLabel
        label="graphic_design"
        control={
          <Checkbox checked={checked2[0]} value={0} onChange={handleChangeval2} />
        }
      />
      <FormControlLabel
        label="product_design"
        control={
          <Checkbox checked={checked2[1]} value={1} onChange={handleChangeval2} />
        }
      />
      <FormControlLabel
        label="web_design"
        control={
          <Checkbox checked={checked2[2]} value={2} onChange={handleChangeval2} />
        }
      />
    </Box>
  );

  const handleExpand1 = () => {
    setToggle1((prv) => !prv);
  };

  const handleExpand2 = () => {
    setToggle2((prv) => !prv);
  };

  return (
    <div className="component">
      <h1>Component 2</h1>
      <div className="drop-container">
      <div className="drop">
        {toggle1 ? (
          <IconButton aria-label="icon" onClick={handleExpand1}>
            <RemoveIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="icon" onClick={handleExpand1}>
            <AddIcon />
          </IconButton>
        )}

        <FormControlLabel
          label="customer_service"
          control={
            <Checkbox
              checked={checked1[0] && checked1[1]}
              onChange={handleChangeall1}
            />
          }
        />
        {toggle1 ? children1 : null}
      </div>
      <div className="drop">
          
        {toggle2 ? (
          <IconButton aria-label="icon" onClick={handleExpand2}>
            <RemoveIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="icon" onClick={handleExpand2}>
            <AddIcon />
          </IconButton>
        )}

        <FormControlLabel
          label="design"
          control={
            <Checkbox
              checked={checked2[0] && checked2[1] && checked2[2]}
              onChange={handleChangeall2}
            />
          }
        />
        {toggle2 ? children2 : null}
      </div>
      </div>
    </div>
  );
};

export default Dropdown;
