# AtCoder Beginner Contest 075
## D - Axis-Parallel Rectangle
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<long long> x(n), y(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i];
    }

    vector<long long> x_asc(x), y_asc(y);
    sort(x_asc.begin(), x_asc.end());
    sort(y_asc.begin(), y_asc.end());

    long long res = -1;
    for (int ii = 0; ii < n; ii++) {
        for (int jj = 0; jj < n; jj++) {
            for (int kk = ii; kk < n; kk++) {
                for (int ll = jj; ll < n; ll++) {
                    int cnt = 0;
                    for (int mm = 0; mm < n; mm++) {
                        if (x_asc[ii] <= x[mm] && x[mm] <= x_asc[kk]
                                && y_asc[jj] <= y[mm] && y[mm] <= y_asc[ll]) {
                            cnt++;
                        }
                    }

                    long long r = (x_asc[kk] - x_asc[ii]) * (y_asc[ll] - y_asc[jj]);
                    if (cnt >= k && (res == -1 || res > r)) {
                        res = r;
                    }
                }
            }
        }
    }

    cout << res << endl;
}
```
