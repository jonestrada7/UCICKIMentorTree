var ORANGE_LINE = {
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
            connectorsAnimation: "linear",
            connectorsSpeed: 700
        }
    },
    
    nodeStructure: {
        text: { name: "ORANGE LINE" },
            children: [
                {
                    text: { name: "Arman" },
                    image: "img/arm.jpg",
                    children: [
                        {
                            text: { name: "Monica" },
                            image: "img/mon.jpg"
                        },
                        {
                            text: { name: "???" },
                            image: "img/que.jpeg"
                        }
                    ]
                }
            ]
        }
    };