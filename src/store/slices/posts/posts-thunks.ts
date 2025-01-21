import {createAsyncThunk} from "@reduxjs/toolkit/react";

import {TPosts} from "./posts-types";
import {postsSliceName} from "./posts-constants";
import {fetchPosts} from "./posts-api";

export const loadPosts = createAsyncThunk<TPosts, void>(
  `${postsSliceName}/loadPosts`,
  async (_, {rejectWithValue}) => {
      try {
          const response = await fetchPosts();
          const {data} = response;
          return data;
      } catch (e) {
          return rejectWithValue(e);
      }
  },
);