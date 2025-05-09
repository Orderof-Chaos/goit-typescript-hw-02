export type respData = {
  total: number;
  total_pages: number;
  results: respPhoto[];
}

export type respPhoto = {
  id: string;
  description: string;
  likes: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
};


