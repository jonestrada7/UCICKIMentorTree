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
        text: { name: "INDECISIVE LINE" },
        children: [
            {
                text: { name: "???" },
                image: file + "/img/???.jpg",
                children: [
                    {
                        text: { name: "Alexis" },
                        image: file + "/img/alexis.jpg",
                        children: [
                            {
                                text: {name: "Chaya"},
                                image: file + "/img/chaya.jpg"
                            },
                            {
                                text: {name: "Michelle"},
                                image: file + "/img/michelle.jpg"
                            },
                            {
                                text: {name: "Liane"},
                                image: file + "/img/liane.jpg"
                            }

                        ]
                    }
                ]
            }
        ]
    }
};