"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { createBlog, getAllBlogPosts, getSingleBlogPost } = require('../controllers/Blog');
const router = (0, express_1.Router)();
/**
 * To create blog
 */
router.post('/create-blog', createBlog);
/**
 * To get all the blog post lists
 */
router.get('/all-blog-posts', getAllBlogPosts);
/**
 * To get a single blog post
 */
router.get('/single-blog/:slug', getSingleBlogPost);
module.exports = router;
