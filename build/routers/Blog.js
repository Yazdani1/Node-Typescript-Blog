"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { createBlog, getAllBlogPosts, getSingleBlogPost, changeBlogProperty } = require('../controllers/Blog');
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
/**
 * To change all the property together
 */
router.post('/change-field', changeBlogProperty);
module.exports = router;
