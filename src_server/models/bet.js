module.exports = (sequelize,Sequelize) =>{
    const Bet = sequelize.define('bet', {
        date: {
            type: Sequelize.DATE,
        },
        sport: {
            type: Sequelize.STRING,
        },
        title: {
            type: Sequelize.STRING,
        },
        amount: {
            type: Sequelize.FLOAT,
        },
        cote: {
            type: Sequelize.FLOAT,
        },
        profit_loose: {
            type: Sequelize.FLOAT,
        },
    });
    return Bet;
};
