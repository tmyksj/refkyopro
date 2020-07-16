# Library - Lowest Common Ancestor
```cpp
class lowest_common_ancestor {
    vector<int> d;
    vector<vector<int>> g;
    vector<vector<int>> p;

    void dfs(int i, vector<int>& r) {
        d[i] = r.size() - 1;
        p[i].push_back(r[r.size() - 1]);
        for (int j = 1; j < static_cast<int>(r.size()); j *= 2) {
            p[i].push_back(r[r.size() - j - 1]);
        }

        for (int j = 0; j < static_cast<int>(g[i].size()); j++) {
            if (d[g[i][j]] == -1) {
                r.push_back(g[i][j]);
                dfs(g[i][j], r);
                r.pop_back();
            }
        }
    }

public:
    lowest_common_ancestor(int n, vector<int>& a, vector<int>& b) {
        d = vector<int>(n, -1);
        g = vector<vector<int>>(n, vector<int>(0));
        p = vector<vector<int>>(n, vector<int>(0));

        for (int i = 0; i < n - 1; i++) {
            g[a[i]].push_back(b[i]);
            g[b[i]].push_back(a[i]);
        }

        vector<int> r(1, 0);
        dfs(0, r);
    }

    int calc(int a, int b) {
        if (d[a] < d[b]) {
            return calc(b, a);
        }

        for (int i = 0, j = 0, k = d[a] - d[b]; j < k; i++) {
            if (((1 << i) & k) > 0) {
                j += (1 << i);
                a = p[a][i + 1];
            }
        }

        for (int i = p[a].size() - 1; i > 0; i--) {
            if (p[a][i] != p[b][i]) {
                return calc(p[a][i], p[b][i]);
            }
        }

        return p[a][0] == p[b][0] ? p[a][0] : p[a][1];
    }

    int depth(int a) {
        return d[a];
    }
};
```
