var htmlclass = "cinema-line";

var CINEMA_LINE = [
    {
        text: { name: "Matthew" },
        image: treePath + "/img/matthew.jpg",
        HTMLclass: htmlclass,
        children: [
            {
                text: { name: "Elisa" },
                image: treePath + "/img/elisa.jpg",
                HTMLclass: htmlclass
            },
            {
                text: { name: "Alvin" },
                image: treePath + "/img/alvin.jpg",
                HTMLclass: htmlclass,
                children: [
                    {
                        text: { name: "Camelle" },
                        image: treePath + "/img/camelle.jpg",
                        HTMLclass: htmlclass
                    },
                    {
                        text: { name: "Joe" },
                        image: treePath + "/img/joe.jpg",
                        HTMLclass: htmlclass
                    }
                ]
            }
        ]
    }
]