import { Router } from 'express';
const { createBlog, getAllBlogPosts } = require('../controllers/Blog');

const router = Router();
/**
 * To create blog
 */
router.post('/create-blog', createBlog);

/**
 * To get all the blog post lists
 */

router.get('/all-blog-posts', getAllBlogPosts);

module.exports = router;
