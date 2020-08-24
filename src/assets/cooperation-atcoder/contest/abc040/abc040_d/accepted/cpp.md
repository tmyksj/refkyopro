# AtCoder Beginner Contest 040
## D - 道路の老朽化対策について
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <tuple>
#include <vector>

using namespace std;

class union_find {
    vector<int> p;
    vector<int> r;
    vector<int> s;

public:
    union_find(int n) {
        p = vector<int>(n);
        r = vector<int>(n);
        s = vector<int>(n);

        for (int i = 0; i < n; i++) {
            p[i] = i;
            r[i] = 0;
            s[i] = 1;
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

        s[ra] = s[rb] = this->size(ra) + this->size(rb);

        if (r[ra] < r[rb]) {
            p[ra] = rb;
        } else {
            p[rb] = ra;

            if (r[ra] == r[rb]) {
                r[ra]++;
            }
        }
    }

    int size(int a) {
        s[a] = s[this->root(a)];
        return s[a];
    }
};

int main() {
    int n, m;
    cin >> n >> m;

    vector<tuple<int, int, int>> yab(m);
    for (int i = 0; i < m; i++) {
        int a, b, y;
        cin >> a >> b >> y;
        yab[i] = make_tuple(y, a - 1, b - 1);
    }

    sort(yab.begin(), yab.end(), greater<tuple<int, int, int>>());

    int q;
    cin >> q;

    vector<tuple<int, int, int>> wvi(q);
    for (int i = 0; i < q; i++) {
        int v, w;
        cin >> v >> w;
        wvi[i] = make_tuple(w, v - 1, i);
    }

    sort(wvi.begin(), wvi.end(), greater<tuple<int, int, int>>());

    vector<int> res(q);

    union_find u(n);
    for (int i = 0, j = 0; i < q; i++) {
        for (; j < m && get<0>(yab[j]) > get<0>(wvi[i]); j++) {
            u.unite(get<1>(yab[j]), get<2>(yab[j]));
        }
        res[get<2>(wvi[i])] = u.size(get<1>(wvi[i]));
    }

    for (int i = 0; i < q; i++) {
        cout << res[i] << endl;
    }
}
```
