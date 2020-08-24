# AtCoder Beginner Contest 133
## E - Virus Tree 2
```cpp
#include <iostream>
#include <vector>

using namespace std;

long long solve(int k, vector<vector<int>>& graph, int idx, int prev) {
    if (k < static_cast<int>(graph[idx].size())) {
        return 0;
    }

    long long r = 1;
    for (int i = 0, j = k - (prev == -1 ? 1 : 2); i < static_cast<int>(graph[idx].size()); i++) {
        if (graph[idx][i] != prev) {
            r *= j;
            r %= 1000000007;
            j--;

            r *= solve(k, graph, graph[idx][i], idx);
            r %= 1000000007;
        }
    }

    return r;
}

int main() {
    int n, k;
    cin >> n >> k;

    vector<vector<int>> graph(n, vector<int>(0));
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        graph[a - 1].push_back(b - 1);
        graph[b - 1].push_back(a - 1);
    }

    cout << (k * solve(k, graph, 0, -1)) % 1000000007 << endl;
}
```
