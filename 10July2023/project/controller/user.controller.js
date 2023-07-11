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

exports.update = async (req, res) => {
    var body = req.body;
    try {
        var response = await UserModel.findOneAndUpdate({ emailid: body.emailid }, body);
        console.log(response);
        res.send(response);
    }
    catch (error) {
        console.log(error);
    }
}


exports.delete = async (req, res) => {
    var emailid = req.body.emailid;
    try {
        var response = await UserModel.findOneAndDelete({ emailid: emailid });
        console.log(response);
        res.send(response);
    }
    catch (error) {
        console.log(error);
    }

}
exports.list = async (req, res) => {
    try {
        var response = await UserModel.find({});
        res.send(response);
    }
    catch (error) {
        console.log(error);
    }
}
