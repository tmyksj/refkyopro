# AtCoder Beginner Contest 126
## E - 1 or 2
```cpp
#include <iostream>
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

    union_find uf(n);
    for (int i = 0; i < m; i++) {
        int x, y, z;
        cin >> x >> y >> z;
        uf.unite(x - 1, y - 1);
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        if (i == uf.root(i)) {
            res++;
        }
    }

    cout << res << endl;
}
```
