var rot_dict = {"builtin": 0, "diy": 0, "io": 0}

function openNav() {
  $("#side").css("width", "250px");
  $("#main").css("margin-left", "250px");
};

function closeNav() {
  $("#side").css("width", "0");
  $("#main").css("margin-left", "0");
}

function display(string) {
  var temp = "#" + string;
  if (rot_dict[string] === 0) {
    rot_dict[string] = 90;
    $(temp + "click").show(500);
  } else {
    rot_dict[string] = 0;
    $(temp + "click").hide(500);
  }
  $(temp + "anim").animate(
    {rotation: rot_dict[string]},
    {
      duration: 500,
      step: function(now) {
        $(this).css("transform", "rotate(" + now + "deg)");
      }
    }
  );
}
