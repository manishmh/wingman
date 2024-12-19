export const AtAGlanceDummy = [
    {
      "title": "consultations",
      "data": 24,
      "performance": "increase",
      "rate": "15%"
    },
    {
      "title": "orders placed",
      "data": 12,
      "performance": "decrease",
      "rate": "15%"
    },
    {
      "title": "conversion",
      "data": "50%",
      "performance": "decrease",
      "rate": "15%"
    },
    {
      "title": "total sales value",
      "data": "$2,400",
      "performance": "increase",
      "rate": "15%"
    },
    {
      "title": "avg order value",
      "data": "$240",
      "performance": "increase",
      "rate": "15%"
    },
    {
      "title": "commission paid",
      "data": "$240",
      "performance": "increase",
      "rate": "15%"
    }
]

export const Insights = {
  "title": "Consultations",
  "labels": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  "datasets": [
    {
      "label": "Incoming",
      "data": [30, 35, 40, 45, 50, 55, 60],
      "type": "line",
      "color": "#A3A3A3", 
      "style": "dashed"
    },
    {
      "label": "Answered",
      "data": [30, 32, 35, 50, 38, 40, 42],
      "type": "line",
      "color": "#14B8A6" 
    },
    {
      "label": "Experts online",
      "data": [10, 12, 15, 20, 14, 16, 18],
      "type": "bar",
      "color": "#FEF08A" 
    }
  ],
  "yAxes": [
    {
      "label": "Consultations",
      "range": [0, 60]
    },
    {
      "label": "Experts online",
      "range": [0, 20]
    }
  ]
}
  