export type TPostStatus = 'CREATED';
export type TPostType = 'ARTICLE'

export type TPost = {
  id: number;
  title: string;
  desc: string;
  image?: string; // TODO добавить возможность прикладывать фото и видео
  status: TPostType,
  type: TPostType,
  dateCreated: string,
  dateUpdated: string | null,
  url?: string;
};

export type TPosts = TPost[];

export type TPostsSliceState = {
  posts: TPosts | undefined,
}
