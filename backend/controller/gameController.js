const { Game } = require('../models');


exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.findAll({
      include: [
        {
          model: Comment,
          attributes: ['commentContent', 'note', 'commentDate'],
        },
      ],
    });
    res.json(games);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getCommentsForGame = async (req, res) => {
  const gameId = req.params.id;
  try {
    const gameWithComments = await Game.findByPk(gameId, {
      include: [
        {
          model: Comment,
          attributes: ['commentContent', 'note', 'commentDate'],
        },
      ],
    });

    if (!gameWithComments) {
      return res.status(404).json({ error: 'Game not found' });
    }

    res.json(gameWithComments.Comments);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getGameById = async (req, res) => {
  const gameId = req.params.id;
  try {
    const game = await Game.findByPk(gameId);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    res.json(game);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.addGame = async (req, res) => {
  const { title, genre, rating, review } = req.body;
  try {
    const newGame = await Game.create({ title, genre, rating, review });
    res.json(newGame);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.updateGame = async (req, res) => {
  const gameId = req.params.id;
  const { title, genre, rating, review } = req.body;
  try {
    const game = await Game.findByPk(gameId);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    game.title = title;
    game.genre = genre;
    game.rating = rating;
    game.review = review;
    await game.save();
    res.json(game);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.deleteGame = async (req, res) => {
  const gameId = req.params.id;
  try {
    const game = await Game.findByPk(gameId);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    await game.destroy();
    res.json({ message: 'Game deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
