// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("800");
        } else {
            $(".post-box")
                .not("." + value)
                .hide(800);
            $(".post-box")
                .filter("." + value)
                .show("800");
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });

    // Add List functionality
    $("#add-list").click(function () {
        // Find the last list item and clone it
        let lastItem = $("#list-container .list-item").last();
        let newItem = lastItem.clone();
        // Update the content if needed, here we just increment the item number                                                                                                                       
        let newItemNumber = parseInt(newItem.text().match(/\d+/)[0]) + 1;
        newItem.text("Item " + newItemNumber);
        // Append the new item to the list
        $("#list-container").append(newItem);
    });
});

