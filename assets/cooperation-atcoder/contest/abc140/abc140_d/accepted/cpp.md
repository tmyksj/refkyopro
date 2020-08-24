# AtCoder Beginner Contest 140
## D - Face Produces Unhappiness
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class union_find {
    vector<int> parent;
    vector<int> rank;
    vector<int> size;

public:
    union_find(int n) {
        parent = vector<int>(n);
        rank = vector<int>(n);
        size = vector<int>(n);

        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0;
            size[i] = 1;
        }
    }

    int root(int a) {
        if (parent[a] != a) {
            parent[a] = this->root(parent[a]);
        }

        return parent[a];
    }

    void unite(int a, int b) {
        int ra = this->root(a);
        int rb = this->root(b);

        if (ra == rb) {
            return;
        }

        if (rank[ra] < rank[rb]) {
            parent[ra] = rb;
            size[ra] = size[rb] = size[ra] + size[rb];
        } else {
            parent[rb] = ra;
            size[ra] = size[rb] = size[ra] + size[rb];

            if (rank[ra] == rank[rb]) {
                rank[ra]++;
            }
        }
    }

    int sz(int a) {
        return size[a];
    }
};

int main() {
    int n, k;
    string s;
    cin >> n >> k >> s;

    union_find uf(n);
    for (int i = 1; i < n; i++) {
        if (s[i - 1] == s[i]) {
            uf.unite(i - 1, i);
        }
    }

    int k_cnt = 0;
    for (int i = 1, start = 0, init = s[0], prev = s[0]; i < n; i++) {
        if (init != prev && init == s[i]) {
            uf.unite(start, i - 1);
            uf.unite(i - 1, i);
            start = i;
            k_cnt++;

            if (k_cnt == k) {
                break;
            }
        }

        prev = s[i];
    }

    if (k_cnt < k) {
        for (int i = 1; i < n; i++) {
            if (uf.root(i - 1) != uf.root(i)) {
                uf.unite(0, i);
                k_cnt++;
                break;
            }
        }
    }

    if (k_cnt < k) {
        for (int i = n - 2; i >= 0; i--) {
            if (uf.root(i) != uf.root(n - 1)) {
                uf.unite(i, n - 1);
                k_cnt++;
                break;
            }
        }
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        if (uf.root(i) == i) {
            res += uf.sz(i) - 1;
        }
    }

    cout << res << endl;
}
```
