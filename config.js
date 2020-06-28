var config = {
    style: 'mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d',
    accessToken: 'sk.eyJ1IjoiYWRyaW52b3IiLCJhIjoiY2tic253dmYwMDF0aTJ3cHJraWIyd2RidiJ9.1f7aCoft2fgAVce8Op4fPQ',
    showMarkers: false,
    alignment: 'left',
    theme: ' satellite',
    title: '广清城际下行线',
    subtitle: '2020.5.12-2020.5.24',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'glacier-np',
            title: '花都站',
            image: 'img/花都.png',
            description: '始发站正确输入数据、正确选择载频、预选ATO模式，车站立折的列车还需选择【立即折返】和【停准停稳】',
            location: {
                    center: [113.19817, 23.37941],
                    zoom: 18.73,
                    pitch: 45.00,
                    bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'harrison1998',
            title: '乐同站',
            image: 'img/乐同.png',
            description: 'XI道上行出站信号机设在线路右侧；站内为1‰坡道，站内停车注意防溜',
            location: {
                    center: [113.16981, 23.42614],
                    zoom: 16.20,
                    pitch: 60.00,
                    bearing: -38.40
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'harrison2015',
            title: '狮岭站',
            image: 'img/狮岭.png',
            description: '下行反方向进站信号机设在线路右侧',
            location: {
                    center: [113.14345, 23.45636],
                    zoom: 14.88,
                    pitch: 0.00,
                    bearing: -48.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'blackfoot1998',
            title: '银盏站',
            image: 'img/银盏.png',
            description: 'II道下行出站信号机设在线路右侧',
            location: {
                    center: [113.12465, 23.55206],
                    zoom: 19.07,
                    pitch: 60.00,
                    bearing: -40.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'blackfoot2015',
            title: '龙塘镇站',
            image: 'img/龙塘镇.png',
            description: 'I下行反方向进站信号机设在线路右侧；II道下行发车进路信号机设置在线路右侧与4道下行发车进路信号机并排安装。地面点灯运行时注意确认本股道信号机显示。',
            location: {
                    center: [113.07852, 23.60878],
                    zoom: 15.80,
                    pitch: 60.00,
                    bearing: 61.60
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'agassiz1998',
            title: '清城站',
            image: 'img/清城.png',
            description: '下行反方向进站信号机设在线路右侧',
            location: {
                    center: [113.06086, 23.65586],
                    zoom: 18.62,
                    pitch: 0.00,
                    bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
