var MentorTree = {
    chart: {
        container: "#OrganiseChart-simple",
        
        rootOrientation: "NORTH",

        // nodeAlign: "TOP",
        
        levelSeparation: 50,
        
        siblingSeparation: 70,

        animateOnInit: true,
        
        scrollbar: "native",
    
        /* easing formulas: https://dmitrybaranovskiy.github.io/raphael/reference.html#Raphael.easing_formulas */
        connectors: {
            type: "curve",
            style: {
                "stroke": "#b8e2e3",
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
            nodeAnimation: "easeOutBack",        // easeOutBounce
            nodeSpeed: 700,
            connectorsAnimation: "backOut",         // bounce
            connectorsSpeed: 700
        }
    },

    nodeStructure: {
       text: { name: "UCI CKI LINES" },
       connectors: {
            type: "step",
            style: {
                "stroke": "#68c4d9",
                "stroke-width": 2,
                "stroke-linecap": "butt",
                "stroke-width": 5
            }
        },
        HTMLclass: "line-header",
        children: [
            {
                text: { name: "LINES A-F" },
                children: A_F_LINES,
                collapsed: true,
                HTMLclass: "a-f-lines line-name"
            },

            {

                text: { name: "ABB/ABG LINE" },
                children: ABBABG_LINE,
                collapsed: true,
                HTMLclass: "abbabg-line line-name"
            },

            {
                text: { name: "BOTTLE FLIP LINE"},
                children: BOTTLE_FLIP_LINE,
                collapsed: true,
                HTMLclass: "bottle-flip-line line-name"
            },
           
            {
                text: { name: "BOUJEE LINE"},
                children: BOUJEE_LINE,
                collapsed: true,
                HTMLclass: "boujee-line line-name"
            },    
           
            {
                text: { name: "CINEMA LINE" },
                children: CINEMA_LINE,
                collapsed: true,
                HTMLclass: "cinema-line line-name"
            },
            
            {
                text: { name: "F BOY LINE" },
                children: F_BOY_LINE,
                collapsed: true,
                HTMLclass: "f-boy-line line-name"
            },
            
            {
                text: { name: "HOOPS/RWS LINE" },
                children: HOOPS_LINE,
                collapsed: true,
                HTMLclass: "hoops-line line-name"
            },

            {
                text: { name: "INDECISIVE LINE" },
                children: INDECISIVE_LINE,
                collapsed: true,
                HTMLclass: "indecisive-line line-name"
            },
            
            {
                text: { name: "MATCHA LINE" },
                children: MATCHA_LINE,
                collapsed: true,
                HTMLclass: "matcha-line line-name"
            },
            
            {
                text: { name: "NINJA LINE" },
                children: NINJA_LINE,
                collapsed: true,
                HTMLclass: "ninja-line line-name"
            },
           
            {         
                text: { name: "SLEEPY LINE" },
                children: SLEEPY_LINE,
                collapsed: true,
                HTMLclass: "sleepy-line line-name"
            },
            
            {   
                text: { name: "SMASHER LINE" },
                children: SMASHER_LINE,
                collapsed: true,
                HTMLclass: "smasher-line line-name"
            },
            
            {
                text: { name: "VIRUS LINE" },
                children: VIRUS_LINE,
                collapsed: true,
                HTMLclass: "virus-line line-name"
            },

            {
                text: { name: "WEENIE LINE" },
                children: WEENIE_LINE,
                collapsed: true,
                HTMLclass: "weenie-line line-name"
            },

            {
                text: { name: "WUJU LINE" },
                children: WUJU_LINE,
                collapsed: true,
                HTMLclass: "wuju-line line-name" 
            }
        ]        
    }
};
