// let file = "/page/treant/treant-js-master/examples/arm_example";
let file = "";      // FIXME: Be sure to change this to the above path when using the actual website

var ABBABG_LINE = {
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
    
    // ABB/ABG Line

    nodeStructure: {
        text: { name: "ABB/ABG LINE" },
        children: [
            {
                text: { name: "James" },
                image: "img/jamesmolamphy.jpg",
                children: [
                    {
                        text: { name: "Kenneth Lorn Seng" },
                        image: "img/kennethlornseng.jpg",
                    },
                    {
                        text: { name: "Terry" },
                        image: "img/terrynguyen.jpg"
                    }
                ]
            }
        ]
    }
};