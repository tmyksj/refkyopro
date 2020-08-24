# AtCoder Beginner Contest 138
## D - Ki
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<vector<int>> graph(n, vector<int>(0));
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        graph[a - 1].push_back(b - 1);
    }

    vector<int> counter(n, 0);
    for (int i = 0; i < q; i++) {
        int p, x;
        cin >> p >> x;
        counter[p - 1] += x;
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < static_cast<int>(graph[i].size()); j++) {
            counter[graph[i][j]] += counter[i];
        }
    }

    cout << counter[0];
    for (int i = 1; i < n; i++) {
        cout << " " << counter[i];
    }
    cout << endl;
}
```
