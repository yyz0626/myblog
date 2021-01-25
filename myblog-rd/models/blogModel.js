const db = require('../models/db')

module.exports = {
    getBlogs() {
        return db.query("select * from t_blog");
    },
    getUserByNamePwd(username, password) {
        return db.query("select * from t_user where username=? and password=?", [username, password]);
    },
    saveUser(user) {
        return db.query("insert into t_user set ?", user);
    },
    getBlogComment(blogId) {
        return db.query("SELECT comm_content,comm_time,nickname,comm_id FROM t_comment,t_user WHERE t_comment.blog_id=? and t_comment.user_id=t_user.user_id ", [blogId])
    },
    getBlogDetail(blogId) {
        return db.query("select * from t_blog where blog_id=?", [blogId]);
    },
    saveBlog(blog) {
        return db.query("insert into t_blog set ?", blog);
    },
    saveContent(comment) {
        return db.query("insert into t_comment set ?", comment);
    }
}