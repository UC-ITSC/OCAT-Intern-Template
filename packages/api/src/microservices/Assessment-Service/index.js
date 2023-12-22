const AssessmentService = require(`./Assessment-Service`);
const UserService = require(`./User-Service`);
const express = require('express');
const { AssessmentService } = require('../microservices/Assessment-Service');

module.exports = {
  AssessmentService,
  UserService,
};