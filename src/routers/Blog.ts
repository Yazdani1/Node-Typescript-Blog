import { Router } from 'express';

const { createBlog, getAllBlogPosts, getSingleBlogPost, changeBlogProperty } = require('../controllers/Blog');

const router = Router();

/**
 * To create blog
 */

router.post('/create-blog', createBlog);

/**
 *
 * To get all the blog post lists
 *
 */

router.get('/all-blog-posts', getAllBlogPosts);

/**
 *
 * To get a single blog post
 *
 */

router.get('/single-blog/:slug', getSingleBlogPost);

/**
 * To change all the property together
 */

router.post('/change-field', changeBlogProperty);

module.exports = router;
