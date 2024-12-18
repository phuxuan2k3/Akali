const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DBName, process.env.DBUser, process.env.DBPass, {
  host: process.env.DBHost,
  dialect: 'mysql',
});

const init = async () => {
await sequelize.sync({ force: true });
}

// Define BusinessManager model
const BusinessManager = sequelize.define('BusinessManager', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  accountID: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'business_manager',
  timestamps: false,
});

// Define Candidate model
const Candidate = sequelize.define('Candidate', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING },
  accountID: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'candidate',
  timestamps: false,
});

// Fetch all Business Managers
async function fetchBusinessManagers() {
  try {
    const businessManagers = await BusinessManager.findAll();
    return businessManagers;
  } catch (error) {
    console.error('Error fetching Business Managers:', error);
  }
}

// Fetch all Business Managers
async function fetchBusinessManagersbyIDs(ids) {
  try {
    const businessManagers = await BusinessManager.findAll({
      where: {
      id: ids
      }
    });
    return businessManagers;
} catch (error) {
    console.error('Error fetching Business Managers:', error);
  }
}

// Fetch all Candidates
async function fetchCandidates() {
  try {
    const candidates = await Candidate.findAll();
    return candidates;
  } catch (error) {
    console.error('Error fetching Candidates:', error);
  }
}

module.exports = { init, fetchBusinessManagers, fetchCandidates, fetchBusinessManagersbyIDs};