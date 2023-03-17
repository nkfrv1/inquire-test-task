import $api from '.';
import IComment from '../models/IComment';

export default class CommentService {
  static async create(): Promise<IComment> {
    try {
      const { data } = await $api.post('/comments');
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  static async getAll(): Promise<IComment[]> {
    const { data } = await $api.get('/comments');
    return data;
  }

  static async getOne(id: number): Promise<IComment> {
    const { data } = await $api.get(`/comments/${id}`);
    return data;
  }

  static async update(id: number): Promise<IComment> {
    try {
      const { data } = await $api.put(`/comments/${id}`);
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  static async delete(id: number) {
    try {
      const { data } = await $api.delete(`/comments/${id}`);
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
