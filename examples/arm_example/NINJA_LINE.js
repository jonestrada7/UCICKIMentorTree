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
        text: { name: "NINJA LINE" },
        children: [
            {
                text: { name: "David" },
                image: file + "/img/david_c.jpg",
                children: [
                    {
                        text: { name: "Jeffrey" },
                        image: file + "/img/jeffrey.jpg",
                        children: [
                            {
                                text: { name: "Kimhuy" },
                                image: file + "/img/kimhuy.jpg"
                            },
                            {
                                text: { name: "Alex" },
                                image: file + "/img/alex.jpg"
                            },
                            {
                                text: { name: "Bryant" },
                                image: file + "/img/bryant.jpg"
                            }
                        ]
                    },
                    {
                        text: { name: "Jose" },
                        image: file + "/img/jose.jpg"
                    }
                ]
            }
        ]
    }
};