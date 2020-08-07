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
                    image: file + "/img/serjohn.jpg",
                    children: [
                        {
                        text: { name: "Vince" },
                        image: file + "/img/vince.jpg",
                        children: [
                            {
                            text: { name: "Kyle" },
                            image: file + "/img/kylesj.jpg",
                            children: [
                                {
                                text: { name: "Diane" },
                                image: file + "/img/diane.jpg",
                                },
                                {
                                text: { name: "Natashza" },
                                image: file + "/img/natashza.jpg"
                                },
                                {
                                text: { name: "Emily" },
                                image: file + "/img/emily.jpg"
                                }
                            ]
                            },
                            {
                            text: { name: "Rin" },
                            image: file + "/img/rin.jpg"
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
                        text: { name: "Omar" },
                        image: file + "/img/omar.jpg",
                        children: [
                            {
                                text: { name: "Brittany" },
                                image: file + "/img/brittany.jpg"
                            },
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
                                        text: { name: "Kasia" },
                                        image: file + "/img/kasia.jpg"
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
                            },
                            {
                                text: { name: "Sophia" },
                                image: file + "/img/sophia_d.jpg"
                            }
                        ]  
                    }
                ]
            },
            
            // WUJU LINE
            
            
       ]
    }
};
