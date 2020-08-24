# AtCoder Beginner Contest 128
## D - equeue
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> v(n);
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }

    int max = 0;
    for (int i = 0; i <= k && i <= n; i++) {
        for (int j = 0; j <= i; j++) {
            vector<int> d(0);
            int sum = 0;
            for (int kk = 0; kk < j; kk++) {
                sum += v[kk];
                d.push_back(v[kk]);
            }
            for (int kk = n - i + j; kk < n; kk++) {
                sum += v[kk];
                d.push_back(v[kk]);
            }

            sort(d.begin(), d.end());

            for (int kk = 0; kk < k - i && kk < d.size() && d[kk] < 0; kk++) {
                sum -= d[kk];
            }

            if (max < sum) {
                max = sum;
            }
        }
    }

    cout << max << endl;
}
```
