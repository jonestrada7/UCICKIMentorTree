function align_tree(tree) {
    var tree_container = jQuery(tree.drawArea);
    var wrapper = tree_container.parent();
    var element = tree_container.find('.node').last();
    tree.drawArea.scrollLeft = parseInt(element.css('left')) - ((wrapper.width() - element.width()) / 2);
}