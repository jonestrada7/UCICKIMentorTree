var WUJU_LINE = {
        chart: {
            container: "#OrganiseChart-simple",
            
            rootOrientation: "NORTH",
            
            levelSeparation: 50,
            
            siblingSeparation: 100,

            animateOnInit: true,
            
            scrollbar: "fancy",            

            connectors: {
                type: "bCurve",
                style: {
                    "stroke": "#5BD5EE",
                    "stroke-width": 2,
                    "stroke-linecap": "butt",
                    "stroke-width": 5
                }
            },
            
            node: {
                collapsable: true
            },

            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },

        nodeStructure: {
            text: { name: "WUJU LINE" },
            children: [
                {
                    text: { name: "Andre" },
                    image: "img/andre.jpg",
                    children: [
                        {
                            text: { name: "Ngan" },
                            image: "img/ngan.jpg",
                        },
                        {
                            text: { name: "Andy" },
                            image: "img/andy.jpg"
                        }
                    ]
                }
            ]
        }
    };