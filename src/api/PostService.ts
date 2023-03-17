import $api from '.';
import IPost from '../models/IPost';

export default class PostService {
  static async create(): Promise<IPost> {
    try {
      const { data } = await $api.post('/posts');
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  static async getAll(): Promise<IPost[]> {
    const { data } = await $api.get('/posts');
    return data;
  }

  static async getOne(id: number): Promise<IPost> {
    const { data } = await $api.get(`/posts/${id}?_embed=comments`);
    return data;
  }

  static async update(id: number): Promise<IPost> {
    try {
      const { data } = await $api.put(`/posts/${id}`);
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  static async delete(id: number) {
    try {
      const { data } = await $api.delete(`/posts/${id}`);
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
