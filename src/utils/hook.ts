import { AppDispatch, RootState } from "@/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const parseDataToNumber = (value: string) => {
  return parseInt(value);
};

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formatDate = (date: Date) => {
  const year = new Date(date).getFullYear();
  let month = monthNames[new Date(date).getMonth()];
  let dd = new Date(date).getDate() + ''
  if(dd.length < 2) {
    dd = '0' + dd
  }
  return `${dd + ' ' + month + ', ' + year}`
};
