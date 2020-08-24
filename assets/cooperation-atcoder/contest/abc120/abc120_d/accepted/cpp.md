# AtCoder Beginner Contest 120
## D - Decayed Bridges
```cpp
#include <iostream>
#include <vector>

using namespace std;

void uf_init(vector<int>& uf_par, vector<int>& uf_rank, vector<int>& uf_size) {
    for (int i = 0; i < static_cast<int>(uf_par.size()); i++) {
        uf_par[i] = i;
        uf_rank[i] = 0;
        uf_size[i] = 1;
    }
}

int uf_find(vector<int>& uf_par, vector<int>& uf_rank, vector<int>& uf_size, int a) {
    if (uf_par[a] != a) {
        uf_par[a] = uf_find(uf_par, uf_rank, uf_size, uf_par[a]);
    }

    return uf_par[a];
}

void uf_union(vector<int>& uf_par, vector<int>& uf_rank, vector<int>& uf_size, int a, int b) {
    int root_a = uf_find(uf_par, uf_rank, uf_size, a);
    int root_b = uf_find(uf_par, uf_rank, uf_size, b);

    if (root_a == root_b) {
        return;
    }

    if (uf_rank[root_a] < uf_rank[root_b]) {
        uf_par[root_a] = root_b;
        uf_size[root_a] = uf_size[root_b] = uf_size[root_a] + uf_size[root_b];
    } else {
        uf_par[root_b] = root_a;
        uf_size[root_a] = uf_size[root_b] = uf_size[root_a] + uf_size[root_b];

        if (uf_rank[root_a] == uf_rank[root_b]) {
            uf_rank[root_a]++;
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> a(m), b(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i] >> b[i];
        a[i]--; b[i]--;
    }

    vector<int> uf_par(n), uf_rank(n), uf_size(n);
    uf_init(uf_par, uf_rank, uf_size);

    vector<long long> res(m + 1);
    res[m] = n * (n - 1LL) / 2;
    for (int i = m - 1; i >= 0; i--) {
        int root_a = uf_find(uf_par, uf_rank, uf_size, a[i]);
        int root_b = uf_find(uf_par, uf_rank, uf_size, b[i]);

        if (root_a == root_b) {
            res[i] = res[i + 1];
        } else {
            res[i] = res[i + 1] - static_cast<long long>(uf_size[root_a]) * uf_size[root_b];
            uf_union(uf_par, uf_rank, uf_size, root_a, root_b);
        }
    }

    for (int i = 1; i <= m; i++) {
        cout << res[i] << endl;
    }
}
```
