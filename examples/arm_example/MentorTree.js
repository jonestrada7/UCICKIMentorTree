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
    
    // Sleepy Line

    nodeStructure: {
       text: { name: "UCI CKI LINES" },
       children: [
      
            // SLEEPY LINE
            
            {	                
                text: { name: "Sleepy line" },
                children: [
                    {
                    text: { name: "Serjohn" },
                    image: file + "/img/Diyen.jpg",
                    children: [
                        {
                        text: { name: "Vince" },
                        image: "https://i.imgur.com/vmL3WQA.jpg",
                        children: [
                            {
                            text: { name: "Kyle" },
                            image: "https://i.imgur.com/vmL3WQA.jpg",
                            children: [
                                {
                                text: { name: "Diane" },
                                image: "https://i.imgur.com/vmL3WQA.jpg",
                                },
                                {
                                text: { name: "Natashza" },
                                image: "https://i.imgur.com/vmL3WQA.jpg"
                                },
                                {
                                text: { name: "Emily" },
                                image: "https://i.imgur.com/vmL3WQA.jpg"
                                }
                            ]
                            },
                            {
                            text: { name: "Rin" },
                            image: "https://i.imgur.com/vmL3WQA.jpg"
                            }
                        ]
                        }
                    ]
                    }
                ]
            },
            
            // MATCHA LINE
            
	        {
                text: { name: "MATCHA LINE" },
                children: [
                    {
                        text: { name: "Noah" },
                        image: file + "/img/ML1.jpg",
                        children: [
                            {
                                text: { name: "Sydney" },
                                image: file + "/img/ML2.jpg",
                                children: [
                                    {
                                        text: { name: "Travis" },
                                        image: file + "/img/ML5.jpg",
                                    },
                                    {
                                        text: { name: "Elton" },
                                        image: file + "/img/ML6.jpg",
                                    }
                                ]
                            },
                            {
                                text: { name: "Ruhiyah" },
                                image: file + "/img/ML4.jpg"
                            },
                            {
                                text: { name: "Kayla" },
                                image: file + "/img/ML3.jpg",
                                children: [
                                    {
                                        text: { name: "Justin" },
                                        image: file + "/img/ML7.jpg",
                                    },
                                    {
                                        text: { name: "Kit" },
                                        image: file + "/img/ML10.jpg",
                                        children: [
                                            {
                                                text: { name: "Tin" },
                                                image: file + "/img/ML8.jpg"
                                            },
                                            {
                                                text: { name: "Nicole" },
                                                image: file + "/img/ML9.jpg"
                                            }
                                        ]
                                    }
                                ]
                            }
                            
                        ]
                    }
                ]
            },
            
            // WUJU LINE
            
            {
                text: { name: "WUJU LINEE" },
                children: [
                    {
                        text: { name: "Noah" },
                        image: file + "/img/ML1.jpg",                            
                    }
                ]
            }
            
            
       ]
    }
};
