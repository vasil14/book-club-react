import { CaretDown } from "phosphor-react";

const Caret: any = <CaretDown size={15} weight="bold"/>

export const config: any = [
  {
    key: 1,
    label: 'Category',
    icon: Caret,
    children: [
      {
        key: 2,
        label: 'Romance',
      },
      {
        key: 3,
        label: 'Mister',
      },
    ],
  },
  {
    key: 4,
    label: 'Blog',
  },
];