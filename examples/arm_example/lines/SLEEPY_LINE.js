// var file = "/page/treant/treant-js-master/examples/arm_example";
var file = "";      // FIXME: Be sure to change this to the above path when using the actual website
var htmlclass = "sleepy-line";

var SLEEPY_LINE = [
    {
    text: { name: "Serjohn" },
    image: file + "/img/serjohn.jpg",
    HTMLclass: htmlclass,
    children: [
        {
        text: { name: "Vince" },
        image: file + "/img/vince.jpg",
        HTMLclass: htmlclass,
        children: [
            {
            text: { name: "Kyle" },
            image: file + "/img/kylesj.jpg",
            HTMLclass: htmlclass,
            children: [
                {
                text: { name: "Diane" },
                image: file + "/img/diane.jpg",
                HTMLclass: htmlclass
                },
                {
                text: { name: "Natashza" },
                image: file + "/img/natashza.jpg",
                HTMLclass: htmlclass
                },
                {
                text: { name: "Emily" },
                image: file + "/img/emily.jpg",
                HTMLclass: htmlclass
                }
            ]
            },
            {
            text: { name: "Rin" },
            image: file + "/img/rin.jpg",
            HTMLclass: htmlclass
            }
        ]
        }
    ]
    }
]