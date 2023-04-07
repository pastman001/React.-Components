interface ArrayBase {
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
export type StoreOnly = { store: ArrayMain[] };
