// var file = "/page/treant/treant-js-master/examples/arm_example";
var file = "";      // FIXME: Be sure to change this to the above path when using the actual website

var MentorTree = {
    chart: {
        container: "#OrganiseChart-simple",
        
        rootOrientation: "NORTH",

        nodeAlight: "TOP",
        
        levelSeparation: 50,
        
        siblingSeparation: 100,

        animateOnInit: true,
        
        scrollbar: "native",            

    
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
            HTMLclass: "mentorline",
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
       text: { name: "UCI CKI LINES" },
       children: [
            {
                text: { name: "ABB/ABG LINE" },
                children: ABBABG_LINE,
                collapsed: true,
                HTMLclass: "abbabg-line"
            },
        
            {
                text: { name: "BOTTLE FLIP LINE"},
                children: BOTTLE_FLIP_LINE,
                collapsed: true,
                HTMLclass: "bottle-flip-line"
            },
            
            {
                text: { name: "F BOY LINE" },
                children: F_BOY_LINE,
                collapsed: true,
                HTMLclass: "f-boy-line"
            },
            
            {
                text: { name: "INDECISIVE LINE" },
                children: INDECISIVE_LINE,
                collapsed: true,
                HTMLclass: "indecisive-line"
            },
            
            {
                text: { name: "MATCHA LINE" },
                children: MATCHA_LINE,
                collapsed: true,
                HTMLclass: "matcha-line"
            },
            
            {
                text: { name: "NINJA LINE" },
                children: NINJA_LINE,
                collapsed: true,
                HTMLclass: "ninja-line"
            },
           
            {               
                text: { name: "SLEEPY LINE" },
                children: SLEEPY_LINE,
                collapsed: true,
                HTMLclass: "sleepy-line"
            },
            
            {               
                text: { name: "SMASHER LINE" },
                children: SMASHER_LINE,
                collapsed: true,
                HTMLclass: "smasher-line"
            },
            
            {   
                text: { name: "WUJU LINE" },
                children: WUJU_LINE,
                collapsed: true,
                HTMLclass: "wuju-line" 
            }
        ]        
    }
};
