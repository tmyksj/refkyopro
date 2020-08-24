# AtCoder Beginner Contest 097
## D - Equals
```cpp
#include <iostream>
#include <vector>

using namespace std;

class union_find {
    vector<int> parent;
    vector<int> rank;

public:
    union_find(int n) {
        parent = vector<int>(n);
        rank = vector<int>(n);

        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0;
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
        } else {
            parent[rb] = ra;

            if (rank[ra] == rank[rb]) {
                rank[ra]++;
            }
        }
    }
};

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> p(n);
    for (int i = 0; i < n; i++) {
        cin >> p[i];
        p[i]--;
    }

    union_find uf(n);
    for (int i = 0; i < m; i++) {
        int x, y;
        cin >> x >> y;
        uf.unite(x - 1, y - 1);
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        if (uf.root(i) == uf.root(p[i])) {
            res++;
        }
    }

    cout << res << endl;
}
```
