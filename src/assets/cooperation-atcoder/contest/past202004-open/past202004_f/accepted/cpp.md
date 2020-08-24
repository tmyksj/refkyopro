# 第二回 アルゴリズム実技検定
## F - タスクの消化
```cpp
#include <algorithm>
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> ab(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        cin >> ab[i].first >> ab[i].second;
    }

    sort(ab.begin(), ab.end());

    priority_queue<int> que;
    for (int i = 0, j = 0, k = 0; i < n; i++) {
        for (; j < n && ab[j].first - 1 <= i; j++) {
            que.push(ab[j].second);
        }

        k += que.top();
        que.pop();

        cout << k << endl;
    }
}
```
