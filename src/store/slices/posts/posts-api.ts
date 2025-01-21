import axios from "axios";
import {TPosts} from "./posts-types";
import {RequestMethod} from "../../../shared/types/requests";

export const fetchPosts = () => (
  axios<TPosts>({
    url: 'post',
    method: RequestMethod.GET,
  })
);