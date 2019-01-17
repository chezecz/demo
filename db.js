const Sequelize = require('sequelize');
const mysql = require('mysql');

require('dotenv').config();

sql_user = process.env.SQL_USER;
sql_password = process.env.SQL_PASSWORD;
sql_database = process.env.SQL_DATABASE;
sql_instance = '/cloudsql/' + process.env.INSTANCE_CONNECTION_NAME;
sql_ip = process.env.SQL_IP;

const sequelize = new Sequelize(sql_database, sql_user, null, {
	host: sql_ip,
	dialect: 'mysql',
	operatorsAliases: false,
	logging: false,
	define: {
		timestamps: false
	},
	// dialectOptions: {
	// 	socketPath: sql_instance
	// },
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

const Users = sequelize.define('names', {
	userid: {
		type: Sequelize.INTEGER,
		field: 'userid',
		primaryKey: true,
		autoIncrement: true
	},
	first_name: {
		type: Sequelize.STRING,
		field: 'first_name'
	},
	last_name: {
		type: Sequelize.STRING,
		field: 'last_name'
	}
});

exports.Users = Users;

sequelize.sync({force: false});