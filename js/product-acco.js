const mesureWidth = () => {
    return 500;
}
const closeEveryItemContainer = container => {
    const items = container.find(".product-menu__item");
    const content = container.find(".product-menu__content");

    items.removeClass("active");
    content.width(0);
}
const openItem = item => {
    const hiddenContent = item.find(".product-menu__content");
    const reqWidth = mesureWidth();
    item.addClass(".active");

    hiddenContent.width(reqWidth);

}
$(".product-menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".product-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".product-menu");

    if (itemOpened) {
        closeEveryItemContainer(container)

    } else {
        closeEveryItemContainer(container)
        openItem(item);
    }
});

$(".product-menu__close").on("click", e => {
    e.preventDefault();
    closeEveryItemContainer($('.product-menu'));
})