# AtCoder Beginner Contest 157
## D - Friend Suggestions
```cpp
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
    int n, m, k;
    cin >> n >> m >> k;

    vector<int> a(m), b(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i] >> b[i];
        a[i]--;
        b[i]--;
    }

    vector<vector<int>> ab(n, vector<int>(0));
    for (int i = 0; i < m; i++) {
        ab[a[i]].push_back(b[i]);
        ab[b[i]].push_back(a[i]);
    }

    vector<int> c(k), d(k);
    for (int i = 0; i < k; i++) {
        cin >> c[i] >> d[i];
        c[i]--;
        d[i]--;
    }

    vector<vector<int>> cd(n, vector<int>(0));
    for (int i = 0; i < k; i++) {
        cd[c[i]].push_back(d[i]);
        cd[d[i]].push_back(c[i]);
    }

    union_find uf(n);
    for (int i = 0; i < m; i++) {
        uf.unite(a[i], b[i]);
    }

    vector<int> res(n);
    for (int i = 0; i < n; i++) {
        res[i] = uf.size(i) - ab[i].size() - 1;

        for (int j = 0; j < static_cast<int>(cd[i].size()); j++) {
            if (uf.root(i) == uf.root(cd[i][j])) {
                res[i]--;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        cout << (i == 0 ? "" : " ") << res[i];
    }
    cout << endl;
}
```
