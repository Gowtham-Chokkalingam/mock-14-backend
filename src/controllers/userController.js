const User = require("../models/userModel");

const userRegister = async (req, res) => {
  const { name, difficulty } = req.body;

  try {
    const newUser = await User.create({
      name,
      difficulty,
    });

    res.status(201).json({ message: newUser, status: "New User has been created" });
  } catch (error) {
    console.log("Error at backend userRegister Route", error.message);
    res.status(500).json({ message: error.message });
  }
};

const upadateUser = async (req, res) => {
  const { name, difficulty, score } = req.body;
  const user = await User.findById(req.params.id);

  try {
    if (user) {
      user.difficulty = difficulty;
      user.score = score;

      //> here we are not useing job model becz its for crearting-- for updating we need to use the note which is getting from the findById

      const updatedUser = await user.save();
      res.json({ updatedUser: updatedUser });
    }
  } catch (error) {
    console.log("Error at backend upadateUser Route", error.message);
    res.status(500).json({ message: error.message });
  }
};
const generateRandomWord = async (req, res) => {
  let length = req.params.id;
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  try {
    let random = generateRandomWord(length, alphabet);

    function generateRandomWord(length, characterSet) {
      let word = "";
      for (let i = 0; i < length; i++) {
        word += characterSet[Math.floor(Math.random() * characterSet.length)];
      }
      return word;
    }

    res.status(201).json({ randomWord: random });
  } catch (error) {
    console.log("Error at backend randomword Route", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { userRegister, generateRandomWord ,upadateUser};
