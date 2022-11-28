export interface ToCheck<T> {
  succes: boolean;
  data: T;
}

export interface Pagination {
  actualPage: number;
  totalResults: number;
  totalPages: number;
  resultPerPage: number;
}

export interface ApiResponse<T> extends ToCheck<T> {
  pagination?: Pagination;
  errors: any;
}
export interface Pager {
  page?: number;
  take?: number;
  [x: string]: any;
}
