module.exports = function (sequelize, DataTypes) {

    var HomesSale = sequelize.define("HomesSale", {

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    return HomesSale;
}