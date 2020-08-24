# AtCoder Beginner Contest 174
## F - Range Set Query
```cpp
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

template <class T>
class binary_indexed_tree {
    vector<T> a;

    int lsb(int i) {
        return i & -i;
    }

public:
    binary_indexed_tree(int n) {
        a = vector<T>(n, 0);
    }

    void add(int i, T v) {
        for (; i < static_cast<int>(a.size()); i += lsb(i + 1)) {
            a[i] += v;
        }
    }

    int sum(int i) {
        T r = 0;
        for (; i >= 0; i -= lsb(i + 1)) {
            r += a[i];
        }
        return r;
    }
};

int main() {
    int n, q;
    cin >> n >> q;

    vector<int> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
        c[i]--;
    }

    vector<vector<pair<int, int>>> rl(n, vector<pair<int, int>>(0));
    for (int i = 0; i < q; i++) {
        int l, r;
        cin >> l >> r;
        rl[r - 1].push_back(make_pair(l - 1, i));
    }

    vector<int> res(q);

    vector<int> cr(n, -1);
    binary_indexed_tree<int> bit(n + 1);
    for (int i = 0; i < n; i++) {
        if (cr[c[i]] != -1) {
            bit.add(cr[c[i]] + 1, -1);
        }

        cr[c[i]] = i;
        bit.add(i + 1, 1);

        for (int j = 0; j < static_cast<int>(rl[i].size()); j++) {
            res[rl[i][j].second] = bit.sum(i + 1) - bit.sum(rl[i][j].first);
        }
    }

    for (int i = 0; i < q; i++) {
        cout << res[i] << endl;
    }
}
```
