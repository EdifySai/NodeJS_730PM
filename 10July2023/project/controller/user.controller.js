var UserModel = require('../model/user.model');
exports.add = async (req, res) => {
    var body = req.body;
    try {
        var User = new UserModel(body);
        var response = await User.save();
        console.log("response", response);
        res.send(response);
    } catch (error) {
        console.log("error", error)
    }
}