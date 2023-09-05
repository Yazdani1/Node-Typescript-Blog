"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { createBlog, getAllBlogPosts } = require('../controllers/Blog');
const router = (0, express_1.Router)();
/**
 * To create blog
 */
router.post('/create-blog', createBlog);
/**
 * To get all the blog post lists
 */
router.get('/all-blog-posts', getAllBlogPosts);
module.exports = router;
