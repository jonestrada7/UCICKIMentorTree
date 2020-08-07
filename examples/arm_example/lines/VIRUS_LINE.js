// let file = "/page/treant/treant-js-master/examples/arm_example";
var file = "";      // FIXME: Be sure to change this to the above path when using the actual website
var htmlclass = "virus-line";

var VIRUS_LINE = [
    {
        text: { name: "Steven" },
        image: file + "/img/steven.jpg",
        HTMLclass: htmlclass,
        children: [
            {
                text: { name: "Brandon" },
                image: file + "/img/brandon_k.jpg",
                HTMLclass: htmlclass,
                children: [
                    {
                        text: { name: "Audrey" },
                        image: file + "/img/audrey.jpg",
                        HTMLclass: htmlclass
                    },
                    {
                        text: { name: "Rishi" },
                        image: file + "/img/rishi.jpg",
                        HTMLclass: htmlclass
                    }
                ]
            },
            {
                text: { name: "???" },
                image: file + "/img/???.jpg",
                HTMLclass: htmlclass
            },
            {
                text: { name: "Tina" },
                image: file + "/img/tina.jpg",
                HTMLclass: htmlclass,
                children: [
                    {
                        text: { name: "Seth" },
                        image: file + "/img/seth.jpg",
                        HTMLclass: htmlclass
                    },
                    {
                        text: { name: "Zitong" },
                        image: file + "/img/zitong.jpg",
                        HTMLclass: htmlclass
                    }
                ]
            }
        ]
    }
]