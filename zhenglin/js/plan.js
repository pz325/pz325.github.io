google.charts.load("current", { packages: ["gantt"] });
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

function daysInWeek(weeks) {
  return weeks * 7;
}

const getMathPlan = () => {
  let planData = new google.visualization.DataTable();
  planData.addColumn("string", "Task ID");
  planData.addColumn("string", "Task Name");
  planData.addColumn("date", "Start Date");
  planData.addColumn("date", "End Date");
  planData.addColumn("number", "Duration");
  planData.addColumn("number", "Percent Complete");
  planData.addColumn("string", "Dependencies");

  planData.addRows([
    [
      "KS3HighLevel",
      "KS3 High Level",
      new Date("2018-09-10"),
      new Date("2018-09-30"),
      null,
      0,
      null
    ],
    [
      "RulerCompass",
      "Ruler and Compass",
      new Date("2018-10-01"),
      new Date("2018-10-21"),
      null,
      0,
      "KS3HighLevel"
    ],
    [
      "CGP13",
      "CGP 13+",
      new Date("2018-10-22"),
      new Date("2018-12-29"),
      null,
      0,
      "RulerCompass"
    ],
    [
      "ISEB13",
      "ISEB 13+",
      new Date("2019-03-03"),
      new Date("2019-05-05"),
      null,
      0,
      "CGP13"
    ],
    [
      "Shanghai7",
      "Shanghai Math Project 7",
      new Date("2018-09-10"),
      new Date("2018-10-28"),
      null,
      0,
      null
    ],
    [
      "Shanghai8",
      "Shanghai Math Project 8",
      new Date("2018-10-29"),
      new Date("2019-05-05"),
      null,
      0,
      "Shanghai7"
    ]
  ]);

  return planData;
};

function drawChart() {
  const options = {
    height: 275,
    gantt: {
      criticalPathEnabled: true,
      criticalPathStyle: {
        stroke: "#e64a19",
        strokeWidth: 5
      },
      arrow: {
        angle: 100,
        width: 5,
        color: "green",
        radius: 0
      }
    }
  };

  const chart = new google.visualization.Gantt(
    document.getElementById("math_chart_div")
  );

  chart.draw(getMathPlan(), options);
}
