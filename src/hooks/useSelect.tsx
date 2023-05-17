import { useState } from "react";

const useSelect = () => {
  const [currentValue, setCurrentValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value: string) => {
    setCurrentValue(value);
  };
  const handleChange = (value: string) => {
    handleValueChange(value);
    // call method, if it exists
    // if (onChange) onChange(value);
    // close, after all tasks are finished
    handleClose();
  };

  return {
    handleOpen,
    handleClose,
    handleValueChange,
    handleChange,
    open,
    currentValue,
  };
};

export default useSelect;
