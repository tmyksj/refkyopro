# AtCoder Beginner Contest 065
## D - Built?
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <queue>
#include <tuple>
#include <vector>

using namespace std;

class union_find {
    vector<int> p;
    vector<int> r;

public:
    union_find(int n) {
        p = vector<int>(n);
        r = vector<int>(n);

        for (int i = 0; i < n; i++) {
            p[i] = i;
            r[i] = 0;
        }
    }

    int root(int a) {
        if (p[a] != a) {
            p[a] = this->root(p[a]);
        }

        return p[a];
    }

    void unite(int a, int b) {
        int ra = this->root(a);
        int rb = this->root(b);

        if (ra == rb) {
            return;
        }

        if (r[ra] < r[rb]) {
            p[ra] = rb;
        } else {
            p[rb] = ra;

            if (r[ra] == r[rb]) {
                r[ra]++;
            }
        }
    }
};

int main() {
    int n;
    cin >> n;

    vector<int> x(n), y(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i];
    }

    vector<tuple<int, int, int>> xy, yx;
    for (int i = 0; i < n; i++) {
        xy.push_back(make_tuple(x[i], y[i], i));
        yx.push_back(make_tuple(y[i], x[i], i));
    }

    sort(xy.begin(), xy.end());
    sort(yx.begin(), yx.end());

    priority_queue<tuple<int, int, int>,
            vector<tuple<int, int, int>>,
            greater<tuple<int, int, int>>> que;
    for (int i = 0; i < n - 1; i++) {
        que.push(make_tuple(
                min(abs(get<0>(xy[i]) - get<0>(xy[i + 1])), abs(get<1>(xy[i]) - get<1>(xy[i + 1]))),
                get<2>(xy[i]), get<2>(xy[i + 1])));
        que.push(make_tuple(
                min(abs(get<0>(yx[i]) - get<0>(yx[i + 1])), abs(get<1>(yx[i]) - get<1>(yx[i + 1]))),
                get<2>(yx[i]), get<2>(yx[i + 1])));
    }

    long long res = 0;

    union_find uf(n);
    while (!que.empty()) {
        tuple<int, int, int> q = que.top();
        que.pop();

        if (uf.root(get<1>(q)) != uf.root(get<2>(q))) {
            uf.unite(get<1>(q), get<2>(q));
            res += get<0>(q);
        }
    }

    cout << res << endl;
}
```
