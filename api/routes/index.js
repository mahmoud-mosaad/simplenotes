
const authRouter = require("./authRouter");
const noteRouter = require("./noteRouter");

module.exports = function (app) {

    app.use("/auth/", authRouter);
    app.use("/note/", noteRouter);
    
}
