const ENTER_CODE = 13;
const ESC_CODE = 27;

$(function () {
    const ITEM = $("#item");
	const MINI_ITEM = $("#mini-item");
    const ITEM_TEMPLATE = ITEM.html();
    const MINI_ITEM_TEMPLATE = MINI_ITEM.html();
    const ITEMS = $("#items");
    const ITEMS_LEFT = $("#items-left");
    const BOUGHT_ITEMS = $("#bought-items");
    const ITEM_NAME = $("#item-name");

    ITEM.remove();
    MINI_ITEM.remove();

    function addItem(name) {
        var item = $(ITEM_TEMPLATE);
        var miniItem = $(MINI_ITEM_TEMPLATE);

        var title = item.find("#title");
		var miniItemTitle = miniItem.find("#title");
        var crossedTitle = item.find("#crossed-title");
        var editTitle = item.find("#edit-title");
        var removeButton = item.find(".remove-button");
        var buyButton = item.find(".buy-button");
        var boughtButton = item.find(".bought-button");
        var decreaseButton = item.find("#decrease");
        var increaseButton = item.find("#increase");
        var count = item.find(".count");
		var amount = miniItem.find("#amount");

        title.text(name);
        removeButton.click(function () {
            item.remove();
			miniItem.remove();
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

			BOUGHT_ITEMS.append(miniItem);
        });
        boughtButton.click(function () {
            boughtButton.hide();
            buyButton.show();
            removeButton.show();
            decreaseButton.show();
            increaseButton.show();
            title.show();
            crossedTitle.hide();

			ITEMS_LEFT.append(miniItem);
        });
        title.click(function () {
            title.hide();
            editTitle.val(title.text());
            editTitle.show();
            editTitle.focus();
        });

        var getCount = function () {
            return parseInt(count.text());
        };

        decreaseButton.click(function () {
            var newCount = getCount() - 1;
            if (newCount == 1) {
                decreaseButton.attr("disabled", "disabled");
            }
            count.text(newCount);
			amount.text(newCount);
        });
        increaseButton.click(function () {
			var newCount = getCount() + 1;
            count.text(newCount);
			amount.text(newCount);
            decreaseButton.removeAttr("disabled");
        });

        var onNameEdit = function () {
            var newName = editTitle.val().trim();
            if (newName != "") {
                title.text(newName);
				miniItemTitle.text(newName);
            }

            title.show();
            editTitle.hide();
        };

        editTitle.keyup(function (event) {
            if (event.keyCode == ENTER_CODE || event.keyCode == ESC_CODE) {
                onNameEdit();
            }
        });
        editTitle.focusout(function () {
            onNameEdit();
        });

        item.show();
		miniItem.show();
        ITEMS.append(item);
        ITEMS_LEFT.append(miniItem);
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
        var name = ITEM_NAME.val().trim();

        if (name != "") {
            addItem(name);
            ITEM_NAME.val("");
        }

        ITEM_NAME.focus();
    }
});
