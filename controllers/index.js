const router = require("express").Router();

// Import all of the routes from controllers here
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api/");
const dashboardRoutes = require("./dashboardRoutes");
const updatePostRoutes = require("./updatePostRoutes");
// Connect the routes to the router here
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use('/updatePost', updatePostRoutes);

module.exports = router;
