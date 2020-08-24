# M-SOLUTIONS プロコンオープン
## D - Maximum Sum of Minimum
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <numeric>
#include <queue>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> g(n, vector<int>(0));
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        g[a - 1].push_back(b - 1);
        g[b - 1].push_back(a - 1);
    }

    vector<long long> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
    }

    sort(c.begin(), c.end(), greater<long long>());

    vector<long long> r(n, -1);
    r[0] = c[0];

    queue<int> que;
    que.push(0);
    for (int i = 1; !que.empty(); ) {
        int q = que.front();
        que.pop();

        for (int j = 0; j < static_cast<int>(g[q].size()); j++) {
            if (r[g[q][j]] == -1) {
                r[g[q][j]] = c[i];
                que.push(g[q][j]);
                i++;
            }
        }
    }

    cout << accumulate(c.begin() + 1, c.end(), 0LL) << endl;
    for (int i = 0; i < n; i++) {
        cout << (i == 0 ? "" : " ") << r[i];
    }
    cout << endl;
}
```
