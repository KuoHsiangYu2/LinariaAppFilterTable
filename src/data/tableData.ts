import faker from "faker";

interface Row {
  id: number;
  task: string;
  priority: string;
  issueType: string;
  developer: string;
  complete: number;
}

export function createRowsData(max: number) {
  max = max - 2;
  const rows: Row[] = [];

  rows.push({
    id: -1,
    task: `Task ${-1}\n多行\n中文字\n測試\n`,
    complete: Math.min(100, Math.round(Math.random() * 110)),
    priority: "Critical",
    issueType: ["Bug", "Improvement", "Epic", "Story"][
      Math.floor(Math.random() * 4)
    ],
    developer: "多行\n中文字\n測試",
  });

  rows.push({
    id: 0,
    task: `Task ${0}`,
    complete: Math.min(100, Math.round(Math.random() * 110)),
    priority: "Critical",
    issueType: ["Bug", "Improvement", "Epic", "Story"][
      Math.floor(Math.random() * 4)
    ],
    developer: "第一行文字\n第二行文字\n第三行文字\n",
  });

  for (let i = 1; i <= max; i++) {
    rows.push({
      id: i,
      task: `Task ${i}`,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority: ["Critical", "High", "Medium", "Low"][
        Math.floor(Math.random() * 4)
      ],
      issueType: ["Bug", "Improvement", "Epic", "Story"][
        Math.floor(Math.random() * 4)
      ],
      developer: faker.name.findName(),
    });
  }

  return rows;
}
