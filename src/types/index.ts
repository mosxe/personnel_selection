export type Type =
  | 'Видео'
  | 'Электронный курс'
  | 'Тренинг'
  | 'Тренажёр'
  | 'Памятка'
  | 'Шаблон'
  | 'Документ'
  | 'Тест'
  | 'Инструкция';
export type Status = 'новый' | 'в процессе' | 'завершено' | '';
export type Category = 'material' | 'hiring' | 'selection';
export type Role = 'manager' | 'hr_bp' | 'recruiter' | 'guest';
export type Tags = string[];

export interface IDataItem {
  id: number;
  type: Type;
  title: string;
  desc: string;
  status: Status;
  category: Category;
  role: Role;
  image: string;
  tags: Tags;
  link: string;
}

export interface IResponseItem {
  dataProcess: IDataItem[];
  dataWorking: IDataItem[];
  dataInterview: IDataItem[];
  tags: Tags;
}

export interface IResponseData {
  dataManager: IResponseItem;
  dataHRBP: IResponseItem;
  dataRecruiter: IResponseItem;
  role: Role;
  isError: boolean;
  errorMessage: string;
}
