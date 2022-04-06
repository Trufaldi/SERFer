const validateFields = (form, fieldsArray) => {

    fieldsArray.forEach(field => {
        field.removeClass("input-error");
        if (field.val().trim() === "") {
            field.addClass("input-error");
        }
    });

    const errorFields = form.find(".input-error");
    return errorFields.length === 0;
}

$(".form").submit(e => {
            e.preventDefault();

            const form = $(e.currentTarget);
            const name = form.find("[name='name']");
            const phone = form.find("[name='phone']");
            const street = form.find("[name='street']");
            const comment = form.find("[name='comment']");
            const to = form.find("[name='to']");

            const modal = $("modal");
            const content = modal.find(".modal__content");

            modal.removeClass("modal-error");


            const isValid = validateFields(form, [name, phone, street, comment, to]);

            // !!!![name, phone, street, comment, to].forEach(field => {
            //     field.removeClass("input-error");
            //     if (field.val().trim() === "") {
            //         field.addClass("input-error");
            //     }
            // });

            // const errorFields = form.find(".input-error");

            if (isValid) {
                const request = $.ajax({
                    url: "https://webdev-api.loftschool.com/sendmail",
                    method: "post",
                    data: {
                        name: name.val(),
                        phomne: phone.val(),
                        comment: comment.val(),
                        to: to.val(),
                    },
                    success: data => {
                        content.text(data.message)
                            // console.log(data);
                    },
                    error: data => {
                        const message = data.responseJSON.message;
                        content.text(message);
                        console.log(data);
                        modal.addClass("modal-error");
                        $.fancybox.open({
                            src: '#modal',
                            type: 'inline'
                        });
                    }
                });


            }
            // {} -это объект

            request.done((data) => {

                }

            });

        $(".app-submit-button").click(e => {
            e.preventDefault();

            $.fancybox.close();
        })