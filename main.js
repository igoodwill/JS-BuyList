const ENTER_CODE = 13;
const ESC_CODE = 27;

$(function () {
    const ITEM = $("#item");
    const ITEM_TEMPLATE = ITEM.html();
    const ITEMS = $("#items");
    const ITEM_NAME = $("#item-name");

    ITEM.remove();

    function addItem(name) {
        var item = $(ITEM_TEMPLATE);

        var title = item.find("#title");
        var crossedTitle = item.find("#crossed-title");
        var editTitle = item.find("#edit-title");
        var removeButton = item.find(".remove-button");
        var buyButton = item.find(".buy-button");
        var boughtButton = item.find(".bought-button");
        var decreaseButton = item.find("#decrease");
        var increaseButton = item.find("#increase");

        title.text(name);
        removeButton.click(function () {
            item.remove();
        });
        buyButton.click(function () {
            buyButton.hide();
            boughtButton.show();
            removeButton.hide();
            decreaseButton.hide();
            increaseButton.hide();
            title.hide();
            crossedTitle.text(title.text());
            crossedTitle.show();
        });
        boughtButton.click(function () {
            boughtButton.hide();
            buyButton.show();
            removeButton.show();
            decreaseButton.show();
            increaseButton.show();
            title.show();
            crossedTitle.hide();
        });
        title.click(function () {
            title.hide();
            editTitle.val(title.text());
            editTitle.show();
            editTitle.focus();
        });

        var onNameEdit = function () {
            var newName = editTitle.val();
            if (newName != "") {
                title.text(newName);
            }

            title.show();
            editTitle.hide();
        }

        editTitle.keyup(function (event) {
            if (event.keyCode == ENTER_CODE || event.keyCode == ESC_CODE) {
                onNameEdit();
            }
        });
        editTitle.focusout(function () {
            onNameEdit();
        });

        item.show();
        ITEMS.append(item);
    }

    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");

    ITEM_NAME.keyup(function (event) {
        if (event.keyCode == ENTER_CODE) {
            onAdd();
        }
    });

    $("#add-item").click(onAdd);

    function onAdd() {
        var name = ITEM_NAME.val();

        if (name != "") {
            addItem(name);
            ITEM_NAME.val("");
        }

        ITEM_NAME.focus();
    }
});