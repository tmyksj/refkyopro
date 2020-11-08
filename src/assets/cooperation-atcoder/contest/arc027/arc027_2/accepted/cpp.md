# AtCoder Regular Contest 027
## B - 大事な数なのでZ回書きまLた。
```cpp
#include <algorithm>
#include <iostream>
#include <string>
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
            p[a] = root(p[a]);
        }

        return p[a];
    }

    void unite(int a, int b) {
        int ra = root(a);
        int rb = root(b);

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
    string s1, s2;
    cin >> n >> s1 >> s2;

    union_find uf(26);
    for (int i = 0; i < n; i++) {
        if ('A' <= s1[i] && s1[i] <= 'Z' && 'A' <= s2[i] && s2[i] <= 'Z') {
            uf.unite(s1[i] - 'A', s2[i] - 'A');
        }
    }

    vector<int> v(26, 11);
    for (int i = 0; i < n; i++) {
        if ('A' <= s1[i] && s1[i] <= 'Z' && 'A' <= s2[i] && s2[i] <= 'Z') {
            v[uf.root(s1[i] - 'A')] = min(v[uf.root(s1[i] - 'A')], (i == 0 ? 9 : 10));
        } else if ('A' <= s1[i] && s1[i] <= 'Z') {
            v[uf.root(s1[i] - 'A')] = 1;
        } else if ('A' <= s2[i] && s2[i] <= 'Z') {
            v[uf.root(s2[i] - 'A')] = 1;
        }
    }

    long long res = 1;
    for (int i = 0; i < 26; i++) {
        if (uf.root(i) == i && v[i] <= 10) {
            res *= v[i];
        }
    }

    cout << res << endl;
}
```
