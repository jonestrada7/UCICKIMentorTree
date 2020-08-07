// var file = "/page/treant/treant-js-master/examples/arm_example";
var file = "";      // FIXME: Be sure to change this to the above path when using the actual website
var htmlclass = "ninja-line";

var NINJA_LINE = [
    {
        text: { name: "David" },
        image: file + "/img/david_c.jpg",
        HTMLclass: htmlclass,
        children: [
            {
                text: { name: "Jeffrey" },
                image: file + "/img/jeffrey.jpg",
                HTMLclass: htmlclass,
                children: [
                    {
                        text: { name: "Kimhuy" },
                        image: file + "/img/kimhuy.jpg",
                        HTMLclass: htmlclass
                    },
                    {
                        text: { name: "Alex" },
                        image: file + "/img/alex.jpg",
                        HTMLclass: htmlclass
                    },
                    {
                        text: { name: "Bryant" },
                        image: file + "/img/bryant.jpg",
                        HTMLclass: htmlclass
                    }
                ]
            },
            {
                text: { name: "Jose" },
                image: file + "/img/jose.jpg",
                HTMLclass: htmlclass
            }
        ]
    }
]