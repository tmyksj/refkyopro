import { Builder, By, ThenableWebDriver, WebElement } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

(async () => {
  const driver: ThenableWebDriver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new Options()
      .addArguments("--disable-gpu", "--headless", "-no-sandbox"))
    .build();
  const timeoutMs: number = 1000;

  const contestList: {
    key: string,
    taskList: {
      key: string,
      title: string,
    }[],
    title: string,
  }[] = [];

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

      const elements: WebElement[] = await driver.findElements(By.css("table tbody tr td:nth-child(2) a"));
      for (let j = 0; j < elements.length; j++) {
        const href = await elements[j].getAttribute("href");
        const innerHTML = await elements[j].getAttribute("innerHTML");

        contestList.push({
          key: href.substring(href.lastIndexOf("/") + 1),
          taskList: [],
          title: innerHTML,
        });
      }

      await new Promise((resolve): void => {
        setTimeout(resolve, timeoutMs);
      });
    }

    for (let i = 0; i < contestList.length; i++) {
      await driver.get(`https://atcoder.jp/contests/${contestList[i].key}/tasks?lang=ja`);

      const elements: WebElement[] = await driver.findElements(By.css("table tbody tr td:nth-child(2) a"));
      for (let j = 0; j < elements.length; j++) {
        const href = await elements[j].getAttribute("href");
        const innerHTML = await elements[j].getAttribute("innerHTML");

        contestList[i].taskList.push({
          key: href.substring(href.lastIndexOf("/") + 1),
          title: innerHTML,
        });
      }

      await new Promise((resolve): void => {
        setTimeout(resolve, timeoutMs);
      });
    }

    console.log(JSON.stringify({
      contestList: contestList,
    }));
  } finally {
    await driver.quit();
  }
})();
