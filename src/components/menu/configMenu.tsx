import { CaretDown } from "phosphor-react";
import { Link } from "react-router-dom";

const Caret: any = <CaretDown size={15} weight="bold"/>

const Fiction = <Link to={'/books/fiction'}>Fiction</Link>

export const configMenu: any = [
  {
    key: 1,
    label: 'Category',
    icon: Caret,
    children: [
      {
        key: 2,
        label: Fiction
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