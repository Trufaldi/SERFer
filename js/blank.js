const openItem = item => {

    const container = item.closest(".command__person");
    const contentBlock = container.find(".command__person-specification");
    const textBlock = contentBlock.find(".command__person-block");
    const reqHeight = textBlock.height();

    container.addClass("active");

    contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.command__person-specification');
    const itemContainer = container.find(".team__item");

    itemContainer.removeClass("active");
    items.height(0);
}

$('.command__person-name').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.command__team');
    const elemContainer = $this.closest(".command__person");

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem($this);
    }

});