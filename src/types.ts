export interface Post {
  id: string;
  author: string;
  avatar: string;
  media: string;
  likes: number;
  caption: string;
  isLiked: boolean;
  isBookmarked: boolean;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
}

export interface CommentsState {
  [postId: string]: Comment[];
}

export interface AppContextType {
  posts: Post[];
  comments: CommentsState;
  toggleLike: (postId: string) => void;
  toggleBookmark: (postId: string) => void;
  addPost: (newPost: Post) => void;
  addComment: (postId: string, text: string) => void;
}

export type FeedStackParamList = {
  FeedMain: undefined;
  Comments: { postId: string };
  UserProfile: { user: { name: string; avatar: string } };
};

export type SearchStackParamList = {
  SearchMain: undefined;
  UserProfile: { user: { name: string; avatar: string } };
};

export type CreateStackParamList = {
  Picker: undefined;
  PostDetails: { imageUri: string };
};
