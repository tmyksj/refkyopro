# AtCoder Beginner Contest 138
## C - Alchemist
```cpp
#include <algorithm>
#include <functional>
#include <iomanip>
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    priority_queue<double, vector<double>, greater<double>> que;
    for (int i = 0; i < n; i++) {
        double v;
        cin >> v;
        que.push(v);
    }

    while (que.size() > 1) {
        double v1 = que.top(); que.pop();
        double v2 = que.top(); que.pop();
        que.push((v1 + v2) / 2);
    }

    cout << setprecision(12) << fixed << que.top() << endl;
}
```
