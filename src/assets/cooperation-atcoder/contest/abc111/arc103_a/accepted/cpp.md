# AtCoder Beginner Contest 111
## C - /\/\/\/
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> ev(100001, make_pair(0, 0)), od(100001, make_pair(0, 0));
    for (int i = 0; i <= 100000; i++) {
        ev[i].second = i;
        od[i].second = i;
    }

    for (int i = 0; i < n; i++) {
        int v;
        cin >> v;

        if (i % 2 == 0) {
            ev[v].first++;
        } else {
            od[v].first++;
        }
    }

    sort(ev.begin(), ev.end(), greater<pair<int, int>>());
    sort(od.begin(), od.end(), greater<pair<int, int>>());

    if (ev[0].second == od[0].second) {
        cout << min((n / 2 - ev[0].first) + (n / 2 - od[1].first),
                (n / 2 - ev[1].first) + (n / 2 - od[0].first)) << endl;
    } else {
        cout << (n / 2 - ev[0].first) + (n / 2 - od[0].first) << endl;
    }
}
```
