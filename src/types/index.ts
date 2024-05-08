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

export interface IUpdateStatusLesson {
  education_plan_id: string;
  lesson_id: string;
}

export interface ILessonFile {
  lesson_id: string;
  category_name: string;
  file_name: string;
  file_link: string;
}

export interface IActiveCourseResponse extends IError {
  id: string;
}

export interface IActiveAssessmentResponse extends IError {
  link: string;
}

export interface ISendMessage {
  id: string;
  module_id: string;
  lesson_id: string;
  text: string;
}

export interface ISendReview {
  id: string;
  module_id: string;
  score: number;
  text: string;
}

export type Material = 'book' | 'video' | 'article' | 'audio';

export interface IMaterial {
  title: string;
  subtitle?: string;
  purpose?: string;
  description?: string;
  type: Material;
  link: string;
  date: string;
}

export interface IMaterialsResponse {
  title: string;
  description: string;
  data: string | null;
}
