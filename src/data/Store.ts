export interface ArrayBase {
  imgUrl?: string;
  name: string;
  surname: string;
  birthday: string;
  select: string;
  checkbox: boolean;
  radio: string;
}
export interface ArrayMain extends ArrayBase {
  imgFile?: MediaSource | Blob;
}
export interface ArraySubmit extends ArrayBase {
  imgFile?: (MediaSource | Blob)[];
}
export const arrList: ArrayMain[] = [
  {
    imgUrl: '/1.jpg',
    name: 'Bob',
    surname: 'Smith',
    birthday: '2023-03-01',
    select: '1',
    checkbox: true,
    radio: 'man',
  },
  {
    imgUrl: '/2.jpg',
    name: 'Smith',
    surname: 'Bob',
    birthday: '2023-03-01',
    select: '1',
    checkbox: false,
    radio: 'woman',
  },
  {
    imgUrl: '/3.jpeg',
    name: 'Smith',
    surname: 'Smith',
    birthday: '2023-03-01',
    select: '1',
    checkbox: false,
    radio: 'man',
  },
  {
    imgUrl: '/4.jpg',
    name: 'Bob',
    surname: 'Bob',
    birthday: '2023-03-01',
    select: '1',
    checkbox: true,
    radio: 'woman',
  },
  {
    imgUrl: '/5.jpg',
    name: 'Bob',
    surname: 'Bob',
    birthday: '2023-03-01',
    select: '1',
    checkbox: false,
    radio: 'man',
  },
];
