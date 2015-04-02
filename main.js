
    $(document).ready(aloitus);

    function aloitus() {
      $("#image1").click(onClickImage1);
    }

    function onClickImage1() {
      $("#image1").fadeOut(500).fadeIn(1500);
    }
