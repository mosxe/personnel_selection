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
export type Category =
  | 'Общие вводные материалы'
  | 'Найм рабочего персонала'
  | 'Подбор РСС';
export type Role = 'manager' | 'hr_bp' | 'recruiter' | 'guest';
export type Tags = string[];

export interface IDataItem {
  id: string;
  type: Type;
  title: string;
  desc: string;
  status: Status;
  category: Category;
  image: string | null;
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

export interface File {
  name: string;
  link: string;
  type: Type;
}

export interface IMaterial {
  id: string;
  title: string;
  desc: string;
  content: string;
  speakers: string;
  image: string | null;
  status: Status;
  link: string;
  files: File[];
}

export interface IAssessment {
  id: string;
  title: string;
  link: string;
  state_id: string;
  status_name: string;
  score: string;
  max_score: string;
  finish_date: string;
}

export interface IResponseMaterial {
  data: IMaterial | null;
  assessment: IAssessment | null;
  role: Role;
  isError: boolean;
  errorMessage: string;
}

export interface IResponseActiveAssessment {
  link: string;
  isError: boolean;
  errorMessage: string;
}
