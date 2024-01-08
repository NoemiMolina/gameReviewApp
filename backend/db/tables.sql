CREATE TABLE Users (
    userID INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(50) NOT NULL,
    userPassword VARCHAR(50) NOT NULL,
    userMail VARCHAR(50) NOT NULL
);

CREATE TABLE Games (
    gameId INT PRIMARY KEY AUTO_INCREMENT,
    gameTitle VARCHAR(100) NOT NULL,
    gameType VARCHAR(50) NOT NULL,
    gamePlatform VARCHAR(50) NOT NULL,
    gameDate DATE
);

CREATE TABLE Comments (
    commentID INT NOT NULL AUTO_INCREMENT,
    userID INT NOT NULL,
    gameId INT NOT NULL,
    commentContent TEXT NOT NULL,
    note INT CHECK (Note >= 0 AND Note <= 5),
    commentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userID) REFERENCES Users(userID),
    FOREIGN KEY (gameId) REFERENCES Games(gameId)
);