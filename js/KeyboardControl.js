

KeyboardControl = {
    active: function (words) {
        var allKey = document.querySelectorAll("td").forEach(k =>{
            k.style.background = "white";
        })

        words.forEach(word => {
            var key = document.getElementById(word.word)
            switch (word.action) {
                case "right":
                    key.style.background = "#F8AE95";
                    break;
                case "left":
                    key.style.background = "#D99DF9";
                    break;
                case "jump-ahead":
                    key.style.background = "#FFEF9D";
                    break;
                case "jump-back":
                    key.style.background = "#86D5F4";
                    break;
                case "up":
                    key.style.background = "#AAF088";
                    break;
            }
        });
    }

}

