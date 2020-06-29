var MATCHA_LINE = {
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
        text: { name: "MATCHA LINE" },
        children: [
            {
                text: { name: "Noah" },
                image: "img/ML1.jpg",
                children: [
                    {
                        text: { name: "Sydney" },
                        image: "img/ML2.jpg",
                        children: [
                            {
                                text: { name: "Travis" },
                                image: "img/ML5.jpg",
                            },
                            {
                                text: { name: "Elton" },
                                image: "img/ML6.jpg",
                            }
                        ]
                    },
                    {
                        text: { name: "Ruhiyah" },
                        image: "img/ML4.jpg"
                    },
                    {
                        text: { name: "Kayla" },
                        image: "img/ML3.jpg",
                        children: [
                            {
                                text: { name: "Justin" },
                                image: "img/ML7.jpg",
                            },
                            {
                                text: { name: "Kit" },
                                image: "img/ML10.jpg",
                                children: [
                                    {
                                        text: { name: "Tin" },
                                        image: "img/ML8.jpg"
                                    },
                                    {
                                        text: { name: "Nicole" },
                                        image: "img/ML9.jpg"
                                    }
                                ]
                            }
                        ]
                    },
                    
                ]
            }
        ]
    }
};