exports.getDay = function () {
    const today = new Date();

    const options = {
      weekday: "long",
    };
    
    return today.toLocaleDateString("en-US", options);
};