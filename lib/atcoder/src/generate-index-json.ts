import { Builder, By, ThenableWebDriver, WebElement } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

import { CooperationAtcoderContestDto } from "../../../src/app/domains/cooperation-atcoder/dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderIndexDto } from "../../../src/app/domains/cooperation-atcoder/dtos/cooperation-atcoder-index/cooperation-atcoder-index.dto";

(async () => {
  const scrapeContestList: () => Promise<CooperationAtcoderContestDto[]> = async (): Promise<CooperationAtcoderContestDto[]> => {
    const next: () => Promise<any> = async (): Promise<any> => {
      return new Promise<any>((resolve: (value: any) => void): void => {
        setTimeout(resolve, 1000);
      });
    };

    const driver: ThenableWebDriver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new Options()
        .addArguments("--disable-gpu", "--headless", "-no-sandbox"))
      .build();

    const contestList: CooperationAtcoderContestDto[] = [];

    try {
      for (let i = 0, last = 1; i < last; i++) {
        await driver.get(`https://atcoder.jp/contests/archive?lang=ja&page=${i + 1}`);

        if (i == 0) {
          await driver
            .findElement(By.css("ul.pagination li:last-child a"))
            .getAttribute("innerHTML")
            .then((value: string): void => {
              last = parseInt(value, 10);
            });
        }

        const elements: WebElement[] = await driver.findElements(By.css("table tbody tr"));
        for (let j = 0; j < elements.length; j++) {
          const href: string = await elements[j].findElement(By.css("td:nth-child(2) a")).getAttribute("href");

          const startedAt: string = await elements[j].findElement(By.css("td:nth-child(1) time")).getAttribute("innerHTML");
          const name: string = await elements[j].findElement(By.css("td:nth-child(2) a")).getAttribute("innerHTML");
          const duration: string = await elements[j].findElement(By.css("td:nth-child(3)")).getAttribute("innerHTML");
          const ratedRange: string = await elements[j].findElement(By.css("td:nth-child(4)")).getAttribute("innerHTML");

          contestList.push({
            duration: duration,
            key: href.substring(href.lastIndexOf("/") + 1),
            name: name,
            taskList: [],
            ratedRange: ratedRange,
            startedAt: startedAt,
          });
        }

        await next();
      }

      for (let i = 0; i < contestList.length; i++) {
        await driver.get(`https://atcoder.jp/contests/${contestList[i].key}/tasks?lang=ja`);

        const elements: WebElement[] = await driver.findElements(By.css("table tbody tr"));
        for (let j = 0; j < elements.length; j++) {
          const href: string = await elements[j].findElement(By.css("td:nth-child(2) a")).getAttribute("href");

          const label: string = await elements[j].findElement(By.css("td:nth-child(1) a")).getAttribute("innerHTML");
          const name: string = await elements[j].findElement(By.css("td:nth-child(2) a")).getAttribute("innerHTML");
          const timeLimit: string = await elements[j].findElement(By.css("td:nth-child(3)")).getAttribute("innerHTML");
          const memoryLimit: string = await elements[j].findElement(By.css("td:nth-child(4)")).getAttribute("innerHTML");

          contestList[i].taskList.push({
            key: href.substring(href.lastIndexOf("/") + 1),
            label: label,
            memoryLimit: memoryLimit,
            name: name,
            timeLimit: timeLimit,
          });
        }

        await next();
      }

      return contestList;
    } finally {
      await driver.quit();
    }
  };

  const index: CooperationAtcoderIndexDto = {
    contestList: await scrapeContestList(),
  };

  console.log(JSON.stringify(index));
})();
