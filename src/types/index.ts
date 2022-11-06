export type ColumnType = {
  id: string;
  name: string;
};

export type CardType = {
  id: string;
  idColumn: string;
  name: string;
  description?: string;
  author: string;
};

export type CommentType = {
  id: string;
  idCard: string;
  text: string;
  author: string;
};
