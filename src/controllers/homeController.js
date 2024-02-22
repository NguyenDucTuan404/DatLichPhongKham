import express from 'express';
const getHomePage = (req, res) => {
  return res.send("Hello tuanne");
}

module.exports = {
  getHomePage: getHomePage,
}