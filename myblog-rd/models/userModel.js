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
    getUserByUsername(username) {
        return db.query("select * from t_user where username=?", [username]);
    },
}