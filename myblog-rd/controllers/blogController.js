const model = require('../models/blogModel')

module.exports = {
    async welcome(ctx) {
        //查询数据库
        let results = await model.getBlogs();
        ctx.body = {
            blogs: results
        }
    },
    async getBlogComment(ctx) {
        let blog_id = ctx.query.blogId;
        let results = await model.getBlogComment(blog_id)
        ctx.body = {
            comments: results
        }
    },
    async getBlogDetail(ctx) {
        let blog_id = ctx.query.blogId;
        let results = await model.getBlogDetail(blog_id);
        ctx.body = {
            detail: results
        }
    },
    async publishBlog(ctx) {
        let {
            title,
            blog_content,
            blog_length
        } = ctx.request.body;
        if (title.trim().length == 0) {
            ctx.body = {
                message: "标题不能为空"
            }
        } else {
            let results = await model.saveBlog({
                title,
                blog_content,
                blog_length
            })
            if (results.insertId) {
                ctx.body = {
                    message: "发表成功"
                }
            } else {}
        }
    },
    async writeComment(ctx) {
        // console.log(ctx.request);
        let {
            comm_content,
            blog_id,
            user_id
        } = ctx.request.body;
        if (comm_content.trim().length == 0) {
            ctx.body = {
                message: "评论不能为空"
            }
        } else {
            let results = await model.saveContent({
                comm_content,
                blog_id,
                user_id
            })
            // console.log(results);
            if (results.insertId) {
                ctx.body = {
                    message: "评论成功"
                }
            } else {}
        }
    },
    async delete(ctx) {
        let {
            blogId
        } = ctx.request.body;
        console.log(blogId);
        let results = await model.deleteBlog(blogId);
        // console.log(results);
        if (results) {
            // console.log(1);
            ctx.body = {
                message: '删除成功'
            }
        } else {}
    }
};