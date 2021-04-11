//umpires-nationality
fetch('../jsonFiles/umpires.json')
.then((data)=>data.json())
.then(function(umpires){
    // console.log(umpires);
    let country = Object.keys(umpires);
    // console.log(country);
    let count = [];
    for(nationality in umpires){
        count.push(umpires[nationality])
    }
    // console.log(count);
    new Highcharts.Chart('umpires-nationality', {
        chart: {
            type: 'cylinder',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Umpires-Nationality Cylinder Chart'
        },
        subtitle: {
            text: 'Count of umpires from different countries.'
        },
        plotOptions: {
            series: {
                depth: 25,
                colorByPoint: true
            }
        },
        xAxis:{
            title:{
                text: 'country'
            },
            categories: country
        },
        series: [{
            name: 'umpires count',
            data: count,
            showInLegend: false
        }],
        yAxis: {
            title:{
                text: 'umpires count'
            }
        }
    });

    let umpire_2d = [];
    for(umpire in umpires){
        umpire_2d.push([umpire, umpires[umpire]])
    }
    Highcharts.chart('umpires-donut', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Umpires-Nationality Donut Chart'
        },
        subtitle: {
            text: 'Count of umpires from different countries.'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'umpires count',
            data: umpire_2d
        }]
    });
})
.catch((error)=>console.log("Ohh snap, there's an error: " + error.message));


//RCB-Batsman
fetch('../jsonFiles/runs_by_rcb_batsman.json')
.then((data)=>data.json())
.then(function(batsmans){
    // console.log(batsmans);
    let name = Object.keys(batsmans);
    // console.log(name);
    let runs = [];
    for(batsman in batsmans){
        runs.push(batsmans[batsman])
    }
    // console.log(runs);
    
    new Highcharts.Chart('rcb-batsman', {
        chart: {
            type: 'cylinder',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'RCB Batsman - Run Cylinder Chart'
        },
        subtitle: {
            text: 'Total runs scored by top 10 RCB Batsman across all the seasons.'
        },
        plotOptions: {
            series: {
                depth: 25,
                colorByPoint: true
            }
        },
        xAxis:{
            title:{
                text: 'names'
            },
            categories: name
        },
        yAxis:{
            title:{
                text: 'runs'
            }
        },
        series: [{
            data: runs,
            name: 'runs',
            showInLegend: false
        }]
    });

    let rcb_2d = [];
    for(rcb in batsmans){
        rcb_2d.push([rcb, batsmans[rcb]]);
    }
    Highcharts.chart('rcb-pie', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'RCB Batsman - Run Pie Chart'
        },
        subtitle: {
            text: 'Total runs scored by top 10 RCB Batsman across all the seasons.'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'runs',
            data: rcb_2d
        }]
    });
                  
})
.catch((error)=>console.log("Ohh snap, there's an error: " + error.message));


// total runs
fetch('../jsonFiles/total_runs.json')
.then((data)=>data.json())
.then(function(team_runs){
    // console.log(team_runs);
    let teams = Object.keys(team_runs);
    // console.log(teams);
    let runs = [];
    for(team in team_runs){
        runs.push(team_runs[team])
    }
    // console.log(runs);
    new Highcharts.Chart('total-runs', {
        chart: {
            type: 'cylinder',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Total Runs - Team Cylinder Chart'
        },
        subtitle: {
            text: 'Total runs scored by teams across all the seasons.'
        },
        plotOptions: {
            series: {
                depth: 25,
                colorByPoint: true
            }
        },
        xAxis:{
            title:{
                text: 'team'
            },
            name: 'count',
            categories: teams
        },
        yAxis:{
            title:{
                text: 'runs'
            }
        },
        series: [{
            data: runs,
            name: 'runs',
            showInLegend: false
        }]
    });

    let teams_2d = [];
    for(team in team_runs){
        teams_2d.push([team, team_runs[team]])
    }
    Highcharts.chart('runs-donut', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Total Runs - Team Donut Chart'
        },
        subtitle: {
            text: 'Total runs scored by teams across all the seasons.'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'runs',
            data: teams_2d
        }]
    });

})
.catch((error)=>console.log("Ohh snap, there's an error: " + error.message));


// teams matches

fetch('../jsonFiles/matches_by_teams_seasons.json')
.then((data)=>data.json())
.then(function(matches){
    console.log(matches);
    let seasons = matches['season'];
    console.log(seasons);
    delete matches['season'];
    let teams = Object.keys(matches);
    let match = [];
    for(team in matches){
        match.push(matches[team]);
    }
    console.log(teams.length);
    console.log(match);
    new Highcharts.Chart('seasons', {
        chart:{
            type: 'column'
        },
        title:{
            text: 'Matches-Teams-Seasons Bar Chart'
        },
        subtitle:{
            text: 'Count of matches played by each teams in each season.'
        },
        xAxis:{
            categories: seasons,
            crosshair: true,
            title:{
                text: 'seasons'
            }
        },
        yAxis:{
            min: 0,
            title:{
                text: 'matches'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: teams[0],
            data: match[0]
    
        }, {
            name: teams[1],
            data: match[1]
    
        }, {
            name: teams[2],
            data: match[2]
    
        }, {
            name: teams[3],
            data: match[3]
    
        }, {
            name: teams[4],
            data: match[4]
    
        }, {
            name: teams[5],
            data: match[5]
    
        }, {
            name: teams[6],
            data: match[6]
    
        }, {
            name: teams[7],
            data: match[7]
    
        }, {
            name: teams[8],
            data: match[8]
    
        }, {
            name: teams[9],
            data: match[9]
    
        }, {
            name: teams[10],
            data: match[10]
    
        }, {
            name: teams[11],
            data: match[11]
    
        }, {
            name: teams[12],
            data: match[12]
    
        }]

    });
    
        
})
.catch((error)=>console.log("Ohh snap, there's an error: " + error.message));

