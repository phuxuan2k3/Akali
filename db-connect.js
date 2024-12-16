const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('account', 'root', 'trung113', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define BusinessManager model
const BusinessManager = sequelize.define('BusinessManager', {
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

// Fetch all Candidates
async function fetchCandidates() {
  try {
    const candidates = await Candidate.findAll();
    return candidates;
  } catch (error) {
    console.error('Error fetching Candidates:', error);
  }
}

module.exports = { fetchBusinessManagers, fetchCandidates };