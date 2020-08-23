import { execSync } from "child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";

import { CooperationAtcoderContestDto } from "../../../src/app/domains/cooperation-atcoder/dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderIndexDto } from "../../../src/app/domains/cooperation-atcoder/dtos/cooperation-atcoder-index/cooperation-atcoder-index.dto";
import { CooperationAtcoderTaskDto } from "../../../src/app/domains/cooperation-atcoder/dtos/cooperation-atcoder-task/cooperation-atcoder-task.dto";

(async () => {
  execSync("wget -O /tmp/master.zip https://github.com/tmyksj/atcoder/archive/master.zip");
  execSync("unzip /tmp/master.zip -d /tmp");

  const index: CooperationAtcoderIndexDto = JSON.parse(readFileSync("../../src/assets/cooperation-atcoder/index.json").toString());
  index.contestList.forEach((contest: CooperationAtcoderContestDto): void => {
    contest.taskList.forEach((task: CooperationAtcoderTaskDto): void => {
      if (existsSync(`/tmp/atcoder-master/${contest.name}/${task.label} - ${task.name}/main.cpp`)
        && !existsSync(`../../src/assets/cooperation-atcoder/contest/${contest.key}/${task.key}/accepted/cpp.md`)) {
        mkdirSync(`../../src/assets/cooperation-atcoder/contest/${contest.key}/${task.key}/accepted/`, {
          recursive: true,
        });
        writeFileSync(`../../src/assets/cooperation-atcoder/contest/${contest.key}/${task.key}/accepted/cpp.md`, `# ${contest.name}
## ${task.label} - ${task.name}
\`\`\`cpp
${readFileSync(`/tmp/atcoder-master/${contest.name}/${task.label} - ${task.name}/main.cpp`).toString()}\`\`\`
`);
      }
    });
  });
})();
