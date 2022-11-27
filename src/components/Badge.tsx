import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { ILabel } from "../Pages/BoardVariables";


interface BadgeProps {
  item: ILabel;
  removeLabel?: (label: ILabel) => void;
}
export default function Badge(props: BadgeProps) {
  const { item, removeLabel } = props;
  return (
    <label style={{ backgroundColor: item.color, color: "#fff" }}>
      {item.text}
      {removeLabel && <AiOutlineClose onClick={() => removeLabel(item)} />}
    </label>
  );
}
