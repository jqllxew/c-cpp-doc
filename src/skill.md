---
title: 技能
icon: fab fa-markdown
order: 1
category:
  - 使用指南
tag:
  - Markdown
---

::: echarts 技能雷达图

```json
{
  "legend": {
    "data": ["张三", "李四"]
  },
  "radar": {
    "indicator": [
      { "name": "语言基础", "max": 5 },
      { "name": "计算机网络", "max": 5 },
      { "name": "数据结构&算法", "max": 5 },
      { "name": "Windows开发", "max": 5 },
      { "name": "Linux开发", "max": 5 }
    ]
  },
  "series": [
    {
      "name": "Budget vs spending",
      "type": "radar",
      "data": [
        {
          "value": [3, 2, 4, 0, 1],
          "name": "张三",
		  "areaStyle": {
	        "color": "rgba(255, 99, 132, 0.2)"
		  }
        },
        {
          "value": [1, 5, 2, 2, 4],
          "name": "李四",
   		  "areaStyle": {
	        "color": "rgba(54, 162, 235, 0.2)"
		  }
        }
      ]
    }
  ]
}
```

:::


::: chart 技能雷达图

```json
{
  "type": "radar",
  "data": {
    "labels": ["语言基础", "计算机网络", "数据结构&算法", "Windows开发", "Linux开发"],
    "datasets": [
      {
        "label": "张三",
        "data": [3, 2, 4, 0, 1],
        "fill": true,
        "backgroundColor": "rgba(255, 99, 132, 0.2)",
        "borderColor": "rgb(255, 99, 132)",
        "pointBackgroundColor": "rgb(255, 99, 132)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(255, 99, 132)"
      },
      {
        "label": "李四",
        "data": [1, 5, 2, 2, 4],
        "fill": true,
        "backgroundColor": "rgba(54, 162, 235, 0.2)",
        "borderColor": "rgb(54, 162, 235)",
        "pointBackgroundColor": "rgb(54, 162, 235)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(54, 162, 235)"
      }
    ]
  },
  "options": {
    "elements": {
      "line": {
        "borderWidth": 3
      }
    }
  }
}
```

:::
