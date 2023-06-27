export const navOptionsList = [
  { id: 1, nome: "Home", to: "/" },
  { id: 2, nome: "Nossas Lojas", to: "/nossas-lojas" },
  { id: 3, nome: "Novidades", to: "/novidades" },
  { id: 4, nome: "Promoções", to: "/promocoes" },
];

export type navOptionsType = {
  id: number;
  nome: string;
  to: string;
};
