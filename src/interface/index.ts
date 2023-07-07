export interface HomeComponentsProps {
  windowWidth: number;
  tablet: number;
  mobile: number;
}

export interface CategoryProps {
  windowWidth: number;
  tablet: number;
  mobile: number;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProductsProps {
  windowWidth: number;
  tablet: number;
  mobile: number;
  productList: product[] | undefined;
  isLoading: boolean;
  category: string;
  search: string;
}

export interface UseFilterProps {
  productList: product[] | undefined;
  search: string;
  category: string;
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
  provider: string;
  category: string;
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

export interface NewsLetterModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
