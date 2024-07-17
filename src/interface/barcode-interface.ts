export interface IError {
  message: string;
}

export interface IData {
  data: Root | undefined;
  loading: boolean;
  error: IError | undefined;
}

export interface Root {
  barcode?: Barcode;
}

export interface Barcode {
  id: string;
  barcodeValue: string;
  title: string;
  description: string;
  deleted: boolean;
  sellingPrice: number;
  slug: string;
  archived: boolean;
  createdAt: string;
  mute: boolean;
  discountedPrice: any;
  cost: any;
  tags: any;
  characteristic: any;
  category: Category;
  images: Image[];
  sizes: Sizes;
  __typename: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  icon1: string;
  isActive: boolean;
  prioritization: number;
  inTrend: boolean;
  lft: number;
  rght: number;
  treeId: number;
  level: number;
  parent: Parent;
  __typename: string;
}

export interface Parent {
  id: string;
  name: string;
  slug: string;
  icon: string;
  icon1: string;
  isActive: boolean;
  prioritization: number;
  inTrend: boolean;
  lft: number;
  rght: number;
  treeId: number;
  level: number;
  __typename: string;
}

export interface Image {
  id: string;
  url: string;
  __typename: string;
}

export interface Sizes {
  edges: Edge[];
  __typename: string;
}

export interface Edge {
  node: Node;
  __typename: string;
}

export interface Node {
  id: string;
  name: string;
  value: number;
  __typename: string;
}
