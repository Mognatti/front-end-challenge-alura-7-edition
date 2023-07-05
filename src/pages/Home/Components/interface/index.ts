export interface HomeComponentsProps {
  windowWidth: number;
  tablet: number;
  mobile: number;
}

export type product = {
  id: number;
  name: string;
  description: string;
  price: string;
  srcDesktop: string;
  srcTablet: string;
  srcMobile: string;
  colorOptions: { color: string; id: number }[];
  size: string[];
};

export interface ProductCardProps {
  product: product;
  windowWidth: number;
  tablet: number;
  mobile: number;
  setModalItem: React.Dispatch<React.SetStateAction<product | null>>;
}

export interface ModalProps {
  modalItem: product;
  closeModal: () => void;
  windowWidth: number;
  tablet: number;
  mobile: number;
}
export interface SizeOptionsProps {
  size: string;
}
