// var file = "/page/treant/treant-js-master/examples/arm_example";
var file = "";      // FIXME: Be sure to change this to the above path when using the actual website

function align_tree(tree) {
    var tree_container = jQuery(tree.drawArea);
    var wrapper = tree_container.parent();
    var element = tree_container.find('.node').last();
    tree.drawArea.scrollLeft = parseInt(element.css('left')) - ((wrapper.width() - element.width()) / 2);
}