import {
  ModalRadioInput,
  ModalRadioListItem,
} from "../../../../../../../styles/StyledComponents";

export default function ColorOptions(item: { color: string; id: number }) {
  return (
    <ModalRadioListItem key={item.id}>
      <ModalRadioInput
        color={item.color}
        type="radio"
        id={item.color}
        name="color"
        value={item.color}
      ></ModalRadioInput>
      <label htmlFor={item.color}>{item.color}</label>
    </ModalRadioListItem>
  );
}
