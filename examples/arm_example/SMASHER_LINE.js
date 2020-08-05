// let file = "/page/treant/treant-js-master/examples/arm_example";
let file = "";      // FIXME: Be sure to change this to the above path when using the actual website

var MentorTree = {
    chart: {
        container: "#OrganiseChart-simple",
        
        rootOrientation: "NORTH",

        nodeAlight: "TOP",
        
        levelSeparation: 50,
        
        siblingSeparation: 100,

        animateOnInit: true,
        
        scrollbar: "None",            

    
        connectors: {
            type: "step",
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
        text: { name: "SMASHER LINE" },
            children: [
                {
                    text: { name: "Phu" },
                    image: file + "/img/phu.jpg",
                    children: [
                        {
                            text: { name: "Kyle" },
                            image: file + "/img/kyle.jpg"
                        },
                        {
                            text: { name: "Darren" },
                            image: file + "/img/darren.jpg"
                        },
                        {
                            text: {name: "Brandon"},
                            image: file + "/img/brandon.jpg"
                        }
                    ]
                }
            ]
        }
    };