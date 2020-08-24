# Chokudai Contest 004
## A - マス目に数を書き込む問題
```cpp
#include <chrono>
#include <iostream>
#include <random>
#include <vector>

using namespace std;

int eval_score(vector<vector<int>>& a, int b1, int b2, int b3) {
    int n = a.size(), score = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = j, cur = 0; k < n; k++) {
                cur += a[i][k];
                if (cur == b1) { score += b1; }
                if (cur == b2) { score += b2; }
                if (cur == b3) { score += b3; }
                if (cur > b3) { break; }
            }
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = j, cur = 0; k < n; k++) {
                cur += a[k][j];
                if (cur == b1) { score += b1; }
                if (cur == b2) { score += b2; }
                if (cur == b3) { score += b3; }
                if (cur > b3) { break; }
            }
        }
    }

    return score;
}

int main() {
    chrono::system_clock::time_point start = chrono::system_clock::now();

    int n, b1, b2, b3;
    cin >> n >> b1 >> b2 >> b3;

    vector<vector<int>> l(n, vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> l[i][j];
        }
    }

    vector<vector<int>> r(n, vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> r[i][j];
        }
    }

    random_device device;
    mt19937 engine(device());

    uniform_int_distribution<int> dist(0, n * n - n);

    vector<vector<int>> a(n, vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            a[i][j] = l[i][j];
        }
    }

    long long score = eval_score(a, b1, b2, b3);

    while (chrono::duration_cast<chrono::milliseconds>(chrono::system_clock::now() - start).count() < 2950) {
        vector<vector<int>> tmp(n, vector<int>(n));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist(engine) == 0) {
                    uniform_int_distribution<int> d(l[i][j], r[i][j]);
                    tmp[i][j] = d(engine);
                } else {
                    tmp[i][j] = a[i][j];
                }
            }
        }

        long long s = eval_score(tmp, b1, b2, b3);

        if (score < s) {
            score = s;

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    a[i][j] = tmp[i][j];
                }
            }
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << (j == 0 ? "" : " ") << a[i][j];
        }
        cout << endl;
    }
}
```
