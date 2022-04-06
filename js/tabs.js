const findBlockByAlias = alias => {
    return $(".user__rewiew").filter((ndx, item) => {
        return $(item).attr("data-linked-with") === alias
    });
};

$(".user__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget); //клик
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target); // вызов функции целиком отзыв
    const curItem = $this.closest(".user"); //найти ближайшего родителя с классом юзер/портрет

    itemToShow.addClass("user__rewiew--active").siblings().removeClass("user__rewiew--active")
    curItem.addClass("user--active").siblings().removeClass("user--active");
});

// data - пользлвательский атрибут возможности html5