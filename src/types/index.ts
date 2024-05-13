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
export type Status = 'новый' | 'в процессе' | 'завершено';
export type Category = 'material' | 'hiring' | 'selection';
export type Role = 'manager' | 'hr_bp' | 'recruiter' | 'guest';

export interface IDataItem {
  id: number;
  type: Type;
  title: string;
  desc: string;
  status: Status;
  category: Category;
  image: string;
  tags: string[];
}

export interface IDataSection {
  data: IDataItem[];
  tags: string[];
}

export interface IResponseData {
  dataProcess: IDataSection;
  dataWorking: IDataSection;
  dataInterview: IDataSection;
  role: Role;
  isError: boolean;
  errorMessage: string;
}
