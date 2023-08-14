var config = {
    style: 'mapbox://styles/ed1990/cll89htrx00n901pb3kms2ksx',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsbDhhNnR4bjBnaXQzZHJteG53ZXJuanYifQ.iMG4DLNPPGon9HXYFwyQxw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:sans; padding: 0.5vh; border-radius: 10px; color:#141414; font-size:1.6rem; background:#ffffff;" >Atlas of Leadership</span>',
    subtitle: '<span style=" font-family: Arial; color:#141414; font-size:2.4rem; background:#ffffff;" >Navigating Academic Legacies, Gender and Generations</span>',
    byline: '<p><a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a></p>',
    footer: '<p style="margin-top:1px; margin-bottom:1px;">14 august 2023 </p> <p style="margin-top:1px; margin-bottom:1px;">Data source: wikipedia.org, britannica.com, blackpast.org, data from the official websites of presidential administrations from multiple countries </p>',
    chapters: [
        {
            id: 'Methodology',
            alignment: 'center',        
            hidden: false,
            title: '',
            image: '',
            description: 'In an era where leadership takes center stage on the global platform, The Atlas of Leadership offers an exploration of heads of state from around the world. The interactive map takes users on a captivating journey through the lives of leaders, spotlighting their academic roots, gender dynamics, and generational influences.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Methodology2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'This piece aims to comprehensively analyze the educational background, generational dynamics, and gender representation of global heads of state - as of August 11, 2023. Data was sourced from authoritative outlets, including official presidential websites, reputable news articles, and Wikipedia entries. <a href="https://en.wikipedia.org/wiki/List_of_academic_fields" target="_blank">Here</a> is the explanation of the academic disciplines used for grouping the data.  ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },



        
        {
            id: 'Methodology3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Choosing heads of state, not of government, provides a distinctive perspective on the explicit mandates granted by the citizens. In most countries around the world, heads of state are elected through the popular vote of citizens. This process contrasts with selecting heads of government and offers a unique viewpoint into the specific mandates given by the people.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'Methodology4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<img src="./legend.png" class="center">',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Overview',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<img src="/firstchart.png">',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'Overview2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Of all current heads of state, 4.5% are Oxford University alumni, 3.4% graduated from Royal Military Academy Sandhurst, and 2.2% from Cambridge. Over half have degrees from multiple institutions.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        



        {
            id: 'Europe',
            alignment: 'center',
            hidden: false,
            title: 'Europe',
            image: '',
            description: 'In Europe, out of 43 heads of state, 8 are women, constituting 18%. This marks the highest ratio of men to women among all five continents. The predominant age group is that of Baby Boomers and Generation Xers. Most of these leaders have completed their education in the field of Professions and Applied Sciences.',
            location: {
                center: [24.233145, 45.976924],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Asia',
            alignment: 'center',
            hidden: false,
            title: 'Asia',
            image: '',
            description: 'Within Asia, among a total of 47 heads of state, a mere two are women, holding office in Singapore and India. The prevailing age group among this leadership cohort is constituted by Baby Boomers, although the presence of two Millennials is also notable. The educational background of most of these leaders lies in the realm of Professions and Applied Sciences.',
            location: {
                center: [79.421513, 42.994603],
                zoom: 4,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Africa',
            alignment: 'center',
            hidden: false,
            title: 'Africa',
            image: '',
            description: 'In the context of Africa, out of a collective of 54 heads of state, only two are women, serving as leaders in Ethiopia and Tanzania. This stands as the most meager ratio of female-to-male heads of state across the globe. Among this assembly of leaders, the prevailing generational representation leans towards Baby Boomers, although the distinction of having three Millennials is noteworthy. The academic foundation of the majority of these leaders is rooted in the domain of Professions and Applied Sciences. Furthermore, within this continent, two out of three global instances of heads of state with education in the natural sciences field can be found.',
            location: {
                center: [20.947116, 5.211306],
                zoom: 4,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'The Americas',
            alignment: 'center',
            hidden: false,
            title: 'The Americas',
            image: '',
            description: 'Across the this region, among a total of 35 heads of state, four are women. Within this group of leaders, the dominant generational presence is from the Baby Boomer cohort. This continent also stands out as the one where a majority of heads of state have pursued their education in the realm of Humanities and Social Sciences.',
            location: {
                center: [-65.595005, -6.719165],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind2',
            alignment: 'center',
            hidden: false,
            title: 'Use the interactive features',
            image: '',
            description: 'Swipe, scroll, zoom and click on each head of state for further details.',
            location: {
                center: [33.177598, 35.103830],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind3',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [33.177598, 35.103830],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'ind3',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [33.177598, 35.103830],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        


        
        

    ]
};