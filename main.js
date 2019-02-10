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
        var removeButton = item.find(".remove-button");
        var buyButton = item.find(".buy-button");
        var boughtButton = item.find(".bought-button");
        var decreaseButton = item.find("#decrease");
        var increaseButton = item.find("#increase");

        title.text(name);
        crossedTitle.text(name);
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

        item.show();
        ITEMS.append(item);
    }

    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");

    ITEM_NAME.keyup(function (event) {
        if (event.keyCode == 13) {
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