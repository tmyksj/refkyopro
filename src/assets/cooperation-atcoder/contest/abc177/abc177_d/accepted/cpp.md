# AtCoder Beginner Contest 177
## D - Friends
```cpp
#include <algorithm>
#include <iostream>
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

        if (r[ra] < r[rb]) {
            p[ra] = rb;
            s[ra] = s[rb] = s[ra] + s[rb];
        } else {
            p[rb] = ra;
            s[ra] = s[rb] = s[ra] + s[rb];

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

    union_find uf(n);
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        uf.unite(a - 1, b - 1);
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        res = max(res, uf.size(i));
    }

    cout << res << endl;
}
```
