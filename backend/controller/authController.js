const user = require("./../Models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await user.findOne({ email });

    // email check karel nasla tar error pathavel ha
    if (!result) {
      return res.status(400).json({
        status: false,
        message: "email not found",
      });
    }

    // jar email bhetla tar ata password verify karaych

    const verify = await bcrypt.compare(password, result.password);
    if (!verify) {
     return res.status(400).json({
        status: false,
        message: "password do not match",
      });
    }

    // jar password ani email donhi pan milal tar
    const token = jwt.sign({ id: result._id }, process.env.JWT_KEY);

    res.status(200).json({
      success: true,
      message: "user logging in successfully",
      result: {
        token,
        name: result.name,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error" + error,
    });
  }
};
