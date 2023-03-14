var selectedNumber = 0;

for (let i=0; i<5; i++) {
    $(".rating-number").eq(i).on("click", {value: (i+1)}, function(event) {
        selectedNumber = event.data.value;
        $(".rating-number").removeClass("pressed");
        $("#no-" + selectedNumber).addClass("pressed");

    })

    $(".rating-number").hover(
        function() {$(this).addClass("hover")},
        function() {$(this).removeClass("hover")}
    );
}



$(".submit-button").on("click", () => {
    if (selectedNumber === 0) {
        alert("Please give us a rating before submitting")
    }
    else {
        $(".rating-state").toggleClass("hidden");
        $(".thank-you-state").toggleClass("hidden");
        $(".rating-selection").text("You selected " + selectedNumber + " out of 5") ;
    }
})