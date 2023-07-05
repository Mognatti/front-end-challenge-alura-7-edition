import {
  ModalRadioInput,
  ModalRadioListItem,
} from "../../../../../../../styles/StyledComponents";
import { SizeOptionsProps } from "../../../../interface";

export default function SizeOptions({ size }: SizeOptionsProps) {
  return (
    <ModalRadioListItem key={size}>
      <ModalRadioInput
        color="default"
        type="radio"
        id={size}
        name="size"
        value={size}
      ></ModalRadioInput>
      <label htmlFor={size}>{size}</label>
    </ModalRadioListItem>
  );
}
