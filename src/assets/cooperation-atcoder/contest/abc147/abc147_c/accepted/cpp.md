# AtCoder Beginner Contest 147
## C - HonestOrUnkind2
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    vector<vector<int>> x(n, vector<int>(0)), y(n, vector<int>(0));
    for (int i = 0; i < n; i++) {
        cin >> a[i];

        for (int j = 0; j < a[i]; j++) {
            int xi, yi;
            cin >> xi >> yi;
            x[i].push_back(xi - 1);
            y[i].push_back(yi);
        }
    }

    int res = 0;
    for (int i = 0; i < (1 << n); i++) {
        int r = 0;
        bool valid = true;
        for (int j = 0; j < n; j++) {
            if ((i & (1 << j)) > 0) {
                r++;

                for (int k = 0; k < a[j]; k++) {
                    if (((i & (1 << x[j][k])) == 0 && y[j][k] == 1)
                            || ((i & (1 << x[j][k])) > 0 && y[j][k] == 0)) {
                        valid = false;
                    }
                }
            }
        }

        if (valid && res < r) {
            res = r;
        }
    }

    cout << res << endl;
}
```
