export interface IError {
  isError: boolean;
  errorMessage: string;
}

export type IData = Record<string, any> | null;

export interface ICourseModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  information: string;
  image_link: string;
  image_large_link: string;
}

export interface ICourseLesson {
  module_id: string;
  lesson_id: string;
  title: string;
  subtitle: string;
  speakers: string;
  description: string;
}

export interface ICompoundProgramLesson {
  module_id: string;
  lesson_id: string;
  name: string;
  link: string;
  state_id: string;
  is_required: boolean;
  type: string;
  status_name?: string;
  score?: string;
  max_score?: string;
  finish_date?: string;
}

export interface ICompoundProgram {
  id: string;
  name: string;
  state_id: string;
  is_show_rewiev?: boolean;
  lessons: ICompoundProgramLesson[];
}

export interface ICourseResponse extends IError {
  course: IData;
  compound_program: {
    id: string;
    data: ICompoundProgram[];
  };
  materials: IMaterialsResponse;
}

export type Role = 'manager' | 'hr_bp' | 'recruiter' | 'guest';
