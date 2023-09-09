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
    const allBlogPosts: IBlog[] = await Blog.find({}).sort({ date: -1 });

    res.status(200).json(allBlogPosts);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

/**
 * To get a single blog post
 * @param req
 * @param res
 * @returns
 */

export const getSingleBlogPost = async (req: Request, res: Response) => {
  try {
    const query = { slug: req.params.slug };

    const singleBlogPost = await Blog.findOne(query);
    if (!singleBlogPost) {
      return res.status(404).json({ error: 'Blog post could not found!' });
    }
    res.status(200).json(singleBlogPost);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

/**
 * To change all the property together
 * First get all the data from schema then using loop it change the Blog shcema proeprty
 * Then it saves -  This way all the fileds can be updated all together
 * @param req
 * @param res
 */

export const changeBlogProperty = async (req: Request, res: Response) => {
  try {
    const { activef } = req.body;

    const allBlogs = await Blog.find({}).sort({ date: -1 });

    for (let blog of allBlogs) {
      blog.active = activef;
      await blog.save();
    }

    res.status(200).json(allBlogs);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
