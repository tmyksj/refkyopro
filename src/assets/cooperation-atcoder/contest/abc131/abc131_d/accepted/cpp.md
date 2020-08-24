# AtCoder Beginner Contest 131
## D - Megalomania
```cpp
#include <algorithm>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

bool task_comp(const pair<int, int>& a, const pair<int, int>& b) {
    return a.second < b.second;
}

int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> task(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        cin >> task[i].first >> task[i].second;
    }

    sort(task.begin(), task.end(), task_comp);

    bool flag = true;
    for (int i = 0, time = 0; i < n && flag; i++) {
        time += task[i].first;
        if (time > task[i].second) {
            flag = false;
        }
    }

    cout << (flag ? "Yes" : "No") << endl;
}
```
