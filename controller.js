const path = require('path');

// console.log("In regular controller"); 

exports.getHome = async (req, res, next) => {
    res.sendFile(
        // path.join(__dirname, "./examples/arm_example/test_tree.html")
        path.join(__dirname, "./examples/arm_example/index.html")
    );
};