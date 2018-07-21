'use strict';
module.exports = function(app) {
  var dietSelectionList = require('../controllers/dietSelectionController');

  // dietSelection Routes
  app.route('/item')
    .get(dietSelectionList.list_all_items)
    .post(dietSelectionList.create_a_item);


  app.route('/item/:itemId')
    .get(dietSelectionList.read_an_item)
    .put(dietSelectionList.update_an_item)
    .delete(dietSelectionList.delete_an_item);
};