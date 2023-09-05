"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBlogPosts = exports.createBlog = void 0;
const uuid_1 = require("uuid");
const Blog_1 = __importDefault(require("../models/Blog"));
/**
 * To create blog post
 * @param req
 * @param res
 * @returns
 */
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, des, active, users } = req.body;
        if (!title) {
            return res.status(422).json({ error: 'please add title! ss' });
        }
        if (!des) {
            return res.status(422).json({ error: 'please add title! ss' });
        }
        const blogDetails = {
            title,
            des,
            active,
            users,
            slug: (0, uuid_1.v4)(),
        };
        const saveBlog = yield Blog_1.default.create(blogDetails);
        res.status(201).json(saveBlog);
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.createBlog = createBlog;
/**
 * To get all the blog posts
 * @param req
 * @param res
 */
const getAllBlogPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBlogPosts = yield Blog_1.default.find({}).sort({ date: -1 }).limit(1);
        res.status(200).json(allBlogPosts);
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.getAllBlogPosts = getAllBlogPosts;
