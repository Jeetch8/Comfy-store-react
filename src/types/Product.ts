export interface IProduct {
  id: number;
  attributes: {
    catrgory: string;
    colors: string[];
    company: string;
    createdAt: string;
    description: string;
    featured: boolean;
    image: string;
    price: string;
    publishedAt: string;
    shipping: boolean;
    title: string;
    updatedAt: string;
  };
}

export interface IProductSearchQueryParams {
  search?: string;
  category?: string;
  company?: string;
  sort?: string;
  price?: number;
  shipping?: boolean;
  page?: number;
  order?: string;
}

export interface ISearchPagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface IProductSearchResult {
  data: IProduct[];
  meta: {
    categories: string[];
    companies: string[];
    pagination: ISearchPagination;
  };
  params?: IProductSearchQueryParams;
}
