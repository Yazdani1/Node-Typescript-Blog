import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Blog, { IBlog } from '../models/Blog';

/**
 * To create blog post
 * @param req
 * @param res
 * @returns
 */

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, des, active, users } = req.body;

    if (!title) {
      return res.status(422).json({ error: 'please add title! ss' });
    }

    if (!des) {
      return res.status(422).json({ error: 'please add title! ss' });
    }

    const blogDetails: IBlog = {
      title,
      des,
      active,
      users,
      slug: uuidv4(),
    };

    const saveBlog = await Blog.create(blogDetails);

    res.status(201).json(saveBlog);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

/**
 * To get all the blog posts
 * @param req
 * @param res
 */
export const getAllBlogPosts = async (req: Request, res: Response) => {
  try {
    const allBlogPosts = await Blog.find({}).sort({ date: -1 });

    res.status(200).json(allBlogPosts);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
