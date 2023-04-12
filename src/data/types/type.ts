import { FieldErrors, UseFormRegister } from 'react-hook-form';

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

export type CharacterType = {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
};
export type StoreType = {
  store: CharacterType[];
  setStore: React.Dispatch<React.SetStateAction<CharacterType[]>>;
};
export interface ComponentBaseInterface {
  inputValue: ArrayMain;
  register: UseFormRegister<ArraySubmit>;
  errors: FieldErrors<ArraySubmit>;
}
