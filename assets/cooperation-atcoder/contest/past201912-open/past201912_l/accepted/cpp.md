# 第一回 アルゴリズム実技検定 過去問
## L - グラデーション
```cpp
#include <algorithm>
#include <cmath>
#include <functional>
#include <iomanip>
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
    int n, m;
    cin >> n >> m;

    vector<long long> x(n + m), y(n + m), c(n + m);
    for (int i = 0; i < n + m; i++) {
        cin >> x[i] >> y[i] >> c[i];
    }

    double res = 1LL << 61;
    for (int i = 0; i < (1 << m); i++) {
        union_find uf(n + m);

        priority_queue<tuple<long long, int, int>,
                vector<tuple<long long, int, int>>,
                greater<tuple<long long, int, int>>> que;
        for (int j = 0; j < n + m; j++) {
            for (int k = 0; k < n + m; k++) {
                if (j != k && (j < n || ((1 << (j - n)) & i) > 0) && (k < n || ((1 << (k - n)) & i) > 0)) {
                    long long dx = x[j] - x[k], dy = y[j] - y[k];
                    que.push(make_tuple((c[j] == c[k] ? 1 : 100) * (dx * dx + dy * dy), j, k));
                }
            }
        }

        double r = 0;
        while (!que.empty()) {
            tuple<long long, int, int> q = que.top();
            que.pop();

            if (uf.root(get<1>(q)) != uf.root(get<2>(q))) {
                uf.unite(get<1>(q), get<2>(q));
                r += sqrt(get<0>(q));
            }
        }

        res = min(res, r);
    }

    cout << setprecision(12) << fixed << res << endl;
}
```
