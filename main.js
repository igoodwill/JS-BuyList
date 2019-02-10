$(function () {
    const ITEM = $("#item");
    const ITEM_TEMPLATE = ITEM.html();
    const ITEMS = $("#items");
    const ITEM_NAME = $("#item-name");

    ITEM.remove();

    function addItem(name) {
        var item = $(ITEM_TEMPLATE);

        item.show();
        item.find("#title").text(name);
        item.find(".remove-button").click(function () {
            item.remove();
        });

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