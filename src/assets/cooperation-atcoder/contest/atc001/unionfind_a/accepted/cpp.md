# AtCoder Typical Contest 001
## B - Union Find
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
    int n, q;
    cin >> n >> q;

    union_find u(n);
    for (int i = 0; i < q; i++) {
        int p, a, b;
        cin >> p >> a >> b;

        if (p == 0) {
            u.unite(a, b);
        } else {
            cout << (u.root(a) == u.root(b) ? "Yes" : "No") << endl;
        }
    }
}
```
