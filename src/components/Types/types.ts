// export type fetchRes = {
//     total: number;
//   total_pages: number;
//   results: respPhoto[];
// }

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

export type  Image = {
  id: string;
  alt_description?: string;
  urls: {
    small: string;
    regular: string;
  };
};

// export type reqParams = {
//     client_id: string;
//     page: number;
//     per_page: number;
//     query: string;
// };
