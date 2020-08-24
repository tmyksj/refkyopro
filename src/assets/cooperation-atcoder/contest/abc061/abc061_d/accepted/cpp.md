# AtCoder Beginner Contest 061
## D - Score Attack
```cpp
#include <iostream>
#include <tuple>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<tuple<int, int, long long>> graph(0);
    for (int i = 0; i < m; i++) {
        int a, b;
        long long c;
        cin >> a >> b >> c;
        graph.push_back(make_tuple(a - 1, b - 1, -c));
    }

    vector<long long> dist(n, 1LL << 61);
    dist[0] = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (dist[get<1>(graph[j])] > dist[get<0>(graph[j])] + get<2>(graph[j])) {
                dist[get<1>(graph[j])] = dist[get<0>(graph[j])] + get<2>(graph[j]);
            }
        }
    }

    long long res = dist[n - 1];
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (dist[get<1>(graph[j])] > dist[get<0>(graph[j])] + get<2>(graph[j])) {
                dist[get<1>(graph[j])] = dist[get<0>(graph[j])] + get<2>(graph[j]);
            }
        }
    }

    if (res == dist[n - 1]) {
        cout << -res << endl;
    } else {
        cout << "inf" << endl;
    }
}
```
