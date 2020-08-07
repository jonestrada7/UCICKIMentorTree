// var file = "/page/treant/treant-js-master/examples/arm_example";
var file = "";      // FIXME: Be sure to change this to the above path when using the actual website
var htmlclass = "matcha-line";

var MATCHA_LINE = [
    {
        text: { name: "Omar" },
        image: file + "/img/omar.jpg",
        HTMLclass: htmlclass,
        children: [
            {
                text: { name: "Brittany" },
                image: file + "/img/brittany.jpg",
                HTMLclass: htmlclass
            },
            {
                text: { name: "Noah" },
                image: file + "/img/ML1.jpg",
                HTMLclass: htmlclass,
                children: [
                    {
                        text: { name: "Sydney" },
                        image: file + "/img/ML2.jpg",
                        HTMLclass: htmlclass,
                        children: [
                            {
                                text: { name: "Travis" },
                                image: file + "/img/ML5.jpg",
                                HTMLclass: htmlclass
                            },
                            {
                                text: { name: "Elton" },
                                image: file + "/img/ML6.jpg",
                                HTMLclass: htmlclass
                            }
                        ]
                    },
                    {
                        text: { name: "Ruhiyah" },
                        image: file + "/img/ML4.jpg",
                        HTMLclass: htmlclass
                    },
                    {
                        text: { name: "Kasia" },
                        image: file + "/img/kasia.jpg",
                        HTMLclass: htmlclass
                    },
                    {
                        text: { name: "Kayla" },
                        image: file + "/img/ML3.jpg",
                        HTMLclass: htmlclass,
                        children: [
                            {
                                text: { name: "Justin" },
                                image: file + "/img/ML7.jpg",
                                HTMLclass: htmlclass
                            },
                            {
                                text: { name: "Kit" },
                                image: file + "/img/ML10.jpg",
                                HTMLclass: htmlclass,
                                children: [
                                    {
                                        text: { name: "Tin" },
                                        image: file + "/img/ML8.jpg",
                                        HTMLclass: htmlclass
                                    },
                                    {
                                        text: { name: "Nicole" },
                                        image: file + "/img/ML9.jpg",
                                        HTMLclass: htmlclass
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                text: { name: "Sophia" },
                image: file + "/img/sophia_d.jpg",
                HTMLclass: htmlclass
            }
        ]  
    }
]
